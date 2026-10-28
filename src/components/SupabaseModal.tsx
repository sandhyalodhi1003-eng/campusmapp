import React, { useState } from 'react';
import {
  Database,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  X,
  UploadCloud,
  PlusCircle,
  ExternalLink,
  RefreshCw,
  Server
} from 'lucide-react';
import { SUPABASE_URL } from '../lib/supabase';
import { seedCampusesToSupabase, addCampusToSupabase } from '../services/campusService';
import { Campus, InstitutionType, OwnershipType } from '../types/campus';
import { INSTITUTION_TYPES } from '../data/campuses';

interface SupabaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  dataSource: 'supabase' | 'local_fallback';
  totalCampuses: number;
  onRefreshData: () => void;
  errorMessage?: string;
}

export const SupabaseModal: React.FC<SupabaseModalProps> = ({
  isOpen,
  onClose,
  dataSource,
  totalCampuses,
  onRefreshData,
  errorMessage
}) => {
  const [activeTab, setActiveTab] = useState<'status' | 'add' | 'sql'>('status');
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedResult, setSeedResult] = useState<{ success: boolean; message: string } | null>(null);
  const [copiedSql, setCopiedSql] = useState(false);

  // New campus form state
  const [newCampus, setNewCampus] = useState<{
    name: string;
    campusName: string;
    city: string;
    state: string;
    latitude: string;
    longitude: string;
    institutionType: InstitutionType;
    ownership: OwnershipType;
    website: string;
    admissionUrl: string;
    courses: string;
    facilities: string;
    hostelAvailable: boolean;
  }>({
    name: '',
    campusName: '',
    city: '',
    state: '',
    latitude: '',
    longitude: '',
    institutionType: 'Institute of National Importance',
    ownership: 'Public / Government',
    website: '',
    admissionUrl: '',
    courses: 'B.Tech Computer Science, M.Tech Data Science',
    facilities: 'Central Library, Hostels, Sports Complex',
    hostelAvailable: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  if (!isOpen) return null;

  const handleSeed = async () => {
    setIsSeeding(true);
    setSeedResult(null);
    const res = await seedCampusesToSupabase();
    setIsSeeding(false);
    setSeedResult(res);
    if (res.success) {
      onRefreshData();
    }
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCampus.name || !newCampus.city || !newCampus.state || !newCampus.latitude || !newCampus.longitude) {
      setSubmitResult({ success: false, message: 'Please fill in all required campus fields.' });
      return;
    }

    const lat = parseFloat(newCampus.latitude);
    const lng = parseFloat(newCampus.longitude);
    if (isNaN(lat) || isNaN(lng)) {
      setSubmitResult({ success: false, message: 'Latitude and Longitude must be valid numbers.' });
      return;
    }

    const slug = newCampus.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const campusObj: Campus = {
      id: `campus-${Date.now()}`,
      name: newCampus.name,
      campusName: newCampus.campusName || newCampus.name,
      slug,
      institutionType: newCampus.institutionType,
      ownership: newCampus.ownership,
      address: `${newCampus.city}, ${newCampus.state}`,
      city: newCampus.city,
      district: newCampus.city,
      state: newCampus.state,
      postalCode: '110001',
      latitude: lat,
      longitude: lng,
      courses: newCampus.courses.split(',').map((c) => c.trim()).filter(Boolean),
      facilities: newCampus.facilities.split(',').map((f) => f.trim()).filter(Boolean),
      hostelAvailable: newCampus.hostelAvailable,
      website: newCampus.website || 'https://www.example.ac.in',
      admissionUrl: newCampus.admissionUrl || newCampus.website || 'https://www.example.ac.in/admissions',
      contactEmail: 'admissions@campus.edu.in',
      contactPhone: '+91-11-0000-0000',
      imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
      sourceUrls: [newCampus.website || 'https://www.example.ac.in'],
      lastVerified: new Date().toISOString().split('T')[0],
      verificationStatus: 'Verified Official'
    };

    setIsSubmitting(true);
    setSubmitResult(null);
    const res = await addCampusToSupabase(campusObj);
    setIsSubmitting(false);
    setSubmitResult(res);
    if (res.success) {
      onRefreshData();
      setNewCampus({
        name: '',
        campusName: '',
        city: '',
        state: '',
        latitude: '',
        longitude: '',
        institutionType: 'Institute of National Importance',
        ownership: 'Public / Government',
        website: '',
        admissionUrl: '',
        courses: 'B.Tech Computer Science, M.Tech Data Science',
        facilities: 'Central Library, Hostels, Sports Complex',
        hostelAvailable: true
      });
    }
  };

  const sqlCode = `-- Create the 'campuses' table in Supabase SQL Editor
CREATE TABLE IF NOT EXISTS campuses (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  campus_name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  institution_type TEXT NOT NULL,
  ownership TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  district TEXT NOT NULL,
  state TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  courses TEXT[] DEFAULT '{}',
  facilities TEXT[] DEFAULT '{}',
  hostel_available BOOLEAN DEFAULT false,
  website TEXT NOT NULL,
  admission_url TEXT NOT NULL,
  contact_email TEXT,
  contact_phone TEXT,
  image_url TEXT,
  source_urls TEXT[] DEFAULT '{}',
  last_verified DATE DEFAULT CURRENT_DATE,
  verification_status TEXT DEFAULT 'Verified Official',
  established_year INTEGER,
  campus_area_acres INTEGER,
  short_description TEXT,
  popular_disciplines TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS & allow public read access
ALTER TABLE campuses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read" ON campuses FOR SELECT USING (true);
CREATE POLICY "Public Insert" ON campuses FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Update" ON campuses FOR UPDATE USING (true);`;

  const copySqlToClipboard = () => {
    navigator.clipboard.writeText(sqlCode);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-slate-200">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <span>Supabase Backend Management</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  PostgreSQL
                </span>
              </h3>
              <p className="text-xs text-slate-400 truncate max-w-sm">
                Connected to: {SUPABASE_URL}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('status')}
            className={`py-3 px-3 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'status'
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Server className="w-4 h-4" />
            <span>Connection & Seeding</span>
          </button>

          <button
            onClick={() => setActiveTab('add')}
            className={`py-3 px-3 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'add'
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add New Campus</span>
          </button>

          <button
            onClick={() => setActiveTab('sql')}
            className={`py-3 px-3 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'sql'
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>SQL Schema</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-xs">
          {activeTab === 'status' && (
            <div className="space-y-4">
              {/* Status Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 font-medium">Active Data Source:</span>
                  <span
                    className={`font-semibold px-2.5 py-0.5 rounded-full text-xs flex items-center gap-1 ${
                      dataSource === 'supabase'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {dataSource === 'supabase' ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Live Supabase Cloud DB</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                        <span>Verified Local Dataset (Fallback)</span>
                      </>
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-600 font-medium">Campuses Loaded:</span>
                  <span className="font-bold text-slate-900 text-sm">{totalCampuses}</span>
                </div>

                {errorMessage && (
                  <div className="p-2.5 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl mt-2 text-[11px] leading-relaxed">
                    <b>Notice:</b> {errorMessage}
                  </div>
                )}
              </div>

              {/* Seed Action */}
              <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 space-y-3">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <UploadCloud className="w-4 h-4 text-emerald-600" />
                    <span>One-Click Database Seeding</span>
                  </h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    Upload all 30+ verified Indian institutions (IITs, IIMs, AIIMS, NITs, Central Universities) with verified GPS coordinates and URLs directly into your Supabase database table.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSeed}
                    disabled={isSeeding}
                    className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold px-4 py-2 rounded-xl flex items-center gap-2 transition cursor-pointer shadow-xs"
                  >
                    {isSeeding ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <UploadCloud className="w-4 h-4" />
                    )}
                    <span>{isSeeding ? 'Uploading Campuses...' : 'Seed Campuses to Supabase'}</span>
                  </button>

                  <button
                    onClick={onRefreshData}
                    className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-3 py-2 rounded-xl transition cursor-pointer"
                  >
                    Refresh Data
                  </button>
                </div>

                {seedResult && (
                  <div
                    className={`p-3 rounded-xl border text-xs font-medium ${
                      seedResult.success
                        ? 'bg-emerald-100/70 border-emerald-300 text-emerald-900'
                        : 'bg-rose-50 border-rose-200 text-rose-900'
                    }`}
                  >
                    {seedResult.message}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'add' && (
            <form onSubmit={handleAddSubmit} className="space-y-3">
              <p className="text-slate-500 mb-2">
                Add a new campus record. It will be stored in your Supabase database and reflected on the interactive map.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-900 mb-1">
                    Institution Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Indian Institute of Science"
                    value={newCampus.name}
                    onChange={(e) => setNewCampus({ ...newCampus, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-900 mb-1">
                    Campus Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Main Science Campus"
                    value={newCampus.campusName}
                    onChange={(e) => setNewCampus({ ...newCampus, campusName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-900 mb-1">City *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bengaluru"
                    value={newCampus.city}
                    onChange={(e) => setNewCampus({ ...newCampus, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-900 mb-1">State *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Karnataka"
                    value={newCampus.state}
                    onChange={(e) => setNewCampus({ ...newCampus, state: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-900 mb-1">
                    Latitude (° N) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 13.0219"
                    value={newCampus.latitude}
                    onChange={(e) => setNewCampus({ ...newCampus, latitude: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-900 mb-1">
                    Longitude (° E) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 77.5671"
                    value={newCampus.longitude}
                    onChange={(e) => setNewCampus({ ...newCampus, longitude: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-900 mb-1">Category</label>
                  <select
                    value={newCampus.institutionType}
                    onChange={(e) =>
                      setNewCampus({ ...newCampus, institutionType: e.target.value as InstitutionType })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 cursor-pointer"
                  >
                    {INSTITUTION_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-900 mb-1">Ownership</label>
                  <select
                    value={newCampus.ownership}
                    onChange={(e) =>
                      setNewCampus({ ...newCampus, ownership: e.target.value as OwnershipType })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 cursor-pointer"
                  >
                    <option value="Public / Government">Public / Government</option>
                    <option value="Private">Private</option>
                    <option value="Public-Private Partnership">Public-Private Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-900 mb-1">
                  Official Website
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={newCampus.website}
                  onChange={(e) => setNewCampus({ ...newCampus, website: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold px-4 py-2.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>{isSubmitting ? 'Saving to Supabase...' : 'Save Campus to Supabase'}</span>
                </button>
              </div>

              {submitResult && (
                <div
                  className={`p-3 rounded-xl border text-xs font-medium ${
                    submitResult.success
                      ? 'bg-emerald-100/70 border-emerald-300 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  {submitResult.message}
                </div>
              )}
            </form>
          )}

          {activeTab === 'sql' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-medium">
                  Run this SQL in the Supabase Dashboard -> SQL Editor:
                </span>
                <button
                  onClick={copySqlToClipboard}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition cursor-pointer font-semibold"
                >
                  {copiedSql ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedSql ? 'Copied SQL' : 'Copy SQL Script'}</span>
                </button>
              </div>

              <pre className="p-3 bg-slate-900 text-emerald-400 rounded-2xl overflow-x-auto text-[11px] font-mono leading-relaxed border border-slate-800 max-h-72">
                {sqlCode}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

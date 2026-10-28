import React, { useState } from 'react';
import { Campus } from '../types/campus';
import { findNearbyCampuses } from '../data/campuses';
import {
  X,
  MapPin,
  ExternalLink,
  Phone,
  Mail,
  Building2,
  Calendar,
  CheckCircle,
  ShieldCheck,
  Compass,
  Navigation2,
  BookOpen,
  Home,
  Layers,
  ArrowRight,
  Share2,
  Check
} from 'lucide-react';

interface CampusDetailModalProps {
  campus: Campus | null;
  onClose: () => void;
  onLocateOnMap: (campus: Campus) => void;
  onSelectOtherCampus: (campus: Campus) => void;
  isCompared: boolean;
  onToggleCompare: (campus: Campus) => void;
}

export const CampusDetailModal: React.FC<CampusDetailModalProps> = ({
  campus,
  onClose,
  onLocateOnMap,
  onSelectOtherCampus,
  isCompared,
  onToggleCompare
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [nearbyRadiusKm, setNearbyRadiusKm] = useState<number>(150);

  if (!campus) return null;

  const nearbyList = findNearbyCampuses(
    campus.latitude,
    campus.longitude,
    campus.id,
    nearbyRadiusKm
  );

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${campus.latitude},${campus.longitude}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Hero Image */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900 shrink-0">
          <img
            src={campus.imageUrl}
            alt={campus.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

          {/* Top Floating Action Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600/90 text-white backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {campus.institutionType}
              </span>
              <span className="bg-emerald-600/90 text-white backdrop-blur-md text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                {campus.verificationStatus}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full backdrop-blur-md transition shadow-md cursor-pointer"
                title="Share campus link"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full backdrop-blur-md transition shadow-md cursor-pointer"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Hero Bottom Information */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-blue-200 text-xs mb-1 font-medium">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>
                {campus.city}, {campus.district}, {campus.state} — {campus.postalCode}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-1">
              {campus.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Campus: <span className="font-semibold text-white">{campus.campusName}</span>
            </p>
          </div>
        </div>

        {/* Content Body - Scrollable */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Action Callout Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  onLocateOnMap(campus);
                  onClose();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-xs transition cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Show on Map</span>
              </button>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 border border-slate-200 shadow-2xs transition"
              >
                <Navigation2 className="w-4 h-4 text-blue-600" />
                <span>Get Directions</span>
              </a>

              <a
                href={campus.admissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-xs transition"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Official Admission Portal</span>
              </a>
            </div>

            <button
              onClick={() => onToggleCompare(campus)}
              className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition cursor-pointer flex items-center gap-1.5 ${
                isCompared
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{isCompared ? 'Remove from Compare' : '+ Add to Compare'}</span>
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-50/80 p-3 rounded-2xl border border-slate-200/70">
              <span className="text-[11px] text-slate-500 block">Established Year</span>
              <span className="font-bold text-slate-900 text-sm">
                {campus.establishedYear ? `Year ${campus.establishedYear}` : 'Not available'}
              </span>
            </div>
            <div className="bg-slate-50/80 p-3 rounded-2xl border border-slate-200/70">
              <span className="text-[11px] text-slate-500 block">Campus Size</span>
              <span className="font-bold text-slate-900 text-sm">
                {campus.campusAreaAcres ? `${campus.campusAreaAcres} Acres` : 'Not available'}
              </span>
            </div>
            <div className="bg-slate-50/80 p-3 rounded-2xl border border-slate-200/70">
              <span className="text-[11px] text-slate-500 block">Ownership</span>
              <span className="font-bold text-slate-900 text-sm">{campus.ownership}</span>
            </div>
            <div className="bg-slate-50/80 p-3 rounded-2xl border border-slate-200/70">
              <span className="text-[11px] text-slate-500 block">Hostels</span>
              <span className="font-bold text-slate-900 text-sm flex items-center gap-1">
                {campus.hostelAvailable ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Available On-Campus</span>
                  </>
                ) : (
                  <span className="text-slate-500">Not verified</span>
                )}
              </span>
            </div>
          </div>

          {/* Description */}
          {campus.shortDescription && (
            <div>
              <h2 className="text-sm font-bold text-slate-900 mb-1">About the Institution</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                {campus.shortDescription}
              </p>
            </div>
          )}

          {/* Academic Programs & Courses */}
          <div>
            <h2 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-600" />
              Verified Programs & Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {campus.courses.map((course, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Campus Facilities */}
          <div>
            <h2 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-blue-600" />
              Verified Campus Facilities & Infrastructure
            </h2>
            <div className="flex flex-wrap gap-2">
              {campus.facilities.map((fac, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-xl font-medium flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  {fac}
                </span>
              ))}
            </div>
          </div>

          {/* Address and Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Full Physical Address
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">{campus.address}</p>
              <p className="text-xs text-slate-600">
                {campus.city}, {campus.district}, {campus.state} — {campus.postalCode}
              </p>
              <div className="pt-2 text-[11px] text-slate-500 font-mono">
                Coordinates: {campus.latitude.toFixed(4)}° N, {campus.longitude.toFixed(4)}° E
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2.5">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Official Contact & Links
              </h3>
              <div className="text-xs space-y-2 text-slate-700">
                <a
                  href={campus.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{campus.website}</span>
                </a>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{campus.contactEmail}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{campus.contactPhone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Campuses Discovery Tool */}
          <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-blue-600" />
                  Nearby Institutions & Campuses
                </h3>
                <p className="text-[11px] text-slate-600">
                  Institutions within {nearbyRadiusKm} km radius from this location
                </p>
              </div>

              {/* Radius Selector */}
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200">
                {[50, 150, 300].map((radius) => (
                  <button
                    key={radius}
                    onClick={() => setNearbyRadiusKm(radius)}
                    className={`text-xs px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                      nearbyRadiusKm === radius
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {radius} km
                  </button>
                ))}
              </div>
            </div>

            {nearbyList.length === 0 ? (
              <p className="text-xs text-slate-500 py-3 text-center">
                No other cataloged campuses within {nearbyRadiusKm} km. Try expanding the search radius.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {nearbyList.slice(0, 4).map(({ campus: nearby, distanceKm }) => (
                  <div
                    key={nearby.id}
                    onClick={() => onSelectOtherCampus(nearby)}
                    className="p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-slate-200 transition cursor-pointer flex items-center justify-between group"
                  >
                    <div className="pr-2">
                      <h4 className="font-bold text-xs text-slate-900 group-hover:text-blue-600 line-clamp-1">
                        {nearby.name}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {nearby.city}, {nearby.state} •{' '}
                        <span className="font-semibold text-blue-700">{distanceKm} km away</span>
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Official Verification Audit Trail */}
          <div className="text-[11px] text-slate-500 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
            <span>
              Last verified against official sources: <b>{campus.lastVerified}</b>
            </span>
            <span>
              Sources:{' '}
              {campus.sourceUrls.map((s, i) => (
                <a
                  key={i}
                  href={s}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline ml-1"
                >
                  [{i + 1}]
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

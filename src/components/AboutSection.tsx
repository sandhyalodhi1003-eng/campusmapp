import React from 'react';
import {
  ShieldAlert,
  Compass,
  CheckCircle2,
  FileCheck,
  Building,
  HelpCircle,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic Discovery Mission</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
            About India Campus Map
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            India Campus Map helps students explore educational institutions across India through a location-based discovery experience. Our goal is to make campus information easier to find, understand, and compare.
          </p>
        </div>

        {/* 3 Key Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-950 text-base mb-2">Geographic Discovery</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore campuses based on their real verified geographic coordinates, connectivity, and nearby ecosystem, rather than getting lost in scattered directories.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-950 text-base mb-2">Verified Primary Data</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We link directly to official university websites, institutional portals, and primary government gazettes without inventing ratings, placement claims, or cutoffs.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-950 text-base mb-2">Objective Comparison</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Side-by-side matrices display verified facts side by side. We never declare single "winner" colleges, giving students transparency to make informed choices.
            </p>
          </div>
        </div>

        {/* Important Official Advisory & Verification Disclaimer */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 sm:p-6 text-amber-950 flex flex-col sm:flex-row gap-4 items-start">
          <div className="p-2 bg-amber-100 text-amber-800 rounded-xl shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <h4 className="font-bold text-amber-900 text-sm sm:text-base">
              Important Verification Advisory for Students & Parents
            </h4>
            <p className="text-amber-800 leading-relaxed">
              Educational institutions continually update their degree offerings, eligibility criteria, hostel availability, fee schedules, and admission cycles.
              <b> Information presented on this platform should always be verified against official institutional websites and authorized regulatory gazettes (UGC, AICTE, NMC, BCI) prior to making admission or financial decisions.</b>
            </p>
            <p className="text-amber-700 text-xs">
              This platform currently features an initial verified catalog of institutions across key Indian states and union territories. Expansion to more institutions is actively in progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

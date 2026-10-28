import React from 'react';
import { Compass, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-base">India Campus Map</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Explore campuses. Discover opportunities. A digital spatial directory helping students and researchers navigate India’s higher education ecosystem.
            </p>
            <div className="text-[11px] text-slate-500">
              Verified coordinates and institutional datasets powered by OpenStreetMap & institutional archives.
            </div>
          </div>

          {/* Quick Educational Authorities Links */}
          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Official Portals
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://www.ugc.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  <span>University Grants Commission (UGC)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.aicte-india.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  <span>AICTE India</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.nirfindia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  <span>NIRF India</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://josaa.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  <span>JoSAA Admissions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Standards & Transparency */}
          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Guidelines
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>Verified GPS coordinates</li>
              <li>Zero fabricated ranking metrics</li>
              <li>Direct official links only</li>
              <li>Open data contribution framework</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} India Campus Map. Built for students across India.</p>
          <p className="flex items-center gap-1">
            <span>Built with precision for Indian Education</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

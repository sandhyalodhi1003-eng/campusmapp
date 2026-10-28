import React from 'react';
import { Search, MapPin, Compass, ArrowRight, ShieldCheck, School, Layers } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onExploreMap: () => void;
  onDiscoverColleges: () => void;
  onSelectState: (state: string) => void;
  totalCampuses: number;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  onExploreMap,
  onDiscoverColleges,
  onSelectState,
  totalCampuses
}) => {
  return (
    <div className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* Background subtle geometric grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-3 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>Explore Campuses. Discover Opportunities.</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-3">
            Every Campus in India, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              on One Interactive Map.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
            Discover colleges and universities across India. Explore campus locations, compare institutions side-by-side, and find the right place for your educational journey.
          </p>

          {/* Large Hero Search Input */}
          <div className="relative max-w-2xl mb-4">
            <div className="flex items-center bg-white rounded-2xl p-1.5 shadow-xl border border-slate-200">
              <div className="pl-3 text-slate-400">
                <Search className="w-5 h-5 text-blue-600" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search colleges, universities, cities, or states..."
                className="w-full text-slate-900 text-xs sm:text-sm px-3 py-2.5 focus:outline-none placeholder:text-slate-400"
              />
              <button
                onClick={onExploreMap}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl transition flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm"
              >
                <span>Search Map</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Hub Buttons & State Shortcuts */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300">
            <span className="text-slate-400 font-medium">Quick Explore:</span>
            {['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'West Bengal', 'Rajasthan'].map((st) => (
              <button
                key={st}
                onClick={() => onSelectState(st)}
                className="bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded-lg backdrop-blur-xs transition cursor-pointer"
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              <School className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block">{totalCampuses}+ Premier Institutions</span>
              <span className="text-[11px] text-slate-400">Accurate Coordinates</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block">Official Admissions</span>
              <span className="text-[11px] text-slate-400">Direct Verified Links</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block">Side-by-Side Compare</span>
              <span className="text-[11px] text-slate-400">Evaluate Up to 4 Colleges</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block">Nearby College Radar</span>
              <span className="text-[11px] text-slate-400">Haversine Distance (km)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

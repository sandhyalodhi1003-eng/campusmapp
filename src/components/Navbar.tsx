import React, { useState } from 'react';
import {
  MapPin,
  Search,
  Layers,
  Info,
  Menu,
  X,
  Compass,
  GraduationCap,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
  onNavigateToMap: () => void;
  onNavigateToColleges: () => void;
  onNavigateToAbout: () => void;
  compareCount: number;
  onOpenCompare: () => void;
  onOpenDatabase: () => void;
  isSupabaseLive: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSearchChange,
  searchQuery,
  onNavigateToMap,
  onNavigateToColleges,
  onNavigateToAbout,
  compareCount,
  onOpenCompare,
  onOpenDatabase,
  isSupabaseLive
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo & Brand */}
          <div
            onClick={onNavigateToMap}
            className="flex items-center gap-2.5 cursor-pointer shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-md shadow-blue-900/20">
              <Compass className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 flex items-center gap-1">
                India Campus Map
              </span>
              <span className="text-[10px] font-semibold text-blue-700 tracking-wider uppercase block -mt-0.5">
                Explore • Discover • Compare
              </span>
            </div>
          </div>

          {/* Quick Search Bar in Navbar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search colleges, cities, states, courses..."
                className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-xs sm:text-sm text-slate-900 pl-9 pr-8 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-700">
            <button
              onClick={onNavigateToMap}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 transition cursor-pointer flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-blue-600" />
              <span>Explore Map</span>
            </button>

            <button
              onClick={onNavigateToColleges}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 transition cursor-pointer flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Discover Colleges</span>
            </button>

            <button
              onClick={onOpenCompare}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 transition cursor-pointer flex items-center gap-1.5 relative"
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Compare Colleges</span>
              {compareCount > 0 && (
                <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {compareCount}
                </span>
              )}
            </button>

            <button
              onClick={onNavigateToAbout}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 transition cursor-pointer flex items-center gap-1.5 text-slate-600"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </button>
          </nav>

          {/* Compare Badge on Mobile / Tablet */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCompare}
              className="relative p-2 bg-slate-100 text-slate-800 rounded-xl"
              title="Compare colleges"
            >
              <Layers className="w-5 h-5 text-blue-600" />
              {compareCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {compareCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search colleges, cities, states..."
              className="w-full bg-slate-50 text-xs text-slate-900 pl-9 pr-8 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1 text-sm font-semibold">
          <button
            onClick={() => {
              onNavigateToMap();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2 text-slate-800"
          >
            <Compass className="w-4 h-4 text-blue-600" />
            <span>Explore Map</span>
          </button>
          <button
            onClick={() => {
              onNavigateToColleges();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2 text-slate-800"
          >
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span>Discover Colleges</span>
          </button>
          <button
            onClick={() => {
              onOpenCompare();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center justify-between text-slate-800"
          >
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Compare Colleges</span>
            </div>
            {compareCount > 0 && (
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                {compareCount}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              onNavigateToAbout();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-2 text-slate-600"
          >
            <Info className="w-4 h-4" />
            <span>About India Campus Map</span>
          </button>
        </div>
      )}
    </header>
  );
};

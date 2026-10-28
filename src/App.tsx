import React, { useState, useMemo, useRef } from 'react';
import { CAMPUSES_DATA, filterCampuses } from './data/campuses';
import { Campus, FilterState, ViewMode } from './types/campus';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CampusMap } from './components/CampusMap';
import { CampusCard } from './components/CampusCard';
import { CampusFilters } from './components/CampusFilters';
import { CampusDetailModal } from './components/CampusDetailModal';
import { CampusCompareModal } from './components/CampusCompareModal';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import {
  MapPin,
  Layers,
  Filter,
  LayoutGrid,
  List,
  Compass,
  Map as MapIcon,
  X,
  RotateCcw,
  SlidersHorizontal,
  ChevronRight,
  School
} from 'lucide-react';

const INITIAL_FILTERS: FilterState = {
  searchQuery: '',
  selectedState: '',
  selectedCity: '',
  selectedTypes: [],
  selectedOwnership: [],
  hostelOnly: false,
  selectedFacilities: [],
  selectedCourseKeyword: ''
};

export default function App() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [selectedCampus, setSelectedCampus] = useState<Campus | null>(null);
  const [detailCampus, setDetailCampus] = useState<Campus | null>(null);
  const [comparedCampusIds, setComparedCampusIds] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [cardLayout, setCardLayout] = useState<'grid' | 'list'>('grid');

  const mapSectionRef = useRef<HTMLDivElement>(null);
  const collegesSectionRef = useRef<HTMLDivElement>(null);

  // Filtered campuses based on state
  const filteredCampuses = useMemo(() => {
    return filterCampuses(CAMPUSES_DATA, filters);
  }, [filters]);

  // Compared campuses objects
  const comparedCampuses = useMemo(() => {
    return CAMPUSES_DATA.filter((c) => comparedCampusIds.includes(c.id));
  }, [comparedCampusIds]);

  const handleToggleCompare = (campus: Campus) => {
    if (comparedCampusIds.includes(campus.id)) {
      setComparedCampusIds((prev) => prev.filter((id) => id !== campus.id));
    } else {
      if (comparedCampusIds.length >= 4) {
        alert('You can compare a maximum of 4 colleges at a time.');
        return;
      }
      setComparedCampusIds((prev) => [...prev, campus.id]);
    }
  };

  const handleRemoveCompare = (campusId: string) => {
    setComparedCampusIds((prev) => prev.filter((id) => id !== campusId));
  };

  const handleClearFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  const scrollToMap = () => {
    mapSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToColleges = () => {
    collegesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLocateOnMap = (campus: Campus) => {
    setSelectedCampus(campus);
    scrollToMap();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => setFilters((prev) => ({ ...prev, searchQuery: q }))}
        onNavigateToMap={scrollToMap}
        onNavigateToColleges={scrollToColleges}
        onNavigateToAbout={scrollToAbout}
        compareCount={comparedCampusIds.length}
        onOpenCompare={() => setIsCompareModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => setFilters((prev) => ({ ...prev, searchQuery: q }))}
        onExploreMap={scrollToMap}
        onDiscoverColleges={scrollToColleges}
        onSelectState={(st) => {
          setFilters((prev) => ({ ...prev, selectedState: st }));
          scrollToMap();
        }}
        totalCampuses={CAMPUSES_DATA.length}
      />

      {/* Main Interactive Map & Campus Explorer Section */}
      <main ref={mapSectionRef} className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Explorer Header Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Compass className="w-6 h-6 text-blue-600" />
              <span>Campus Map & Institutional Explorer</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Showing <span className="font-bold text-slate-900">{filteredCampuses.length}</span> institutions matching your criteria across India
            </p>
          </div>

          {/* View Toggles & Mobile Filter Trigger */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-1.5 bg-white border border-slate-200 text-slate-800 text-xs font-semibold px-3 py-2 rounded-xl shadow-2xs hover:bg-slate-50"
            >
              <SlidersHorizontal className="w-4 h-4 text-blue-600" />
              <span>Filters</span>
            </button>

            {/* View Mode Switcher: Split / Map Only / List Only */}
            <div className="bg-slate-200/80 p-1 rounded-xl flex items-center gap-1 text-xs font-semibold text-slate-700">
              <button
                onClick={() => setViewMode('split')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'split' ? 'bg-white text-blue-900 shadow-xs' : 'hover:text-slate-900'
                }`}
                title="Split Map & List View"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Split View</span>
              </button>

              <button
                onClick={() => setViewMode('map')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'map' ? 'bg-white text-blue-900 shadow-xs' : 'hover:text-slate-900'
                }`}
                title="Interactive Map Only"
              >
                <MapIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Map Only</span>
              </button>

              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'list' ? 'bg-white text-blue-900 shadow-xs' : 'hover:text-slate-900'
                }`}
                title="Cards Directory View"
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Directory</span>
              </button>
            </div>
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Filter Sidebar (Hidden on mobile, drawer on mobile) */}
          <div className="hidden lg:block lg:col-span-3">
            <CampusFilters
              filters={filters}
              onFilterChange={setFilters}
              onClearFilters={handleClearFilters}
              totalResults={filteredCampuses.length}
            />
          </div>

          {/* Mobile Filter Modal */}
          {isMobileFiltersOpen && (
            <CampusFilters
              filters={filters}
              onFilterChange={setFilters}
              onClearFilters={handleClearFilters}
              totalResults={filteredCampuses.length}
              isMobileOpen={true}
              onCloseMobile={() => setIsMobileFiltersOpen(false)}
            />
          )}

          {/* Right Main Column: Map and/or College Cards */}
          <div
            className={`space-y-6 ${
              viewMode === 'split'
                ? 'lg:col-span-9'
                : viewMode === 'map'
                ? 'lg:col-span-9 h-[78vh]'
                : 'lg:col-span-9'
            }`}
          >
            {/* Interactive Map Component */}
            {(viewMode === 'split' || viewMode === 'map') && (
              <div
                className={`w-full transition-all duration-300 ${
                  viewMode === 'map' ? 'h-full min-h-[600px]' : 'h-[440px] sm:h-[500px]'
                }`}
              >
                <CampusMap
                  campuses={filteredCampuses}
                  selectedCampus={selectedCampus}
                  onSelectCampus={setSelectedCampus}
                  onOpenDetails={(c) => setDetailCampus(c)}
                  comparedCampusIds={comparedCampusIds}
                  onToggleCompare={handleToggleCompare}
                />
              </div>
            )}

            {/* College Cards Directory */}
            {(viewMode === 'split' || viewMode === 'list') && (
              <section ref={collegesSectionRef} className="space-y-4 pt-2">
                {/* Section Sub-Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <School className="w-4 h-4 text-blue-600" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Institutions Catalog ({filteredCampuses.length})
                    </h3>
                  </div>

                  {/* Grid vs List toggle */}
                  <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                    <button
                      onClick={() => setCardLayout('grid')}
                      className={`p-1 rounded-md text-xs transition cursor-pointer ${
                        cardLayout === 'grid'
                          ? 'bg-white text-blue-600 shadow-2xs font-semibold'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                      title="Grid Cards"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCardLayout('list')}
                      className={`p-1 rounded-md text-xs transition cursor-pointer ${
                        cardLayout === 'list'
                          ? 'bg-white text-blue-600 shadow-2xs font-semibold'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                      title="List View"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Empty State */}
                {filteredCampuses.length === 0 ? (
                  <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-xs">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                      <School className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      No campuses match your current filters
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-5 leading-relaxed">
                      Try clearing some filters, resetting the state selector, or expanding your search query to see available institutions.
                    </p>
                    <button
                      onClick={handleClearFilters}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition cursor-pointer shadow-xs"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset All Filters</span>
                    </button>
                  </div>
                ) : (
                  /* Cards List / Grid */
                  <div
                    className={
                      cardLayout === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 gap-4'
                        : 'flex flex-col gap-4'
                    }
                  >
                    {filteredCampuses.map((campus) => (
                      <CampusCard
                        key={campus.id}
                        campus={campus}
                        isSelected={selectedCampus?.id === campus.id}
                        isCompared={comparedCampusIds.includes(campus.id)}
                        onSelect={setSelectedCampus}
                        onOpenDetails={(c) => setDetailCampus(c)}
                        onLocateOnMap={handleLocateOnMap}
                        onToggleCompare={handleToggleCompare}
                        layout={cardLayout}
                      />
                    ))}
                  </div>
                )}
              </section>
            )}
          </div>
        </div>
      </main>

      {/* Floating Bottom Comparison Drawer (when items are selected) */}
      {comparedCampusIds.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-2xl bg-slate-900/95 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <div className="text-xs truncate">
              <span className="font-bold block text-white truncate">
                Comparing {comparedCampuses.length} of 4 Campuses
              </span>
              <span className="text-[11px] text-slate-300 truncate block">
                {comparedCampuses.map((c) => c.name.split(' ')[0]).join(', ')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setComparedCampusIds([])}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded-lg transition"
            >
              Clear
            </button>
            <button
              onClick={() => setIsCompareModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition flex items-center gap-1 cursor-pointer"
            >
              <span>Compare Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Detailed Campus View Modal */}
      <CampusDetailModal
        campus={detailCampus}
        onClose={() => setDetailCampus(null)}
        onLocateOnMap={handleLocateOnMap}
        onSelectOtherCampus={(c) => {
          setDetailCampus(c);
          setSelectedCampus(c);
        }}
        isCompared={detailCampus ? comparedCampusIds.includes(detailCampus.id) : false}
        onToggleCompare={handleToggleCompare}
      />

      {/* College Comparison Matrix Modal */}
      {isCompareModalOpen && (
        <CampusCompareModal
          campuses={comparedCampuses}
          allCampuses={CAMPUSES_DATA}
          onClose={() => setIsCompareModalOpen(false)}
          onRemove={handleRemoveCompare}
          onAddCampus={handleToggleCompare}
          onOpenDetails={(c) => {
            setIsCompareModalOpen(false);
            setDetailCampus(c);
          }}
        />
      )}

      {/* About & Verification Mission Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

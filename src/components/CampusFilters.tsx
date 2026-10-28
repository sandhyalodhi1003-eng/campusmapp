import React from 'react';
import { FilterState, InstitutionType, OwnershipType } from '../types/campus';
import {
  Search,
  Filter,
  X,
  RotateCcw,
  Check,
  Building,
  GraduationCap,
  Sparkles,
  MapPin,
  Home,
  CheckCircle2
} from 'lucide-react';
import {
  UNIQUE_STATES,
  INSTITUTION_TYPES,
  COMMON_FACILITIES,
  POPULAR_STREAMS
} from '../data/campuses';

interface CampusFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  totalResults: number;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const CampusFilters: React.FC<CampusFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  totalResults,
  isMobileOpen = false,
  onCloseMobile
}) => {
  const activeFilterCount =
    (filters.selectedState ? 1 : 0) +
    (filters.selectedCity ? 1 : 0) +
    filters.selectedTypes.length +
    filters.selectedOwnership.length +
    (filters.hostelOnly ? 1 : 0) +
    filters.selectedFacilities.length +
    (filters.selectedCourseKeyword ? 1 : 0);

  const handleTypeToggle = (type: InstitutionType) => {
    const exists = filters.selectedTypes.includes(type);
    const updated = exists
      ? filters.selectedTypes.filter((t) => t !== type)
      : [...filters.selectedTypes, type];
    onFilterChange({ ...filters, selectedTypes: updated });
  };

  const handleOwnershipToggle = (ownership: OwnershipType) => {
    const exists = filters.selectedOwnership.includes(ownership);
    const updated = exists
      ? filters.selectedOwnership.filter((o) => o !== ownership)
      : [...filters.selectedOwnership, ownership];
    onFilterChange({ ...filters, selectedOwnership: updated });
  };

  const handleFacilityToggle = (facility: string) => {
    const exists = filters.selectedFacilities.includes(facility);
    const updated = exists
      ? filters.selectedFacilities.filter((f) => f !== facility)
      : [...filters.selectedFacilities, facility];
    onFilterChange({ ...filters, selectedFacilities: updated });
  };

  return (
    <aside
      className={`bg-white rounded-2xl border border-slate-200/80 shadow-xs flex flex-col ${
        isMobileOpen
          ? 'fixed inset-0 z-50 rounded-none p-5 overflow-y-auto'
          : 'p-4 overflow-y-auto max-h-[calc(100vh-140px)] sticky top-20'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-50 text-blue-700 rounded-lg">
            <Filter className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 text-sm">Filters & Discovery</h2>
            <p className="text-[11px] text-slate-500">
              Showing <span className="font-semibold text-blue-700">{totalResults}</span> institutions
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {activeFilterCount > 0 && (
            <button
              onClick={onClearFilters}
              className="text-xs text-rose-600 hover:text-rose-700 font-medium flex items-center gap-1 px-2 py-1 rounded-md hover:bg-rose-50 transition cursor-pointer"
              title="Reset all filters"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset ({activeFilterCount})</span>
            </button>
          )}

          {isMobileOpen && onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="p-1 text-slate-500 hover:text-slate-800 rounded-md hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="space-y-5 text-xs text-slate-700">
        {/* State Filter */}
        <div>
          <label className="block font-semibold text-slate-900 mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            State / UT
          </label>
          <select
            value={filters.selectedState}
            onChange={(e) => onFilterChange({ ...filters, selectedState: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition cursor-pointer"
          >
            <option value="">All States & Union Territories</option>
            {UNIQUE_STATES.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        {/* Academic Stream / Discipline Filter */}
        <div>
          <label className="block font-semibold text-slate-900 mb-1.5 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            Stream or Discipline
          </label>
          <div className="flex flex-wrap gap-1.5">
            {POPULAR_STREAMS.map((stream) => {
              const active = filters.selectedCourseKeyword.toLowerCase() === stream.toLowerCase();
              return (
                <button
                  key={stream}
                  onClick={() =>
                    onFilterChange({
                      ...filters,
                      selectedCourseKeyword: active ? '' : stream
                    })
                  }
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                    active
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {stream}
                </button>
              );
            })}
          </div>
        </div>

        {/* Institution Type */}
        <div>
          <label className="block font-semibold text-slate-900 mb-2 flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-blue-600" />
            Institution Category
          </label>
          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
            {INSTITUTION_TYPES.map((type) => {
              const checked = filters.selectedTypes.includes(type);
              return (
                <label
                  key={type}
                  onClick={() => handleTypeToggle(type)}
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer text-slate-800 select-none transition"
                >
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition ${
                      checked
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {checked && <Check className="w-3 h-3" />}
                  </div>
                  <span className="text-xs">{type}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Ownership: Public vs Private */}
        <div>
          <label className="block font-semibold text-slate-900 mb-2">Institution Ownership</label>
          <div className="grid grid-cols-2 gap-2">
            {(['Public / Government', 'Private'] as OwnershipType[]).map((own) => {
              const checked = filters.selectedOwnership.includes(own);
              return (
                <button
                  key={own}
                  onClick={() => handleOwnershipToggle(own)}
                  className={`p-2 rounded-xl border text-center transition cursor-pointer font-medium text-xs ${
                    checked
                      ? 'border-blue-600 bg-blue-50/70 text-blue-900'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {own}
                </button>
              );
            })}
          </div>
        </div>

        {/* Hostel Toggle */}
        <div className="pt-2 border-t border-slate-100">
          <label className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 cursor-pointer select-none">
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4 text-emerald-600" />
              <div>
                <span className="font-semibold text-slate-900 block">Hostels Required</span>
                <span className="text-[10px] text-slate-500">Only show campuses with on-site hostels</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={filters.hostelOnly}
              onChange={(e) => onFilterChange({ ...filters, hostelOnly: e.target.checked })}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 accent-blue-600 cursor-pointer"
            />
          </label>
        </div>

        {/* Key Campus Facilities */}
        <div className="pt-2 border-t border-slate-100">
          <label className="block font-semibold text-slate-900 mb-2">Campus Facilities</label>
          <div className="space-y-1.5">
            {COMMON_FACILITIES.map((facility) => {
              const checked = filters.selectedFacilities.includes(facility);
              return (
                <label
                  key={facility}
                  onClick={() => handleFacilityToggle(facility)}
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer text-slate-800 select-none transition"
                >
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition ${
                      checked
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {checked && <Check className="w-3 h-3" />}
                  </div>
                  <span className="text-xs">{facility}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Apply Button */}
      {isMobileOpen && (
        <div className="mt-6 pt-4 border-t border-slate-200">
          <button
            onClick={onCloseMobile}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow-md transition text-xs"
          >
            Show {totalResults} Results
          </button>
        </div>
      )}
    </aside>
  );
};

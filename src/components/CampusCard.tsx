import React from 'react';
import { Campus } from '../types/campus';
import {
  MapPin,
  Building2,
  BookOpen,
  Home,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Eye,
  Crosshair,
  Award,
  Calendar
} from 'lucide-react';

interface CampusCardProps {
  campus: Campus;
  isSelected: boolean;
  isCompared: boolean;
  onSelect: (campus: Campus) => void;
  onOpenDetails: (campus: Campus) => void;
  onLocateOnMap: (campus: Campus) => void;
  onToggleCompare: (campus: Campus) => void;
  layout?: 'grid' | 'list';
}

export const CampusCard: React.FC<CampusCardProps> = ({
  campus,
  isSelected,
  isCompared,
  onSelect,
  onOpenDetails,
  onLocateOnMap,
  onToggleCompare,
  layout = 'grid'
}) => {
  return (
    <div
      onClick={() => onSelect(campus)}
      className={`group relative bg-white rounded-2xl border transition-all duration-200 overflow-hidden cursor-pointer flex flex-col ${
        isSelected
          ? 'border-blue-600 ring-2 ring-blue-600/20 shadow-lg'
          : 'border-slate-200/80 hover:border-blue-300 hover:shadow-md'
      } ${layout === 'list' ? 'md:flex-row' : ''}`}
    >
      {/* Thumbnail Banner */}
      <div
        className={`relative overflow-hidden bg-slate-100 ${
          layout === 'list' ? 'md:w-64 md:h-auto h-48 flex-shrink-0' : 'h-44 w-full'
        }`}
      >
        <img
          src={campus.imageUrl}
          alt={campus.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

        {/* Status badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 items-center">
          <span className="text-[11px] font-semibold tracking-wide bg-blue-900/90 text-white backdrop-blur-md px-2.5 py-1 rounded-md shadow-xs">
            {campus.institutionType}
          </span>
          {campus.ownership === 'Public / Government' && (
            <span className="text-[10px] font-medium bg-emerald-950/80 text-emerald-200 backdrop-blur-md px-2 py-0.5 rounded">
              Govt / Public
            </span>
          )}
        </div>

        {/* Compare Checkbox pill on top right */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            onToggleCompare(campus);
          }}
          className={`absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg text-xs font-semibold backdrop-blur-md transition flex items-center gap-1.5 shadow-xs cursor-pointer ${
            isCompared
              ? 'bg-blue-600 text-white'
              : 'bg-white/90 text-slate-700 hover:bg-white'
          }`}
          title={isCompared ? 'Remove from compare' : 'Add to compare'}
        >
          <input
            type="checkbox"
            checked={isCompared}
            onChange={() => {}}
            className="w-3.5 h-3.5 rounded text-blue-600 pointer-events-none accent-blue-600"
          />
          <span className="text-[11px]">{isCompared ? 'Comparing' : 'Compare'}</span>
        </div>

        {/* Established year & Campus Acres */}
        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white text-xs">
          {campus.establishedYear && (
            <span className="flex items-center gap-1 text-[11px] font-medium opacity-90">
              <Calendar className="w-3 h-3 text-blue-300" />
              Est. {campus.establishedYear}
            </span>
          )}
          {campus.campusAreaAcres && (
            <span className="text-[11px] font-medium opacity-90">
              {campus.campusAreaAcres} Acres
            </span>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1 font-medium">
            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>
              {campus.city}, {campus.state}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 truncate">{campus.campusName}</span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-slate-900 text-base leading-tight group-hover:text-blue-600 transition mb-2">
            {campus.name}
          </h3>

          {/* Short Description */}
          {campus.shortDescription && (
            <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
              {campus.shortDescription}
            </p>
          )}

          {/* Key Courses Highlights */}
          <div className="mb-3">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <BookOpen className="w-3 h-3 text-slate-400" />
              Key Programs & Courses
            </div>
            <div className="flex flex-wrap gap-1.5">
              {campus.courses.slice(0, 3).map((course, idx) => (
                <span
                  key={idx}
                  className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                >
                  {course}
                </span>
              ))}
              {campus.courses.length > 3 && (
                <span className="text-[11px] text-blue-600 font-semibold px-1 py-0.5 self-center">
                  +{campus.courses.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Facilities preview & Hostel */}
          <div className="flex items-center gap-3 py-2 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-1">
              <Home className={`w-3.5 h-3.5 ${campus.hostelAvailable ? 'text-emerald-600' : 'text-slate-400'}`} />
              <span className={campus.hostelAvailable ? 'text-slate-800 font-medium' : 'text-slate-400'}>
                {campus.hostelAvailable ? 'Hostel Available' : 'No On-Campus Hostel'}
              </span>
            </div>
            <div className="text-slate-300">•</div>
            <div className="flex items-center gap-1 text-[11px] text-slate-500 truncate">
              <span>{campus.facilities.length} verified facilities</span>
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLocateOnMap(campus);
            }}
            className="flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 px-2.5 py-1.5 rounded-lg transition cursor-pointer"
            title="Focus on interactive map"
          >
            <Crosshair className="w-3.5 h-3.5 text-blue-600" />
            <span>Show on Map</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(campus);
            }}
            className="flex items-center gap-1 text-xs font-semibold bg-blue-900 hover:bg-blue-800 text-white px-3 py-1.5 rounded-lg transition shadow-xs cursor-pointer"
          >
            <span>View Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

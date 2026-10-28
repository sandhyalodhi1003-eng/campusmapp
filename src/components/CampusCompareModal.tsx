import React from 'react';
import { Campus } from '../types/campus';
import {
  X,
  Layers,
  MapPin,
  Building,
  Calendar,
  Home,
  CheckCircle,
  ExternalLink,
  Plus,
  Trash2,
  Share2
} from 'lucide-react';

interface CampusCompareModalProps {
  campuses: Campus[];
  allCampuses: Campus[];
  onClose: () => void;
  onRemove: (campusId: string) => void;
  onAddCampus: (campus: Campus) => void;
  onOpenDetails: (campus: Campus) => void;
}

export const CampusCompareModal: React.FC<CampusCompareModalProps> = ({
  campuses,
  allCampuses,
  onClose,
  onRemove,
  onAddCampus,
  onOpenDetails
}) => {
  const availableToAdd = allCampuses.filter(
    (c) => !campuses.some((comp) => comp.id === c.id)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="relative bg-white w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-600 text-white rounded-xl shadow-xs">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Side-by-Side Campus Comparison
              </h2>
              <p className="text-xs text-slate-500">
                Comparing {campuses.length} of max 4 institutions • Verified institutional metrics
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-slate-200 rounded-full text-slate-600 hover:text-slate-900 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body / Comparison Table */}
        <div className="flex-1 overflow-x-auto overflow-y-auto p-4 sm:p-6">
          {campuses.length === 0 ? (
            <div className="text-center py-16">
              <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">No Campuses Selected for Comparison</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-5">
                Click "+ Compare" on any campus card or marker to evaluate colleges side by side.
              </p>
            </div>
          ) : (
            <div className="min-w-[680px]">
              {/* Institution Column Headers */}
              <div
                className="grid gap-4 pb-4 border-b border-slate-200"
                style={{
                  gridTemplateColumns: `200px repeat(${campuses.length}, minmax(220px, 1fr)) ${
                    campuses.length < 4 ? '180px' : ''
                  }`
                }}
              >
                {/* Metric Title Corner */}
                <div className="font-bold text-xs uppercase tracking-wider text-slate-400 self-end">
                  Institution
                </div>

                {/* Compared Campuses Cards */}
                {campuses.map((campus) => (
                  <div
                    key={campus.id}
                    className="relative bg-slate-50 rounded-2xl p-3 border border-slate-200 flex flex-col justify-between"
                  >
                    <button
                      onClick={() => onRemove(campus.id)}
                      className="absolute top-2 right-2 p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                      title="Remove from comparison"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div>
                      <img
                        src={campus.imageUrl}
                        alt={campus.name}
                        className="w-full h-24 object-cover rounded-xl mb-2"
                      />
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 inline-block mb-1">
                        {campus.institutionType}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug line-clamp-2">
                        {campus.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {campus.city}, {campus.state}
                      </p>
                    </div>

                    <button
                      onClick={() => onOpenDetails(campus)}
                      className="mt-3 text-xs font-semibold bg-white border border-slate-300 hover:border-blue-500 text-blue-700 py-1.5 rounded-xl transition text-center"
                    >
                      View Full Details
                    </button>
                  </div>
                ))}

                {/* Add Another Slot */}
                {campuses.length < 4 && (
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                    <Plus className="w-6 h-6 text-slate-400 mb-1" />
                    <span className="text-xs font-semibold text-slate-700">Add Another Campus</span>
                    <select
                      onChange={(e) => {
                        const target = availableToAdd.find((c) => c.id === e.target.value);
                        if (target) onAddCampus(target);
                        e.target.value = '';
                      }}
                      className="mt-2 text-xs bg-slate-50 border border-slate-200 rounded-xl px-2 py-1 max-w-full text-slate-700 cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select from catalog...
                      </option>
                      {availableToAdd.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.city})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Rows Comparison */}
              <div className="divide-y divide-slate-100 text-xs">
                {/* Established Year */}
                <div
                  className="grid gap-4 py-3 items-center"
                  style={{
                    gridTemplateColumns: `200px repeat(${campuses.length}, minmax(220px, 1fr))`
                  }}
                >
                  <div className="font-semibold text-slate-700">Established Year</div>
                  {campuses.map((c) => (
                    <div key={c.id} className="text-slate-900 font-medium">
                      {c.establishedYear ? `Year ${c.establishedYear}` : 'Not available'}
                    </div>
                  ))}
                </div>

                {/* Ownership */}
                <div
                  className="grid gap-4 py-3 items-center"
                  style={{
                    gridTemplateColumns: `200px repeat(${campuses.length}, minmax(220px, 1fr))`
                  }}
                >
                  <div className="font-semibold text-slate-700">Ownership</div>
                  {campuses.map((c) => (
                    <div key={c.id} className="text-slate-900">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-md text-[11px] font-medium ${
                          c.ownership === 'Public / Government'
                            ? 'bg-emerald-50 text-emerald-800'
                            : 'bg-slate-100 text-slate-800'
                        }`}
                      >
                        {c.ownership}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Campus Area */}
                <div
                  className="grid gap-4 py-3 items-center"
                  style={{
                    gridTemplateColumns: `200px repeat(${campuses.length}, minmax(220px, 1fr))`
                  }}
                >
                  <div className="font-semibold text-slate-700">Campus Area</div>
                  {campuses.map((c) => (
                    <div key={c.id} className="text-slate-900 font-medium">
                      {c.campusAreaAcres ? `${c.campusAreaAcres} Acres` : 'Not verified'}
                    </div>
                  ))}
                </div>

                {/* Hostel Availability */}
                <div
                  className="grid gap-4 py-3 items-center"
                  style={{
                    gridTemplateColumns: `200px repeat(${campuses.length}, minmax(220px, 1fr))`
                  }}
                >
                  <div className="font-semibold text-slate-700">On-Campus Hostels</div>
                  {campuses.map((c) => (
                    <div key={c.id} className="text-slate-900 flex items-center gap-1.5 font-medium">
                      {c.hostelAvailable ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-900">Available</span>
                        </>
                      ) : (
                        <span className="text-slate-400">Not verified</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Key Courses */}
                <div
                  className="grid gap-4 py-3 items-start"
                  style={{
                    gridTemplateColumns: `200px repeat(${campuses.length}, minmax(220px, 1fr))`
                  }}
                >
                  <div className="font-semibold text-slate-700">Featured Programs</div>
                  {campuses.map((c) => (
                    <div key={c.id} className="space-y-1">
                      {c.courses.slice(0, 4).map((course, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-50 text-slate-800 px-2 py-1 rounded-md text-[11px] font-medium border border-slate-100"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Verified Facilities */}
                <div
                  className="grid gap-4 py-3 items-start"
                  style={{
                    gridTemplateColumns: `200px repeat(${campuses.length}, minmax(220px, 1fr))`
                  }}
                >
                  <div className="font-semibold text-slate-700">Key Facilities</div>
                  {campuses.map((c) => (
                    <div key={c.id} className="flex flex-wrap gap-1">
                      {c.facilities.slice(0, 5).map((fac, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px]"
                        >
                          {fac}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Official Admission Portal */}
                <div
                  className="grid gap-4 py-3 items-center"
                  style={{
                    gridTemplateColumns: `200px repeat(${campuses.length}, minmax(220px, 1fr))`
                  }}
                >
                  <div className="font-semibold text-slate-700">Admission Portal</div>
                  {campuses.map((c) => (
                    <div key={c.id}>
                      <a
                        href={c.admissionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:underline font-semibold"
                      >
                        <span>Official Admissions</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>

                {/* Official Website */}
                <div
                  className="grid gap-4 py-3 items-center"
                  style={{
                    gridTemplateColumns: `200px repeat(${campuses.length}, minmax(220px, 1fr))`
                  }}
                >
                  <div className="font-semibold text-slate-700">Official Website</div>
                  {campuses.map((c) => (
                    <div key={c.id}>
                      <a
                        href={c.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-600 truncate max-w-[200px]"
                      >
                        <span className="truncate">{c.website}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

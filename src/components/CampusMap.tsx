import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { Campus } from '../types/campus';
import {
  Layers,
  Compass,
  MapPin,
  ExternalLink,
  Plus,
  Check,
  Maximize2,
  Minimize2,
  Navigation,
  School
} from 'lucide-react';

interface CampusMapProps {
  campuses: Campus[];
  selectedCampus: Campus | null;
  onSelectCampus: (campus: Campus) => void;
  onOpenDetails: (campus: Campus) => void;
  comparedCampusIds: string[];
  onToggleCompare: (campus: Campus) => void;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

const INDIA_CENTER: [number, number] = [22.5937, 78.9629];
const INDIA_DEFAULT_ZOOM = 5;

// Color styling per institution category
function getTypeColors(type: Campus['institutionType']) {
  switch (type) {
    case 'Medical College':
      return { bg: '#059669', border: '#047857', badge: 'bg-emerald-100 text-emerald-800' };
    case 'Management Institute':
      return { bg: '#7c3aed', border: '#6d28d9', badge: 'bg-purple-100 text-purple-800' };
    case 'Law Institute':
      return { bg: '#d97706', border: '#b45309', badge: 'bg-amber-100 text-amber-800' };
    case 'Arts & Science College':
      return { bg: '#db2777', border: '#be185d', badge: 'bg-pink-100 text-pink-800' };
    case 'Institute of National Importance':
      return { bg: '#1d4ed8', border: '#1e40af', badge: 'bg-blue-100 text-blue-900' };
    default:
      return { bg: '#0f172a', border: '#0284c7', badge: 'bg-slate-100 text-slate-800' };
  }
}

export const CampusMap: React.FC<CampusMapProps> = ({
  campuses,
  selectedCampus,
  onSelectCampus,
  onOpenDetails,
  comparedCampusIds,
  onToggleCompare,
  isExpanded = false,
  onToggleExpand
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const markerMapRef = useRef<Map<string, L.Marker>>(new Map());

  const [activeTileLayer, setActiveTileLayer] = useState<'streets' | 'satellite' | 'terrain'>('streets');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [userLocError, setUserLocError] = useState<string | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: INDIA_CENTER,
        zoom: INDIA_DEFAULT_ZOOM,
        minZoom: 4,
        maxZoom: 18,
        zoomControl: false
      });

      // Add Zoom control at bottom-right
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Add scale bar
      L.control.scale({ imperial: false, position: 'bottomleft' }).addTo(map);

      mapInstanceRef.current = map;
      markersLayerRef.current = L.layerGroup().addTo(map);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Handle Tile Layer Switch
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Remove existing tile layers
    map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer);
      }
    });

    let tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    if (activeTileLayer === 'satellite') {
      tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      attribution = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
    } else if (activeTileLayer === 'terrain') {
      tileUrl = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
      attribution = 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap';
    }

    const tileLayer = L.tileLayer(tileUrl, {
      attribution,
      maxZoom: 19
    });

    tileLayer.addTo(map);
  }, [activeTileLayer]);

  // Update Campus Markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();
    markerMapRef.current.clear();

    campuses.forEach((campus) => {
      const isSelected = selectedCampus?.id === campus.id;
      const isCompared = comparedCampusIds.includes(campus.id);
      const colors = getTypeColors(campus.institutionType);

      // Create Custom SVG Marker Icon
      const iconHtml = `
        <div class="relative group cursor-pointer transition-transform duration-200 ${
          isSelected ? 'scale-125 z-50' : 'hover:scale-115'
        }">
          <div style="background-color: ${colors.bg}; border-color: ${
        isSelected ? '#facc15' : '#ffffff'
      };" 
               class="w-8 h-8 rounded-full border-2 shadow-lg flex items-center justify-center text-white text-xs font-bold transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <div class="w-2 h-2 bg-slate-900 rotate-45 -mt-1 mx-auto shadow-sm"></div>
          ${
            isSelected
              ? '<span class="absolute -top-1 -right-1 flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span></span>'
              : ''
          }
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'campus-marker-custom',
        html: iconHtml,
        iconSize: [32, 38],
        iconAnchor: [16, 36],
        popupAnchor: [0, -34]
      });

      const marker = L.marker([campus.latitude, campus.longitude], {
        icon: customIcon,
        title: campus.name
      });

      // Construct interactive popup HTML content
      const popupContent = document.createElement('div');
      popupContent.className = 'p-1 font-sans max-w-xs';
      popupContent.innerHTML = `
        <div class="overflow-hidden rounded-lg shadow-xs">
          <img src="${campus.imageUrl}" alt="${campus.name}" class="w-full h-24 object-cover rounded-t-md" />
          <div class="pt-2">
            <div class="flex items-center gap-1.5 mb-1">
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ${colors.badge}">
                ${campus.institutionType}
              </span>
              <span class="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                ${campus.ownership}
              </span>
            </div>
            <h4 class="font-bold text-slate-900 text-sm leading-snug line-clamp-2">
              ${campus.name}
            </h4>
            <p class="text-xs text-slate-500 flex items-center gap-1 mt-1">
              <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              </svg>
              ${campus.city}, ${campus.state}
            </p>
            <div class="mt-2 text-[11px] text-slate-600 line-clamp-2">
              ${campus.shortDescription || 'Premier academic institution offering world-class programs and facilities.'}
            </div>
            <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
              <button id="popup-view-btn-${campus.id}" class="text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1.5 rounded-md flex items-center gap-1 cursor-pointer transition">
                <span>View Details</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
              <button id="popup-compare-btn-${campus.id}" class="text-xs font-medium px-2 py-1.5 rounded-md border ${
                isCompared
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              } cursor-pointer transition">
                ${isCompared ? '✓ Compared' : '+ Compare'}
              </button>
            </div>
          </div>
        </div>
      `;

      // Attach event listeners after popup opens
      marker.bindPopup(popupContent, { maxWidth: 280, className: 'campus-leaflet-popup' });

      marker.on('popupopen', () => {
        const viewBtn = document.getElementById(`popup-view-btn-${campus.id}`);
        const compareBtn = document.getElementById(`popup-compare-btn-${campus.id}`);

        if (viewBtn) {
          viewBtn.onclick = (e) => {
            e.stopPropagation();
            onOpenDetails(campus);
          };
        }
        if (compareBtn) {
          compareBtn.onclick = (e) => {
            e.stopPropagation();
            onToggleCompare(campus);
          };
        }
      });

      marker.on('click', () => {
        onSelectCampus(campus);
      });

      marker.addTo(markersLayer);
      markerMapRef.current.set(campus.id, marker);
    });
  }, [campuses, selectedCampus, comparedCampusIds, onSelectCampus, onOpenDetails, onToggleCompare]);

  // Center on Selected Campus
  useEffect(() => {
    if (!selectedCampus || !mapInstanceRef.current) return;

    mapInstanceRef.current.flyTo([selectedCampus.latitude, selectedCampus.longitude], 12, {
      duration: 1.2,
      easeLinearity: 0.25
    });

    const marker = markerMapRef.current.get(selectedCampus.id);
    if (marker) {
      setTimeout(() => {
        marker.openPopup();
      }, 700);
    }
  }, [selectedCampus]);

  // Reset to All India view
  const handleResetView = () => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo(INDIA_CENTER, INDIA_DEFAULT_ZOOM, {
      duration: 1.0
    });
  };

  // Find My Location
  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      setUserLocError('Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);
    setUserLocError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        const { latitude, longitude } = pos.coords;
        setUserLocation({ lat: latitude, lng: longitude });

        if (mapInstanceRef.current) {
          // Add User Marker
          const userIcon = L.divIcon({
            className: 'user-pin-custom',
            html: `
              <div class="relative flex items-center justify-center">
                <span class="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-75"></span>
                <div class="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md"></div>
              </div>
            `,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
          });

          L.marker([latitude, longitude], { icon: userIcon })
            .addTo(mapInstanceRef.current)
            .bindPopup('<b>Your Current Location</b>')
            .openPopup();

          mapInstanceRef.current.flyTo([latitude, longitude], 9, { duration: 1.2 });
        }
      },
      (err) => {
        setIsLocating(false);
        setUserLocError('Unable to retrieve location. Please check browser permissions.');
        console.warn('Geolocation error:', err.message);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-slate-100 rounded-2xl border border-slate-200/80 shadow-xs">
      {/* Map Container */}
      <div ref={mapContainerRef} className="w-full h-full z-0 outline-none" tabIndex={0} />

      {/* Floating Header Controls */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10 gap-2">
        {/* Campus Count Tag */}
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-slate-200/80 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
          <span className="text-xs font-semibold text-slate-800">
            {campuses.length} Campuses on Map
          </span>
          <span className="text-[11px] text-slate-500 hidden sm:inline">
            (Pan & Zoom India)
          </span>
        </div>

        {/* Right Action Group */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-white/95 backdrop-blur-md p-1 rounded-xl shadow-md border border-slate-200/80">
          {/* Map Layer Switcher */}
          <div className="relative group">
            <button
              title="Change Map Style"
              className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-700 transition flex items-center gap-1 text-xs font-medium cursor-pointer"
            >
              <Layers className="w-4 h-4 text-slate-600" />
              <span className="hidden md:inline capitalize">{activeTileLayer}</span>
            </button>
            <div className="absolute right-0 top-full mt-1 hidden group-hover:flex flex-col bg-white border border-slate-200 shadow-xl rounded-xl p-1 w-32 z-20">
              <button
                onClick={() => setActiveTileLayer('streets')}
                className={`text-left px-2.5 py-1.5 text-xs rounded-lg cursor-pointer ${
                  activeTileLayer === 'streets'
                    ? 'bg-blue-50 font-semibold text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                🗺️ Street Map
              </button>
              <button
                onClick={() => setActiveTileLayer('satellite')}
                className={`text-left px-2.5 py-1.5 text-xs rounded-lg cursor-pointer ${
                  activeTileLayer === 'satellite'
                    ? 'bg-blue-50 font-semibold text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                🛰️ Satellite
              </button>
              <button
                onClick={() => setActiveTileLayer('terrain')}
                className={`text-left px-2.5 py-1.5 text-xs rounded-lg cursor-pointer ${
                  activeTileLayer === 'terrain'
                    ? 'bg-blue-50 font-semibold text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                ⛰️ Topography
              </button>
            </div>
          </div>

          <div className="h-4 w-px bg-slate-200"></div>

          {/* Reset India Center */}
          <button
            onClick={handleResetView}
            title="Reset to All India View"
            className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-700 transition flex items-center gap-1 text-xs font-medium cursor-pointer"
          >
            <Compass className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">All India</span>
          </button>

          {/* Geolocation Button */}
          <button
            onClick={handleLocateMe}
            disabled={isLocating}
            title="Find Campuses Near Me"
            className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-700 transition flex items-center gap-1 text-xs font-medium cursor-pointer"
          >
            <Navigation
              className={`w-4 h-4 ${
                isLocating ? 'animate-spin text-blue-600' : 'text-slate-600'
              }`}
            />
            <span className="hidden sm:inline">Near Me</span>
          </button>

          {/* Expand / Minimize Map Toggle */}
          {onToggleExpand && (
            <>
              <div className="h-4 w-px bg-slate-200"></div>
              <button
                onClick={onToggleExpand}
                title={isExpanded ? 'Restore View' : 'Maximize Map'}
                className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-700 transition cursor-pointer"
              >
                {isExpanded ? (
                  <Minimize2 className="w-4 h-4 text-slate-600" />
                ) : (
                  <Maximize2 className="w-4 h-4 text-slate-600" />
                )}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Geolocation Notice Toast */}
      {userLocError && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-20 bg-amber-50 border border-amber-200 text-amber-900 text-xs px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2">
          <span>{userLocError}</span>
          <button
            onClick={() => setUserLocError(null)}
            className="text-amber-700 hover:text-amber-900 font-bold"
          >
            ×
          </button>
        </div>
      )}

      {/* Map Legend (Bottom-Left) */}
      <div className="absolute bottom-4 left-3 z-10 hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-200/80 text-[11px] text-slate-700">
        <span className="font-semibold text-slate-900 flex items-center gap-1">
          <School className="w-3.5 h-3.5 text-blue-600" /> Legend:
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> National / Tech
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span> Medical
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span> Management
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span> Law
        </span>
      </div>
    </div>
  );
};

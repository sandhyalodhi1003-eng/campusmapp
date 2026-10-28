import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Campus } from '../types/campus';
import { CAMPUSES_DATA } from '../data/campuses';

// Database row representation in Supabase
export interface SupabaseCampusRow {
  id: string;
  name: string;
  campus_name: string;
  slug: string;
  institution_type: string;
  ownership: string;
  address: string;
  city: string;
  district: string;
  state: string;
  postal_code: string;
  latitude: number;
  longitude: number;
  courses: string[];
  facilities: string[];
  hostel_available: boolean;
  website: string;
  admission_url: string;
  contact_email?: string;
  contact_phone?: string;
  image_url?: string;
  source_urls?: string[];
  last_verified?: string;
  verification_status?: string;
  established_year?: number;
  campus_area_acres?: number;
  short_description?: string;
  popular_disciplines?: string[];
}

export function mapRowToCampus(row: SupabaseCampusRow): Campus {
  return {
    id: row.id,
    name: row.name,
    campusName: row.campus_name || row.name,
    slug: row.slug,
    institutionType: row.institution_type as Campus['institutionType'],
    ownership: row.ownership as Campus['ownership'],
    address: row.address,
    city: row.city,
    district: row.district,
    state: row.state,
    postalCode: row.postal_code,
    latitude: Number(row.latitude),
    longitude: Number(row.longitude),
    courses: row.courses || [],
    facilities: row.facilities || [],
    hostelAvailable: Boolean(row.hostel_available),
    website: row.website,
    admissionUrl: row.admission_url,
    contactEmail: row.contact_email || 'admissions@campus.edu.in',
    contactPhone: row.contact_phone || '+91-00-0000-0000',
    imageUrl: row.image_url || 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: row.source_urls || [row.website],
    lastVerified: row.last_verified || new Date().toISOString().split('T')[0],
    verificationStatus: (row.verification_status as Campus['verificationStatus']) || 'Verified Official',
    establishedYear: row.established_year,
    campusAreaAcres: row.campus_area_acres,
    shortDescription: row.short_description,
    popularDisciplines: row.popular_disciplines || []
  };
}

export function mapCampusToRow(c: Campus): SupabaseCampusRow {
  return {
    id: c.id,
    name: c.name,
    campus_name: c.campusName,
    slug: c.slug,
    institution_type: c.institutionType,
    ownership: c.ownership,
    address: c.address,
    city: c.city,
    district: c.district,
    state: c.state,
    postal_code: c.postalCode,
    latitude: c.latitude,
    longitude: c.longitude,
    courses: c.courses,
    facilities: c.facilities,
    hostel_available: c.hostelAvailable,
    website: c.website,
    admission_url: c.admissionUrl,
    contact_email: c.contactEmail,
    contact_phone: c.contactPhone,
    image_url: c.imageUrl,
    source_urls: c.sourceUrls,
    last_verified: c.lastVerified,
    verification_status: c.verificationStatus,
    established_year: c.establishedYear,
    campus_area_acres: c.campusAreaAcres,
    short_description: c.shortDescription,
    popular_disciplines: c.popularDisciplines
  };
}

/**
 * Fetch campuses from Supabase database with fallback to verified local dataset
 */
export async function getCampuses(): Promise<{
  campuses: Campus[];
  source: 'supabase' | 'local_fallback';
  error?: string;
}> {
  if (!isSupabaseConfigured()) {
    return {
      campuses: CAMPUSES_DATA,
      source: 'local_fallback'
    };
  }

  try {
    const { data, error } = await supabase
      .from('campuses')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.warn('Supabase query error (falling back to verified dataset):', error.message);
      return {
        campuses: CAMPUSES_DATA,
        source: 'local_fallback',
        error: error.message
      };
    }

    if (data && data.length > 0) {
      return {
        campuses: data.map(mapRowToCampus),
        source: 'supabase'
      };
    }

    // Table exists but is currently empty
    return {
      campuses: CAMPUSES_DATA,
      source: 'local_fallback',
      error: 'Supabase table "campuses" is currently empty. You can seed it using the database tool.'
    };
  } catch (err: any) {
    console.error('Failed to communicate with Supabase:', err);
    return {
      campuses: CAMPUSES_DATA,
      source: 'local_fallback',
      error: err.message
    };
  }
}

/**
 * Seeds the initial 30+ verified campuses into Supabase
 */
export async function seedCampusesToSupabase(): Promise<{
  success: boolean;
  count: number;
  message: string;
}> {
  try {
    const rows = CAMPUSES_DATA.map(mapCampusToRow);
    const { error } = await supabase.from('campuses').upsert(rows, { onConflict: 'id' });

    if (error) {
      return {
        success: false,
        count: 0,
        message: error.message
      };
    }

    return {
      success: true,
      count: rows.length,
      message: `Successfully seeded ${rows.length} verified campuses into Supabase!`
    };
  } catch (err: any) {
    return {
      success: false,
      count: 0,
      message: err.message || 'Unknown error occurred while seeding to Supabase.'
    };
  }
}

/**
 * Inserts a new campus record into Supabase
 */
export async function addCampusToSupabase(campus: Campus): Promise<{
  success: boolean;
  message: string;
}> {
  try {
    const row = mapCampusToRow(campus);
    const { error } = await supabase.from('campuses').insert([row]);

    if (error) {
      return { success: false, message: error.message };
    }

    return { success: true, message: 'Campus successfully added to Supabase database!' };
  } catch (err: any) {
    return { success: false, message: err.message || 'Failed to add campus.' };
  }
}

export type InstitutionType =
  | 'Institute of National Importance'
  | 'Central University'
  | 'State University'
  | 'Deemed University'
  | 'Private University'
  | 'Engineering College'
  | 'Medical College'
  | 'Management Institute'
  | 'Law Institute'
  | 'Arts & Science College';

export type OwnershipType = 'Public / Government' | 'Private' | 'Public-Private Partnership';

export type VerificationStatus = 'Verified Official' | 'Verified Directory' | 'Under Review';

export interface Campus {
  id: string;
  name: string;
  campusName: string;
  slug: string;
  institutionType: InstitutionType;
  ownership: OwnershipType;
  address: string;
  city: string;
  district: string;
  state: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  courses: string[];
  facilities: string[];
  hostelAvailable: boolean;
  website: string;
  admissionUrl: string;
  contactEmail: string;
  contactPhone: string;
  imageUrl: string;
  sourceUrls: string[];
  lastVerified: string;
  verificationStatus: VerificationStatus;
  establishedYear?: number;
  campusAreaAcres?: number;
  shortDescription?: string;
  popularDisciplines?: string[];
  nirfRankInfo?: string;
}

export interface FilterState {
  searchQuery: string;
  selectedState: string;
  selectedCity: string;
  selectedTypes: InstitutionType[];
  selectedOwnership: OwnershipType[];
  hostelOnly: boolean;
  selectedFacilities: string[];
  selectedCourseKeyword: string;
}

export type ViewMode = 'split' | 'map' | 'list';

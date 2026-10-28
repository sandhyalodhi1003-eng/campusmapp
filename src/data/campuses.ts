import { Campus, FilterState } from '../types/campus';

export const CAMPUSES_DATA: Campus[] = [
  {
    id: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay',
    campusName: 'Main Powai Campus',
    slug: 'iit-bombay',
    institutionType: 'Institute of National Importance',
    ownership: 'Public / Government',
    address: 'Main Gate Road, Powai',
    city: 'Mumbai',
    district: 'Mumbai Suburban',
    state: 'Maharashtra',
    postalCode: '400076',
    latitude: 19.1334,
    longitude: 72.9133,
    courses: [
      'B.Tech Computer Science & Engineering',
      'B.Tech Electrical Engineering',
      'B.Tech Mechanical Engineering',
      'B.Des Industrial Design',
      'M.Tech Artificial Intelligence',
      'Ph.D. Sciences & Engineering'
    ],
    facilities: [
      'Central Library',
      'Hostels (Boys & Girls)',
      'High-Performance Computing Cluster',
      'Olympic-sized Swimming Pool',
      'Society for Innovation and Entrepreneurship (SINE)',
      'IITB Hospital / Health Center',
      'High-speed Wi-Fi Campus'
    ],
    hostelAvailable: true,
    website: 'https://www.iitb.ac.in',
    admissionUrl: 'https://www.iitb.ac.in/en/admissions',
    contactEmail: 'pro@iitb.ac.in',
    contactPhone: '+91-22-2572-2525',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.iitb.ac.in', 'https://www.nirfindia.org'],
    lastVerified: '2026-03-15',
    verificationStatus: 'Verified Official',
    establishedYear: 1958,
    campusAreaAcres: 550,
    shortDescription: 'Premier national technical institution nestled between Powai and Vihar lakes, renowned globally for engineering and research excellence.',
    popularDisciplines: ['Engineering', 'Design', 'Pure Sciences', 'Management']
  },
  {
    id: 'iit-delhi',
    name: 'Indian Institute of Technology Delhi',
    campusName: 'Hauz Khas Campus',
    slug: 'iit-delhi',
    institutionType: 'Institute of National Importance',
    ownership: 'Public / Government',
    address: 'Hauz Khas, Outer Ring Road',
    city: 'New Delhi',
    district: 'South Delhi',
    state: 'Delhi',
    postalCode: '110016',
    latitude: 28.545,
    longitude: 77.1926,
    courses: [
      'B.Tech Computer Science',
      'B.Tech Mathematics & Computing',
      'B.Tech Electrical Engineering',
      'M.Sc. Physics & Chemistry',
      'MBA Department of Management Studies',
      'Ph.D. Interdisciplinary Research'
    ],
    facilities: [
      'Central Library & Digital Resource Center',
      'On-Campus Student Hostels',
      'Central Research Facility (CRF)',
      'Student Activity Centre (SAC)',
      'Foundation for Innovation and Technology Transfer (FITT)',
      'IIT Hospital'
    ],
    hostelAvailable: true,
    website: 'https://home.iitd.ac.in',
    admissionUrl: 'https://home.iitd.ac.in/admissions.php',
    contactEmail: 'webmaster@admin.iitd.ac.in',
    contactPhone: '+91-11-2659-7135',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://home.iitd.ac.in', 'https://www.nirfindia.org'],
    lastVerified: '2026-02-28',
    verificationStatus: 'Verified Official',
    establishedYear: 1961,
    campusAreaAcres: 320,
    shortDescription: 'Located in the historic southern precinct of the capital city, driving breakthrough research, deep-tech startups, and academic leadership.',
    popularDisciplines: ['Engineering', 'Technology', 'Management', 'Applied Sciences']
  },
  {
    id: 'iisc-bangalore',
    name: 'Indian Institute of Science Bangalore',
    campusName: 'Main Science Campus',
    slug: 'iisc-bangalore',
    institutionType: 'Institute of National Importance',
    ownership: 'Public / Government',
    address: 'CV Raman Road, Malleshwaram',
    city: 'Bengaluru',
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    postalCode: '560012',
    latitude: 13.0219,
    longitude: 77.5671,
    courses: [
      'Bachelor of Science (Research)',
      'B.Tech Mathematics and Computing',
      'M.Tech Quantum Technology',
      'M.Sc. Life Sciences',
      'Integrated Ph.D. Chemical Sciences'
    ],
    facilities: [
      'JRD Tata Memorial Library',
      'Advanced Supercomputing Facilities (Param Pravega)',
      'Hostels and Residential Quarters',
      'Center for Nano Science and Engineering (CeNSE)',
      'Gymkhana & Sports Grounds',
      'Health Centre'
    ],
    hostelAvailable: true,
    website: 'https://iisc.ac.in',
    admissionUrl: 'https://admissions.iisc.ac.in',
    contactEmail: 'registrar@iisc.ac.in',
    contactPhone: '+91-80-2293-2001',
    imageUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://iisc.ac.in', 'https://www.nirfindia.org'],
    lastVerified: '2026-03-01',
    verificationStatus: 'Verified Official',
    establishedYear: 1909,
    campusAreaAcres: 440,
    shortDescription: 'India’s premier institute for advanced scientific and technological research, established with vision from Jamsetji Tata and Swami Vivekananda.',
    popularDisciplines: ['Pure Sciences', 'Quantum Research', 'Engineering', 'BioSciences']
  },
  {
    id: 'iit-madras',
    name: 'Indian Institute of Technology Madras',
    campusName: 'Guindy National Park Campus',
    slug: 'iit-madras',
    institutionType: 'Institute of National Importance',
    ownership: 'Public / Government',
    address: 'Sardar Patel Road, Adyar',
    city: 'Chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    postalCode: '600036',
    latitude: 12.9915,
    longitude: 80.2337,
    courses: [
      'B.Tech Computer Science & Data Science',
      'B.Tech Aerospace Engineering',
      'B.Tech Naval Architecture & Ocean Engg',
      'BS in Data Science and Applications',
      'Dual Degree Biological Engineering'
    ],
    facilities: [
      'Central Library',
      'IITM Research Park (1st in India)',
      'Hostels for Over 8,000 Students',
      'National Centre for Combustion R&D',
      'Open-air Theatre (OAT)',
      'Deer Sanctuary and Natural Reserve'
    ],
    hostelAvailable: true,
    website: 'https://www.iitm.ac.in',
    admissionUrl: 'https://www.iitm.ac.in/academics/admissions',
    contactEmail: 'contact@iitm.ac.in',
    contactPhone: '+91-44-2257-8100',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.iitm.ac.in', 'https://www.nirfindia.org'],
    lastVerified: '2026-03-10',
    verificationStatus: 'Verified Official',
    establishedYear: 1959,
    campusAreaAcres: 630,
    shortDescription: 'Consistent top-ranked university in NIRF overall rankings, famed for its sprawling forest campus and groundbreaking industrial research park.',
    popularDisciplines: ['Aerospace', 'Ocean Engineering', 'Computing', 'Electronics']
  },
  {
    id: 'aiims-delhi',
    name: 'All India Institute of Medical Sciences New Delhi',
    campusName: 'Ansari Nagar Main Campus',
    slug: 'aiims-new-delhi',
    institutionType: 'Medical College',
    ownership: 'Public / Government',
    address: 'Sri Aurobindo Marg, Ansari Nagar',
    city: 'New Delhi',
    district: 'South Delhi',
    state: 'Delhi',
    postalCode: '110029',
    latitude: 28.5672,
    longitude: 77.21,
    courses: [
      'MBBS (Bachelor of Medicine & Bachelor of Surgery)',
      'MD / MS Specialist Postgraduation',
      'DM / M.Ch Super-specialty Programs',
      'B.Sc. (Hons) Nursing',
      'Ph.D. Medical Sciences'
    ],
    facilities: [
      '2,500+ Bed Referral Hospital & Trauma Center',
      'BB Dikshit Central Medical Library',
      'Resident Doctors & Undergraduate Hostels',
      'Stem Cell & Genomic Research Centre',
      'Robotic Surgery Suites',
      '24x7 Emergency Trauma Triage'
    ],
    hostelAvailable: true,
    website: 'https://www.aiims.edu',
    admissionUrl: 'https://www.aiimsexams.ac.in',
    contactEmail: 'director@aiims.edu',
    contactPhone: '+91-11-2658-8500',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.aiims.edu', 'https://www.nmc.org.in'],
    lastVerified: '2026-03-05',
    verificationStatus: 'Verified Official',
    establishedYear: 1956,
    campusAreaAcres: 115,
    shortDescription: 'Apex healthcare institution and medical school in India, setting the highest clinical benchmark for medical education and tertiary patient care.',
    popularDisciplines: ['Medicine', 'Surgery', 'Public Health', 'Biomedical Research']
  },
  {
    id: 'iim-ahmedabad',
    name: 'Indian Institute of Management Ahmedabad',
    campusName: 'Heritage & New Campus Vastrapur',
    slug: 'iim-ahmedabad',
    institutionType: 'Management Institute',
    ownership: 'Public / Government',
    address: 'Sargam Marg, Vastrapur',
    city: 'Ahmedabad',
    district: 'Ahmedabad',
    state: 'Gujarat',
    postalCode: '380015',
    latitude: 23.0338,
    longitude: 72.5312,
    courses: [
      'Post Graduate Programme in Management (MBA)',
      'PGP in Food and Agri-Business Management (FABM)',
      'Post Graduate Programme in Management for Executives (PGPX)',
      'Ph.D. Programme in Management'
    ],
    facilities: [
      'Vikram Sarabhai Library',
      'Louis Kahn Heritage Brick Architecture Dorms',
      'CIIE.CO Innovation Incubation Centre',
      'Sports Complex and Squash Courts',
      'Executive Dining and Case-Method Amphitheaters'
    ],
    hostelAvailable: true,
    website: 'https://www.iima.ac.in',
    admissionUrl: 'https://www.iima.ac.in/academics/mba/admissions',
    contactEmail: 'admission@iima.ac.in',
    contactPhone: '+91-79-7152-4978',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.iima.ac.in', 'https://www.nirfindia.org'],
    lastVerified: '2026-02-25',
    verificationStatus: 'Verified Official',
    establishedYear: 1961,
    campusAreaAcres: 102,
    shortDescription: 'Premier business school known globally for its iconic Louis Kahn red brick architecture, rigorous case pedagogy, and influential alumni network.',
    popularDisciplines: ['Business Management', 'Finance', 'Agri-Business', 'Public Policy']
  },
  {
    id: 'iit-kharagpur',
    name: 'Indian Institute of Technology Kharagpur',
    campusName: 'Hijli Detention Camp Main Campus',
    slug: 'iit-kharagpur',
    institutionType: 'Institute of National Importance',
    ownership: 'Public / Government',
    address: 'Kharagpur, Paschim Medinipur',
    city: 'Kharagpur',
    district: 'Paschim Medinipur',
    state: 'West Bengal',
    postalCode: '721302',
    latitude: 22.3149,
    longitude: 87.3105,
    courses: [
      'B.Tech Computer Science & Artificial Intelligence',
      'B.Arch Architecture & Regional Planning',
      'LL.B. Rajiv Gandhi School of Intellectual Property Law',
      'MBBS Dr. B.C. Roy Institute of Medical Science',
      'Dual Degree Agricultural and Food Engineering'
    ],
    facilities: [
      'Central Library (Largest technical library in Asia)',
      '21 Halls of Residence (Hostels)',
      'Nehru Museum of Science & Technology',
      'Technology Students Gymkhana',
      'B.C. Roy Hospital',
      'STEP (Science and Technology Entrepreneurs Park)'
    ],
    hostelAvailable: true,
    website: 'https://www.iitkgp.ac.in',
    admissionUrl: 'https://www.iitkgp.ac.in/admissions',
    contactEmail: 'registrar@hijli.iitkgp.ac.in',
    contactPhone: '+91-3222-255221',
    imageUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.iitkgp.ac.in', 'https://www.nirfindia.org'],
    lastVerified: '2026-03-12',
    verificationStatus: 'Verified Official',
    establishedYear: 1951,
    campusAreaAcres: 2100,
    shortDescription: 'The oldest IIT in India, spread over an immense 2,100-acre township offering disciplines ranging from law and medicine to space tech.',
    popularDisciplines: ['Engineering', 'Architecture', 'IP Law', 'Mining', 'Agricultural Engg']
  },
  {
    id: 'bits-pilani',
    name: 'Birla Institute of Technology and Science Pilani',
    campusName: 'Vidya Vihar Campus',
    slug: 'bits-pilani',
    institutionType: 'Deemed University',
    ownership: 'Private',
    address: 'Vidya Vihar',
    city: 'Pilani',
    district: 'Jhunjhunu',
    state: 'Rajasthan',
    postalCode: '333031',
    latitude: 28.3639,
    longitude: 75.587,
    courses: [
      'B.E. Computer Science',
      'B.E. Electrical & Electronics',
      'B.Pharm (Hons)',
      'M.Sc. Economics (Dual Degree)',
      'Ph.D. Multidisciplinary Studies'
    ],
    facilities: [
      'Akshay Pratishthan Clock Tower and Central Library',
      'Full Residential Bhavans (Hostels) for All Students',
      'Pilani Innovation & Entrepreneurship Development Society (PIEDS)',
      'Telepresence Classrooms & High-Speed Optical Network',
      'Student Union Building & Medipath Centre'
    ],
    hostelAvailable: true,
    website: 'https://www.bits-pilani.ac.in',
    admissionUrl: 'https://www.bitsadmission.com',
    contactEmail: 'admissions@pilani.bits-pilani.ac.in',
    contactPhone: '+91-1596-242205',
    imageUrl: 'https://images.unsplash.com/photo-1568792923760-d70635a89fa9?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.bits-pilani.ac.in'],
    lastVerified: '2026-03-02',
    verificationStatus: 'Verified Official',
    establishedYear: 1964,
    campusAreaAcres: 328,
    shortDescription: 'Eminent private deemed university celebrated for its zero-attendance policy, Practice School industrial internship system, and robust founder culture.',
    popularDisciplines: ['Computer Science', 'Economics', 'Pharmacy', 'Core Engineering']
  },
  {
    id: 'iim-bangalore',
    name: 'Indian Institute of Management Bangalore',
    campusName: 'Bannerghatta Road Campus',
    slug: 'iim-bangalore',
    institutionType: 'Management Institute',
    ownership: 'Public / Government',
    address: 'Bannerghatta Main Road, Bilekahalli',
    city: 'Bengaluru',
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    postalCode: '560076',
    latitude: 12.8948,
    longitude: 77.6006,
    courses: [
      'Post Graduate Programme in Management (PGP/MBA)',
      'Executive PGP (EPGP)',
      'Post Graduate Programme in Enterprise Management (PGPEM)',
      'Doctor of Philosophy (Ph.D.) in Management'
    ],
    facilities: [
      'Balkrishna Doshi Architectural Stone Campus & Courtyards',
      'Fully Air-Conditioned Central Library',
      'Executive Student Hostels & Residential Blocks',
      'NSRCEL (N.S. Raghavan Centre for Entrepreneurial Learning)',
      'Sports Complex with Indoor Courts'
    ],
    hostelAvailable: true,
    website: 'https://www.iimb.ac.in',
    admissionUrl: 'https://www.iimb.ac.in/programs/pgp/admissions',
    contactEmail: 'info@iimb.ac.in',
    contactPhone: '+91-80-2699-3000',
    imageUrl: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.iimb.ac.in', 'https://www.nirfindia.org'],
    lastVerified: '2026-03-08',
    verificationStatus: 'Verified Official',
    establishedYear: 1973,
    campusAreaAcres: 100,
    shortDescription: 'World-renowned management institute designed by Pritzker laureate B.V. Doshi, placed right in the heart of India’s Silicon Valley.',
    popularDisciplines: ['Management', 'Strategy', 'Analytics', 'Entrepreneurship']
  },
  {
    id: 'jnu-delhi',
    name: 'Jawaharlal Nehru University',
    campusName: 'New Mehrauli Road Campus',
    slug: 'jawaharlal-nehru-university',
    institutionType: 'Central University',
    ownership: 'Public / Government',
    address: 'New Mehrauli Road, Munirka',
    city: 'New Delhi',
    district: 'South West Delhi',
    state: 'Delhi',
    postalCode: '110067',
    latitude: 28.5398,
    longitude: 77.1664,
    courses: [
      'M.A. International Relations',
      'M.A. Economics',
      'M.Sc. Life Sciences',
      'B.A. (Hons) Foreign Languages',
      'Ph.D. Social Sciences & Humanities'
    ],
    facilities: [
      '9-Storey Dr. B.R. Ambedkar Central Library',
      '18+ Student Hostels named after Indian Rivers & Mountains',
      'Parthasarathy Rocks (PSR) Nature Area',
      'University Health Centre',
      'Convention Centre & Seminar Complexes'
    ],
    hostelAvailable: true,
    website: 'https://www.jnu.ac.in',
    admissionUrl: 'https://jnuee.jnu.ac.in',
    contactEmail: 'director_admissions@mail.jnu.ac.in',
    contactPhone: '+91-11-2674-2676',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.jnu.ac.in', 'https://www.nirfindia.org'],
    lastVerified: '2026-03-14',
    verificationStatus: 'Verified Official',
    establishedYear: 1969,
    campusAreaAcres: 1019,
    shortDescription: 'Foremost centre for social sciences, humanities, international studies, and languages with an active democratic intellectual environment.',
    popularDisciplines: ['International Studies', 'Economics', 'Languages', 'Sociology']
  },
  {
    id: 'bhu-varanasi',
    name: 'Banaras Hindu University',
    campusName: 'Main Campus Varanasi',
    slug: 'banaras-hindu-university',
    institutionType: 'Central University',
    ownership: 'Public / Government',
    address: 'Ajgara, Lanka',
    city: 'Varanasi',
    district: 'Varanasi',
    state: 'Uttar Pradesh',
    postalCode: '221005',
    latitude: 25.2677,
    longitude: 82.9913,
    courses: [
      'B.Sc. (Hons) Agriculture',
      'B.A. / M.A. Indian Philosophy and Culture',
      'MBBS Institute of Medical Sciences (IMS BHU)',
      'B.Com (Hons) Faculty of Commerce',
      'Ph.D. Sanskrit & Vedic Studies'
    ],
    facilities: [
      'Sayaji Rao Gaekwad Central Library',
      'Sir Sunderlal Hospital (Super Specialty)',
      'Over 60 Student Hostels',
      'Bharat Kala Bhavan Archaeological Museum',
      'Kashi Vishwanath Temple (VT) Campus Center',
      'Flying Club and Airstrip'
    ],
    hostelAvailable: true,
    website: 'https://www.bhu.ac.in',
    admissionUrl: 'https://bhuonline.in',
    contactEmail: 'help@bhuonline.in',
    contactPhone: '+91-542-2368-558',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.bhu.ac.in'],
    lastVerified: '2026-02-20',
    verificationStatus: 'Verified Official',
    establishedYear: 1916,
    campusAreaAcres: 1300,
    shortDescription: 'Founded by Mahamana Pandit Madan Mohan Malaviya, it is one of the largest residential universities in Asia with a semicircular campus grid.',
    popularDisciplines: ['Agriculture', 'Medicine', 'Sanskrit', 'Humanities', 'Commerce']
  },
  {
    id: 'nlsiu-bangalore',
    name: 'National Law School of India University',
    campusName: 'Nagarbhavi Campus',
    slug: 'nlsiu-bangalore',
    institutionType: 'Law Institute',
    ownership: 'Public / Government',
    address: 'Gnana Bharathi Main Rd, Nagarbhavi',
    city: 'Bengaluru',
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    postalCode: '560072',
    latitude: 12.9515,
    longitude: 77.5098,
    courses: [
      'B.A., LL.B. (Hons) 5-Year Integrated',
      '3-Year LL.B. (Hons) Postgraduate Degree',
      'LL.M. Master of Laws',
      'Master of Public Policy (MPP)',
      'Ph.D. in Law'
    ],
    facilities: [
      'Sri Narayan Rao Melgiri Memorial National Law Library',
      'Moot Court Halls and Legal Clinics',
      'Hostels for Undergraduate & Graduate Scholars',
      'Digital E-Learning and Legal Database Portal',
      'Sports and Recreation Complex'
    ],
    hostelAvailable: true,
    website: 'https://www.nls.ac.in',
    admissionUrl: 'https://consortiumofnlus.ac.in',
    contactEmail: 'contactus@nls.ac.in',
    contactPhone: '+91-80-2321-3160',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.nls.ac.in', 'https://www.nirfindia.org'],
    lastVerified: '2026-03-01',
    verificationStatus: 'Verified Official',
    establishedYear: 1987,
    campusAreaAcres: 23,
    shortDescription: 'The pioneer of five-year integrated legal education in India and universally regarded as the premier law school in the country.',
    popularDisciplines: ['Constitutional Law', 'Corporate Law', 'Public Policy', 'Human Rights']
  },
  {
    id: 'iit-roorkee',
    name: 'Indian Institute of Technology Roorkee',
    campusName: 'Main Campus Roorkee',
    slug: 'iit-roorkee',
    institutionType: 'Institute of National Importance',
    ownership: 'Public / Government',
    address: 'Roorkee, Haridwar District',
    city: 'Roorkee',
    district: 'Haridwar',
    state: 'Uttarakhand',
    postalCode: '247667',
    latitude: 29.8644,
    longitude: 77.8964,
    courses: [
      'B.Tech Civil Engineering',
      'B.Tech Computer Science & Engineering',
      'B.Arch Bachelor of Architecture',
      'M.Tech Earthquake Engineering',
      'M.Tech Water Resources Development'
    ],
    facilities: [
      'Mahatma Gandhi Central Library',
      'Historic James Thomason Building',
      'Earthquake Engineering Shaking Table Lab',
      'Residential Hostels (Bhavans)',
      'TIDES Business Incubator',
      'IITR Hospital'
    ],
    hostelAvailable: true,
    website: 'https://www.iitr.ac.in',
    admissionUrl: 'https://www.iitr.ac.in/admissions',
    contactEmail: 'registrar@iitr.ac.in',
    contactPhone: '+91-1332-285311',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.iitr.ac.in'],
    lastVerified: '2026-02-18',
    verificationStatus: 'Verified Official',
    establishedYear: 1847,
    campusAreaAcres: 365,
    shortDescription: 'Originally founded as the Thomason College of Civil Engineering in 1847, it is the oldest technical institution in the entire Asian subcontinent.',
    popularDisciplines: ['Civil Engineering', 'Earthquake Studies', 'Hydrology', 'Architecture']
  },
  {
    id: 'iit-guwahati',
    name: 'Indian Institute of Technology Guwahati',
    campusName: 'North Guwahati Brahmaputra Campus',
    slug: 'iit-guwahati',
    institutionType: 'Institute of National Importance',
    ownership: 'Public / Government',
    address: 'Amingaon, North Guwahati',
    city: 'Guwahati',
    district: 'Kamrup',
    state: 'Assam',
    postalCode: '781039',
    latitude: 26.1878,
    longitude: 91.6916,
    courses: [
      'B.Tech Biosciences & Bioengineering',
      'B.Tech Electronics & Electrical Engineering',
      'B.Des Bachelor of Design',
      'M.Tech Data Science & AI',
      'Ph.D. Clean Energy & Environment'
    ],
    facilities: [
      'Lakshminath Bezbaroa Central Library',
      'Serene Hillside Lakes and Nature Trails',
      'Hostels for Over 7,000 Students',
      'Supercomputing Facility (Param Kamrupa)',
      'Department of Design Studios',
      'Hospital and Medical Centre'
    ],
    hostelAvailable: true,
    website: 'https://www.iitg.ac.in',
    admissionUrl: 'https://www.iitg.ac.in/acad/admissions',
    contactEmail: 'pro@iitg.ac.in',
    contactPhone: '+91-361-258-3000',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.iitg.ac.in'],
    lastVerified: '2026-03-04',
    verificationStatus: 'Verified Official',
    establishedYear: 1994,
    campusAreaAcres: 700,
    shortDescription: 'Renowned as one of the most picturesque college campuses in the world, positioned along the northern banks of the majestic Brahmaputra river.',
    popularDisciplines: ['Industrial Design', 'Bioengineering', 'Computer Science', 'Materials Science']
  },
  {
    id: 'cmc-vellore',
    name: 'Christian Medical College Vellore',
    campusName: 'Ida Scudder Road Main Campus',
    slug: 'cmc-vellore',
    institutionType: 'Medical College',
    ownership: 'Private',
    address: 'Ida Scudder Road',
    city: 'Vellore',
    district: 'Vellore',
    state: 'Tamil Nadu',
    postalCode: '632004',
    latitude: 12.9246,
    longitude: 79.1348,
    courses: [
      'MBBS Degree',
      'B.Sc. Nursing',
      'MD / MS Clinical Specialties',
      'Allied Health Sciences Courses',
      'Ph.D. Translational Medical Research'
    ],
    facilities: [
      '3,000+ Bed Teaching Hospital Network',
      'Paul Brand Central Medical Library',
      'Men and Women Medical Student Hostels',
      'Community Health and Development (CHAD) Field Units',
      'Bone Marrow Transplant and Stem Cell Units'
    ],
    hostelAvailable: true,
    website: 'https://www.cmch-vellore.edu',
    admissionUrl: 'https://admissions.cmcvellore.ac.in',
    contactEmail: 'registrar@cmcvellore.ac.in',
    contactPhone: '+91-416-228-4255',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.cmch-vellore.edu'],
    lastVerified: '2026-02-14',
    verificationStatus: 'Verified Official',
    establishedYear: 1900,
    campusAreaAcres: 200,
    shortDescription: 'Centenary healthcare institution founded by Dr. Ida Sophia Scudder, pioneering medical education and affordable healthcare outreach.',
    popularDisciplines: ['Medicine', 'Community Health', 'Nursing', 'Oncology']
  },
  {
    id: 'iim-calcutta',
    name: 'Indian Institute of Management Calcutta',
    campusName: 'Joka 7-Lakes Campus',
    slug: 'iim-calcutta',
    institutionType: 'Management Institute',
    ownership: 'Public / Government',
    address: 'Diamond Harbour Road, Joka',
    city: 'Kolkata',
    district: 'Kolkata',
    state: 'West Bengal',
    postalCode: '700104',
    latitude: 22.4339,
    longitude: 88.2982,
    courses: [
      'Master of Business Administration (MBA)',
      'MBA for Executives (MBAEx)',
      'Post Graduate Diploma in Business Analytics (PGDBA)',
      'Doctoral Programme in Management'
    ],
    facilities: [
      'B.C. Roy Memorial Library',
      '7 Interconnected Scenic Natural Lakes',
      'Hostels (Ramanujan, Tagore, Old & New Blocks)',
      'Financial Research and Trading Lab (Bloomberg Terminals)',
      'Innovation Park (IIMC Innovation Park)'
    ],
    hostelAvailable: true,
    website: 'https://www.iimcal.ac.in',
    admissionUrl: 'https://www.iimcal.ac.in/programs/pgp/admissions',
    contactEmail: 'pgpadmissions@iimcal.ac.in',
    contactPhone: '+91-33-2467-8300',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.iimcal.ac.in', 'https://www.nirfindia.org'],
    lastVerified: '2026-02-27',
    verificationStatus: 'Verified Official',
    establishedYear: 1961,
    campusAreaAcres: 135,
    shortDescription: 'First national institute for management established in India, internationally renowned for excellence in quantitative finance and business analytics.',
    popularDisciplines: ['Quantitative Finance', 'Business Analytics', 'Economics', 'Operations']
  },
  {
    id: 'ashoka-university',
    name: 'Ashoka University',
    campusName: 'Rajiv Gandhi Education City Campus',
    slug: 'ashoka-university',
    institutionType: 'Private University',
    ownership: 'Private',
    address: 'Plot No. 2, Rajiv Gandhi Education City, Rai',
    city: 'Sonipat',
    district: 'Sonipat',
    state: 'Haryana',
    postalCode: '131029',
    latitude: 28.9482,
    longitude: 77.0988,
    courses: [
      'B.A. (Hons) Liberal Arts & Humanities',
      'B.Sc. (Hons) Computer Science',
      'B.Sc. (Hons) Psychology',
      'Young India Fellowship (YIF)',
      'Ph.D. in Sciences and Humanities'
    ],
    facilities: [
      'State-of-the-art Central Library',
      'Fully Air-Conditioned Residential Hostels',
      'Centre for Interdisciplinary Archaeological Research',
      'Trivedi School of Biosciences Labs',
      'Sports Arena with Indoor Basketball & Badminton'
    ],
    hostelAvailable: true,
    website: 'https://www.ashoka.edu.in',
    admissionUrl: 'https://apply.ashoka.edu.in',
    contactEmail: 'apply@ashoka.edu.in',
    contactPhone: '+91-11-4074-7565',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.ashoka.edu.in'],
    lastVerified: '2026-03-11',
    verificationStatus: 'Verified Official',
    establishedYear: 2014,
    campusAreaAcres: 25,
    shortDescription: 'Leading private philanthropic university delivering world-class interdisciplinary liberal arts, natural sciences, and humanities education.',
    popularDisciplines: ['Liberal Arts', 'Economics', 'Psychology', 'Computer Science']
  },
  {
    id: 'vit-vellore',
    name: 'Vellore Institute of Technology',
    campusName: 'Vellore Main Campus',
    slug: 'vit-vellore',
    institutionType: 'Deemed University',
    ownership: 'Private',
    address: 'Tiruvalam Road, Katpadi',
    city: 'Vellore',
    district: 'Vellore',
    state: 'Tamil Nadu',
    postalCode: '632014',
    latitude: 12.9718,
    longitude: 79.1589,
    courses: [
      'B.Tech Computer Science & Engineering',
      'B.Tech Information Technology',
      'B.Tech Mechanical Engineering',
      'Integrated M.Tech Software Engineering',
      'MBA School of Business'
    ],
    facilities: [
      'Periyar Central Library',
      'Extensive Hostels Accommodating 20,000+ Students',
      'Technology Business Incubator (VITTBI)',
      'Smart Classrooms & Flexible Credit System (FFCS)',
      'Indoor Sports Complex & Outdoor Athletic Tracks'
    ],
    hostelAvailable: true,
    website: 'https://vit.ac.in',
    admissionUrl: 'https://vit.ac.in/admissions-overview',
    contactEmail: 'admission@vit.ac.in',
    contactPhone: '+91-416-220-2020',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://vit.ac.in'],
    lastVerified: '2026-03-05',
    verificationStatus: 'Verified Official',
    establishedYear: 1984,
    campusAreaAcres: 372,
    shortDescription: 'One of India’s largest deemed technical universities, recognized for its Flexible Credit System, foreign university partnerships, and massive campus infrastructure.',
    popularDisciplines: ['Computer Engineering', 'Biotechnology', 'Electronics', 'Business']
  },
  {
    id: 'anna-university',
    name: 'Anna University',
    campusName: 'College of Engineering Guindy (CEG) Campus',
    slug: 'anna-university-chennai',
    institutionType: 'State University',
    ownership: 'Public / Government',
    address: 'Sardar Patel Road, Guindy',
    city: 'Chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    postalCode: '600025',
    latitude: 13.0102,
    longitude: 80.2354,
    courses: [
      'B.E. Computer Science and Engineering',
      'B.E. Mechanical Engineering',
      'B.Tech Biotechnology',
      'B.Tech Information Technology',
      'M.E. Structural Engineering'
    ],
    facilities: [
      'Central Library and Ramanujan Computing Centre',
      'Men and Women Hostels (CEG & ACT)',
      'Historic Red Brick CEG Main Heritage Building',
      'Centre for Aerospace Research',
      'University Sports Board'
    ],
    hostelAvailable: true,
    website: 'https://www.annauniv.edu',
    admissionUrl: 'https://www.tneaonline.org',
    contactEmail: 'registrar@annauniv.edu',
    contactPhone: '+91-44-2235-7004',
    imageUrl: 'https://images.unsplash.com/photo-1568792923760-d70635a89fa9?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.annauniv.edu'],
    lastVerified: '2026-02-15',
    verificationStatus: 'Verified Official',
    establishedYear: 1978,
    campusAreaAcres: 189,
    shortDescription: 'State technical university incorporating the College of Engineering Guindy (est. 1794), one of the oldest engineering colleges outside Europe.',
    popularDisciplines: ['Engineering', 'Architecture', 'Applied Sciences', 'Aerospace']
  },
  {
    id: 'jadavpur-university',
    name: 'Jadavpur University',
    campusName: 'Main Campus Kolkata',
    slug: 'jadavpur-university',
    institutionType: 'State University',
    ownership: 'Public / Government',
    address: '188, Raja S.C. Mallick Road',
    city: 'Kolkata',
    district: 'Kolkata',
    state: 'West Bengal',
    postalCode: '700032',
    latitude: 22.499,
    longitude: 88.3718,
    courses: [
      'B.E. Computer Science & Engineering',
      'B.E. Electronics & Telecommunication',
      'B.A. (Hons) English Literature',
      'B.A. (Hons) Comparative Literature',
      'M.Sc. Physics & Chemistry'
    ],
    facilities: [
      'Central Library (Over 700,000 volumes)',
      'Undergraduate and Postgraduate Hostels',
      'High-Voltage Engineering Laboratories',
      'Open Air Theatre and Gandhi Bhavan',
      'University Health Centre'
    ],
    hostelAvailable: true,
    website: 'http://www.jaduniv.edu.in',
    admissionUrl: 'http://www.jaduniv.edu.in/admissions.php',
    contactEmail: 'registrar@jadavpuruniversity.in',
    contactPhone: '+91-33-2414-6666',
    imageUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['http://www.jaduniv.edu.in', 'https://www.nirfindia.org'],
    lastVerified: '2026-03-01',
    verificationStatus: 'Verified Official',
    establishedYear: 1955,
    campusAreaAcres: 58,
    shortDescription: 'Distinguished unitary state university celebrated for ultra-low tuition, sterling academic rigor in engineering and liberal arts, and high societal impact.',
    popularDisciplines: ['Computer Science', 'Comparative Literature', 'Chemical Engg', 'Physics']
  },
  {
    id: 'nit-trichy',
    name: 'National Institute of Technology Tiruchirappalli',
    campusName: 'Thuvakudi Main Campus',
    slug: 'nit-trichy',
    institutionType: 'Institute of National Importance',
    ownership: 'Public / Government',
    address: 'Tanjore Main Road, National Highway 67, Thuvakudi',
    city: 'Tiruchirappalli',
    district: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    postalCode: '620015',
    latitude: 10.7627,
    longitude: 78.8143,
    courses: [
      'B.Tech Mechanical Engineering',
      'B.Tech Computer Science and Engineering',
      'B.Tech Production Engineering',
      'B.Arch Bachelor of Architecture',
      'MCA Master of Computer Applications'
    ],
    facilities: [
      'Central Library (Fully Automated RFID)',
      '22 Student Hostels (Garnet, Agate, Opal, Coral blocks)',
      'Octagon Computer Centre',
      'Centre of Excellence in Manufacturing (Siemens)',
      'Olympic-standard Sports Complex and Hospital'
    ],
    hostelAvailable: true,
    website: 'https://www.nitt.edu',
    admissionUrl: 'https://josaa.nic.in',
    contactEmail: 'director@nitt.edu',
    contactPhone: '+91-431-250-3000',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.nitt.edu'],
    lastVerified: '2026-03-02',
    verificationStatus: 'Verified Official',
    establishedYear: 1964,
    campusAreaAcres: 800,
    shortDescription: 'Ranked the number 1 National Institute of Technology in India, equipped with state-of-the-art manufacturing centres and vibrant residential halls.',
    popularDisciplines: ['Mechanical', 'Production', 'Computer Science', 'Instrumentation']
  },
  {
    id: 'nit-surathkal',
    name: 'National Institute of Technology Karnataka Surathkal',
    campusName: 'Beachside Coastal Campus',
    slug: 'nit-surathkal',
    institutionType: 'Institute of National Importance',
    ownership: 'Public / Government',
    address: 'NH 66, Srinivasnagar, Surathkal',
    city: 'Mangaluru',
    district: 'Dakshina Kannada',
    state: 'Karnataka',
    postalCode: '575025',
    latitude: 13.0108,
    longitude: 74.7943,
    courses: [
      'B.Tech Information Technology',
      'B.Tech Metallurgical and Materials Engg',
      'B.Tech Mining Engineering',
      'M.Tech Marine Structures',
      'Ph.D. Renewable Energy'
    ],
    facilities: [
      'Central Library and Digital Knowledge Centre',
      'Private Beachfront Access & Operational Lighthouse',
      'Residential Hostels for All Students',
      'Central Computing Facility',
      'Health Care Centre & Swimming Pool'
    ],
    hostelAvailable: true,
    website: 'https://www.nitk.ac.in',
    admissionUrl: 'https://www.nitk.ac.in/admissions',
    contactEmail: 'registrar@nitk.ac.in',
    contactPhone: '+91-824-247-4000',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.nitk.ac.in'],
    lastVerified: '2026-02-28',
    verificationStatus: 'Verified Official',
    establishedYear: 1960,
    campusAreaAcres: 295,
    shortDescription: 'Unique among Indian universities for possessing its own private Arabian Sea beachfront and working lighthouse, alongside stellar engineering credentials.',
    popularDisciplines: ['Marine Structures', 'Mining', 'Materials', 'Software Engineering']
  },
  {
    id: 'manipal-university',
    name: 'Manipal Academy of Higher Education',
    campusName: 'Manipal Hills Campus',
    slug: 'manipal-university',
    institutionType: 'Deemed University',
    ownership: 'Private',
    address: 'Madhav Nagar',
    city: 'Manipal',
    district: 'Udupi',
    state: 'Karnataka',
    postalCode: '576104',
    latitude: 13.3525,
    longitude: 74.7865,
    courses: [
      'MBBS Kasturba Medical College (KMC)',
      'B.Tech Manipal Institute of Technology (MIT)',
      'Pharm.D Manipal College of Pharmaceutical Sciences',
      'B.A. Media and Communication (SOC)',
      'B.Arch Faculty of Architecture'
    ],
    facilities: [
      'MARENA World-Class Indoor Sports Complex',
      'Health Sciences Central Library',
      'Multi-Tower Residential Hostels',
      'Kasturba Hospital & Simulation Centre',
      'Food Courts & Student Activity Centres'
    ],
    hostelAvailable: true,
    website: 'https://manipal.edu',
    admissionUrl: 'https://manipal.edu/mu/admission.html',
    contactEmail: 'admissions@manipal.edu',
    contactPhone: '+91-92437-77733',
    imageUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://manipal.edu'],
    lastVerified: '2026-03-07',
    verificationStatus: 'Verified Official',
    establishedYear: 1953,
    campusAreaAcres: 313,
    shortDescription: 'Distinguished Institution of Eminence perched atop the verdant Manipal plateau, creating a self-contained international university township.',
    popularDisciplines: ['Medicine', 'Pharmacy', 'Engineering', 'Media Communication']
  },
  {
    id: 'st-stephens-du',
    name: "St. Stephen's College, University of Delhi",
    campusName: 'North Campus Enclave',
    slug: 'st-stephens-college-delhi',
    institutionType: 'Arts & Science College',
    ownership: 'Public / Government',
    address: 'University Enclave, North Campus',
    city: 'New Delhi',
    district: 'North Delhi',
    state: 'Delhi',
    postalCode: '110007',
    latitude: 28.6853,
    longitude: 77.2132,
    courses: [
      'B.A. (Hons) Economics',
      'B.A. (Hons) History',
      'B.A. (Hons) English',
      'B.Sc. (Hons) Mathematics',
      'B.Sc. (Hons) Physics'
    ],
    facilities: [
      'Historic College Library',
      'Resident Hostels (Residence Blocks)',
      'Chapel and Heritage Dining Hall',
      'Cricket Ground, Tennis Courts and Gymnasium',
      'Cafeteria and Senior Common Room'
    ],
    hostelAvailable: true,
    website: 'https://www.ststephens.edu',
    admissionUrl: 'https://www.ststephens.edu/admissions',
    contactEmail: 'admissions@ststephens.edu',
    contactPhone: '+91-11-2766-7200',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.ststephens.edu', 'https://www.du.ac.in'],
    lastVerified: '2026-02-28',
    verificationStatus: 'Verified Official',
    establishedYear: 1881,
    campusAreaAcres: 30,
    shortDescription: 'One of the oldest and most prestigious constituent colleges of Delhi University, producing leaders in diplomacy, economics, and literature.',
    popularDisciplines: ['Economics', 'English', 'History', 'Pure Mathematics']
  },
  {
    id: 'aiims-jodhpur',
    name: 'All India Institute of Medical Sciences Jodhpur',
    campusName: 'Basni Phase II Campus',
    slug: 'aiims-jodhpur',
    institutionType: 'Medical College',
    ownership: 'Public / Government',
    address: 'Basni Industrial Area, Phase II',
    city: 'Jodhpur',
    district: 'Jodhpur',
    state: 'Rajasthan',
    postalCode: '342005',
    latitude: 26.2389,
    longitude: 73.0105,
    courses: [
      'MBBS',
      'MD / MS Specialty Disciplines',
      'B.Sc. (Hons) Nursing',
      'DM / M.Ch Advanced Surgery',
      'Ph.D. Medical Sciences'
    ],
    facilities: [
      '960+ Bed Super Specialty Hospital',
      'Medical Central Library with Medline Access',
      'Separate Hostels for Boys & Girls',
      'Advanced Simulation and Skills Laboratory',
      'Trauma Care and Air Ambulance Helipad'
    ],
    hostelAvailable: true,
    website: 'https://www.aiimsjodhpur.edu.in',
    admissionUrl: 'https://www.aiimsexams.ac.in',
    contactEmail: 'dean@aiimsjodhpur.edu.in',
    contactPhone: '+91-291-274-0742',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.aiimsjodhpur.edu.in'],
    lastVerified: '2026-03-01',
    verificationStatus: 'Verified Official',
    establishedYear: 2012,
    campusAreaAcres: 157,
    shortDescription: 'Top-tier apex medical institute established under PMSSY, known for desert medicine innovations and advanced surgical skills laboratories.',
    popularDisciplines: ['Medicine', 'Surgical Gastroenterology', 'Trauma', 'Nursing']
  },
  {
    id: 'nid-ahmedabad',
    name: 'National Institute of Design',
    campusName: 'Paldi Heritage Campus',
    slug: 'nid-ahmedabad',
    institutionType: 'Institute of National Importance',
    ownership: 'Public / Government',
    address: 'Opp. Tagore Hall, Paldi',
    city: 'Ahmedabad',
    district: 'Ahmedabad',
    state: 'Gujarat',
    postalCode: '380007',
    latitude: 23.0118,
    longitude: 72.5645,
    courses: [
      'Bachelor of Design (B.Des) Graphic Design',
      'B.Des Product Design',
      'B.Des Film & Video Communication',
      'Master of Design (M.Des) Interaction Design',
      'M.Des Textile Design'
    ],
    facilities: [
      'Knowledge Management Centre (KMC / Design Library)',
      'Prototyping & Wood/Metal/Ceramic Workshops',
      'Student Hostels',
      'Sound Recording and Green Screen Studio',
      'National Design Business Incubator (NDBI)'
    ],
    hostelAvailable: true,
    website: 'https://www.nid.edu',
    admissionUrl: 'https://admissions.nid.edu',
    contactEmail: 'admissions@nid.edu',
    contactPhone: '+91-79-2662-3692',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.nid.edu'],
    lastVerified: '2026-02-12',
    verificationStatus: 'Verified Official',
    establishedYear: 1961,
    campusAreaAcres: 16,
    shortDescription: 'India’s premier design institution based on the India Report by Charles and Ray Eames, pioneering human-centered design and innovation.',
    popularDisciplines: ['Industrial Design', 'Visual Communication', 'Textile Design', 'UI/UX']
  },
  {
    id: 'panjab-university',
    name: 'Panjab University',
    campusName: 'Sector 14 & 25 Campus',
    slug: 'panjab-university-chandigarh',
    institutionType: 'State University',
    ownership: 'Public / Government',
    address: 'Sector 14',
    city: 'Chandigarh',
    district: 'Chandigarh',
    state: 'Chandigarh (UT)',
    postalCode: '160014',
    latitude: 30.7599,
    longitude: 76.7681,
    courses: [
      'B.A. / B.Com. LL.B. (Hons) 5 Years',
      'B.Pharm University Institute of Pharmaceutical Sciences',
      'B.E. Computer Science (UIET)',
      'M.Sc. Physics (Centre of Advanced Study)',
      'Ph.D. Humanities & Basic Sciences'
    ],
    facilities: [
      'A.C. Joshi Central Library (over 650,000 books)',
      '18+ Student Hostels and Dining Halls',
      'Gandhi Bhawan Architectural Landmark',
      'University Health Centre & Olympic Swimming Pool',
      'Botanical Gardens & Shooting Range'
    ],
    hostelAvailable: true,
    website: 'https://puchd.ac.in',
    admissionUrl: 'https://admissions.puchd.ac.in',
    contactEmail: 'reg@pu.ac.in',
    contactPhone: '+91-172-253-4818',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://puchd.ac.in'],
    lastVerified: '2026-02-22',
    verificationStatus: 'Verified Official',
    establishedYear: 1882,
    campusAreaAcres: 550,
    shortDescription: 'One of the oldest universities in India, situated in the Le Corbusier-planned city of Chandigarh, producing prime ministers and Nobel laureates.',
    popularDisciplines: ['Law', 'Pharmacy', 'Physics', 'History', 'Engineering']
  },
  {
    id: 'iiit-hyderabad',
    name: 'International Institute of Information Technology Hyderabad',
    campusName: 'Gachibowli IT Hub Campus',
    slug: 'iiit-hyderabad',
    institutionType: 'Deemed University',
    ownership: 'Public-Private Partnership',
    address: 'Prof. C R Rao Road, Gachibowli',
    city: 'Hyderabad',
    district: 'Hyderabad',
    state: 'Telangana',
    postalCode: '500032',
    latitude: 17.4455,
    longitude: 78.3489,
    courses: [
      'B.Tech Computer Science and Engineering',
      'B.Tech Electronics & Communication',
      'Dual Degree (B.Tech + MS by Research in CSE)',
      'Dual Degree in Exact Humanities',
      'Ph.D. Language Technologies / CVIT'
    ],
    facilities: [
      'Central Library & Digital Archives',
      'Centre for Visual Information Technology (CVIT)',
      'Kohli Centre on Intelligent Systems (KCIS)',
      'Hostels for Undergraduate & Postgraduates',
      'CIE (Centre for Innovation and Entrepreneurship)',
      'Sports Complex and Football Ground'
    ],
    hostelAvailable: true,
    website: 'https://www.iiit.ac.in',
    admissionUrl: 'https://ugadmissions.iiit.ac.in',
    contactEmail: 'ugadmissions@iiit.ac.in',
    contactPhone: '+91-40-6653-1250',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.iiit.ac.in'],
    lastVerified: '2026-03-09',
    verificationStatus: 'Verified Official',
    establishedYear: 1998,
    campusAreaAcres: 66,
    shortDescription: 'Premier autonomous university specializing in computer science research, machine learning, natural language processing, and computer vision.',
    popularDisciplines: ['Artificial Intelligence', 'Computer Vision', 'NLP', 'Cybersecurity']
  },
  {
    id: 'iit-hyderabad',
    name: 'Indian Institute of Technology Hyderabad',
    campusName: 'Kandi Main Campus',
    slug: 'iit-hyderabad',
    institutionType: 'Institute of National Importance',
    ownership: 'Public / Government',
    address: 'Near NH-65, Sangareddy, Kandi',
    city: 'Hyderabad',
    district: 'Sangareddy',
    state: 'Telangana',
    postalCode: '502285',
    latitude: 17.5947,
    longitude: 78.123,
    courses: [
      'B.Tech Artificial Intelligence',
      'B.Tech Biomedical Engineering',
      'B.Tech Computational Engineering',
      'B.Des Bachelor of Design',
      'M.Tech additive Manufacturing'
    ],
    facilities: [
      'Radiant Cooling Hostels & Futuristic Japanese Architecture',
      'Knowledge Resource Centre',
      'TiHAN (Autonomous Navigation Technology Innovation Hub)',
      'Design FabLab & Cleanrooms',
      'Health Centre & Indoor Badminton Arena'
    ],
    hostelAvailable: true,
    website: 'https://www.iith.ac.in',
    admissionUrl: 'https://www.iith.ac.in/academics/admissions',
    contactEmail: 'info@iith.ac.in',
    contactPhone: '+91-40-2301-6033',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.iith.ac.in'],
    lastVerified: '2026-03-10',
    verificationStatus: 'Verified Official',
    establishedYear: 2008,
    campusAreaAcres: 576,
    shortDescription: 'Rapidly rising second-generation IIT renowned for first-in-India B.Tech in AI, state-of-the-art Japanese architecture, and TiHAN autonomous testbed.',
    popularDisciplines: ['Artificial Intelligence', 'Biomedical', 'Robotics', 'Design']
  },
  {
    id: 'iit-kanpur',
    name: 'Indian Institute of Technology Kanpur',
    campusName: 'Kalyanpur Main Campus',
    slug: 'iit-kanpur',
    institutionType: 'Institute of National Importance',
    ownership: 'Public / Government',
    address: 'Kalyanpur',
    city: 'Kanpur',
    district: 'Kanpur Nagar',
    state: 'Uttar Pradesh',
    postalCode: '208016',
    latitude: 26.5123,
    longitude: 80.2329,
    courses: [
      'B.Tech Computer Science & Engineering',
      'B.Tech Aerospace Engineering',
      'B.Tech Materials Science and Engineering',
      'BS in Earth Sciences',
      'Dual Degree Biological Sciences & Bioengineering'
    ],
    facilities: [
      'P.K. Kelkar Central Library',
      'Operational Campus Flight Airstrip & Glider Club',
      'National Wind Tunnel Facility (NWTF)',
      '13 Halls of Residence (Hostels)',
      'SIIC Technology Business Incubator',
      'Health Centre & Swimming Complex'
    ],
    hostelAvailable: true,
    website: 'https://www.iitk.ac.in',
    admissionUrl: 'https://www.iitk.ac.in/doaa/admissions',
    contactEmail: 'director@iitk.ac.in',
    contactPhone: '+91-512-259-0151',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.iitk.ac.in'],
    lastVerified: '2026-03-12',
    verificationStatus: 'Verified Official',
    establishedYear: 1959,
    campusAreaAcres: 1055,
    shortDescription: 'Pioneered computer science education in India under the historic Kanpur Indo-American Program; houses its own working 1,000-metre airstrip.',
    popularDisciplines: ['Aerospace', 'Cybersecurity', 'Computer Science', 'Earth Sciences']
  },
  {
    id: 'tiss-mumbai',
    name: 'Tata Institute of Social Sciences',
    campusName: 'Deonar Main Campus',
    slug: 'tiss-mumbai',
    institutionType: 'Deemed University',
    ownership: 'Public / Government',
    address: 'V.N. Purav Marg, Deonar',
    city: 'Mumbai',
    district: 'Mumbai Suburban',
    state: 'Maharashtra',
    postalCode: '400088',
    latitude: 19.0441,
    longitude: 72.9126,
    courses: [
      'M.A. Human Resources Management & Labour Relations (HRM&LR)',
      'M.A. Social Work (MSW)',
      'M.A. Development Studies',
      'Master of Public Health (MPH)',
      'Ph.D. Social Sciences'
    ],
    facilities: [
      'Sir Dorabji Tata Memorial Library',
      'Campus Hostels & Dining Hall',
      'Centre for Human Ecology Counselling Units',
      'Multi-purpose Convention Hall',
      'Health Centre'
    ],
    hostelAvailable: true,
    website: 'https://www.tiss.edu',
    admissionUrl: 'https://admissions.tiss.edu',
    contactEmail: 'admissionsinfo@tiss.edu',
    contactPhone: '+91-22-2552-5000',
    imageUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['https://www.tiss.edu'],
    lastVerified: '2026-02-18',
    verificationStatus: 'Verified Official',
    establishedYear: 1936,
    campusAreaAcres: 21,
    shortDescription: 'Founded by the Sir Dorabji Tata Trust, it is India’s foremost academic institution for social work, human resources, and development policies.',
    popularDisciplines: ['Social Work', 'HR Management', 'Public Health', 'Development Studies']
  },
  {
    id: 'tezpur-university',
    name: 'Tezpur University',
    campusName: 'Napaam Central Campus',
    slug: 'tezpur-university',
    institutionType: 'Central University',
    ownership: 'Public / Government',
    address: 'Napaam, Tezpur',
    city: 'Tezpur',
    district: 'Sonitpur',
    state: 'Assam',
    postalCode: '784028',
    latitude: 26.7011,
    longitude: 92.8306,
    courses: [
      'B.Tech Mechanical Engineering',
      'B.Tech Food Engineering and Technology',
      'M.Sc. Molecular Biology & Biotechnology',
      'M.A. Mass Communication and Journalism',
      'Integrated M.Sc. in Physics & Chemistry'
    ],
    facilities: [
      'Central Library (RFID enabled)',
      '12+ Hostels (Charaideo, Nilachal, Bordoichila blocks)',
      'Sophisticated Analytical Instrumentation Centre (SAIC)',
      'Community Radio Station (Gyan Taranga 90.4 FM)',
      'Sports Complex and Health Centre'
    ],
    hostelAvailable: true,
    website: 'http://www.tezu.ernet.in',
    admissionUrl: 'https://www.tezu.ernet.in/admissions2025.html',
    contactEmail: 'admissions@tezu.ernet.in',
    contactPhone: '+91-3712-267008',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',
    sourceUrls: ['http://www.tezu.ernet.in'],
    lastVerified: '2026-03-01',
    verificationStatus: 'Verified Official',
    establishedYear: 1994,
    campusAreaAcres: 262,
    shortDescription: 'Premier central university in Northeast India, founded under the historic Assam Accord, renowned for biotechnology and food technology research.',
    popularDisciplines: ['Food Technology', 'Biotechnology', 'Environmental Sciences', 'Energy']
  }
];

/**
 * Calculates geographic distance in kilometers using the Haversine formula
 */
export function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

/**
 * Finds campuses within a radius (km) of a target coordinate
 */
export function findNearbyCampuses(
  originLat: number,
  originLng: number,
  excludeId?: string,
  radiusKm = 200
): { campus: Campus; distanceKm: number }[] {
  return CAMPUSES_DATA.filter((c) => c.id !== excludeId)
    .map((c) => ({
      campus: c,
      distanceKm: calculateDistanceKm(originLat, originLng, c.latitude, c.longitude)
    }))
    .filter((item) => item.distanceKm <= radiusKm)
    .sort((a, b) => a.distanceKm - b.distanceKm);
}

export const UNIQUE_STATES = Array.from(
  new Set(CAMPUSES_DATA.map((c) => c.state))
).sort();

export const INSTITUTION_TYPES: Campus['institutionType'][] = [
  'Institute of National Importance',
  'Central University',
  'State University',
  'Deemed University',
  'Private University',
  'Engineering College',
  'Medical College',
  'Management Institute',
  'Law Institute',
  'Arts & Science College'
];

export const COMMON_FACILITIES = [
  'Central Library',
  'Hostels (Boys & Girls)',
  'Sports Complex',
  'Health Centre / Hospital',
  'Innovation Incubation Centre',
  'High-speed Wi-Fi Campus'
];

export const POPULAR_STREAMS = [
  'Engineering',
  'Medicine',
  'Management',
  'Law',
  'Design',
  'Pure Sciences',
  'Humanities',
  'Computer Science',
  'Data Science'
];

export function filterCampuses(campuses: Campus[], filters: FilterState): Campus[] {
  return campuses.filter((campus) => {
    // Search query matches name, campusName, city, state, or course
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase().trim();
      const matchName = campus.name.toLowerCase().includes(q);
      const matchCampus = campus.campusName.toLowerCase().includes(q);
      const matchCity = campus.city.toLowerCase().includes(q);
      const matchState = campus.state.toLowerCase().includes(q);
      const matchCourse = campus.courses.some((c) => c.toLowerCase().includes(q));
      const matchDiscipline = campus.popularDisciplines?.some((d) => d.toLowerCase().includes(q));
      if (!matchName && !matchCampus && !matchCity && !matchState && !matchCourse && !matchDiscipline) {
        return false;
      }
    }

    // State filter
    if (filters.selectedState && campus.state !== filters.selectedState) {
      return false;
    }

    // City filter
    if (filters.selectedCity && campus.city.toLowerCase() !== filters.selectedCity.toLowerCase()) {
      return false;
    }

    // Institution types
    if (filters.selectedTypes.length > 0 && !filters.selectedTypes.includes(campus.institutionType)) {
      return false;
    }

    // Ownership
    if (filters.selectedOwnership.length > 0 && !filters.selectedOwnership.includes(campus.ownership)) {
      return false;
    }

    // Hostel available
    if (filters.hostelOnly && !campus.hostelAvailable) {
      return false;
    }

    // Facilities
    if (filters.selectedFacilities.length > 0) {
      const hasAllFacilities = filters.selectedFacilities.every((fac) =>
        campus.facilities.some((f) => f.toLowerCase().includes(fac.toLowerCase()))
      );
      if (!hasAllFacilities) {
        return false;
      }
    }

    // Course stream keyword
    if (filters.selectedCourseKeyword) {
      const stream = filters.selectedCourseKeyword.toLowerCase();
      const matchDiscipline = campus.popularDisciplines?.some((d) => d.toLowerCase().includes(stream));
      const matchCourse = campus.courses.some((c) => c.toLowerCase().includes(stream));
      if (!matchDiscipline && !matchCourse) {
        return false;
      }
    }

    return true;
  });
}

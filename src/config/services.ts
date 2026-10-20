export type ServiceCategory = 'All' | 'Imaging' | 'Ultrasound' | 'Cardiac' | 'Pulmonary' | "Women's Health";

export interface DiagnosticService {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  hindiTitle: string;
  category: 'Imaging' | 'Ultrasound' | 'Cardiac' | 'Pulmonary' | "Women's Health";
  shortDesc: string;
  detailedDesc: string;
  clinicalPurpose: string;
  image: string;
  keyIndications: string[];
  preparationNote: string;
  isPopular?: boolean;
}

export const DIAGNOSTIC_SERVICES: DiagnosticService[] = [
  {
    id: 'ct-scan',
    slug: 'ct-scan',
    title: 'CT Scan',
    shortTitle: 'CT Scan',
    hindiTitle: 'सीटी स्कैन',
    category: 'Imaging',
    shortDesc: 'Computed tomography imaging used to create detailed cross-sectional images of the body.',
    detailedDesc: 'Computed Tomography (CT) utilizes advanced X-ray rotation technology and computer algorithms to construct high-definition cross-sectional views of internal tissues, bones, and blood vessels.',
    clinicalPurpose: 'Assists clinicians in evaluating trauma, head injuries, chest pathology, abdominal pain, spine conditions, and musculoskeletal structures with rapid multi-slice accuracy.',
    image: '/images/ct-scan.jpg',
    keyIndications: [
      'Head, Brain & Neurological Assessments',
      'Chest, Pulmonary & Mediastinal Scans',
      'Abdominal & Pelvic Organ Evaluation',
      'Spine, Joint & Bone Fractures'
    ],
    preparationNote: 'Please consult the centre prior to your scan. For certain abdominal or contrast studies, a fasting period or prior blood test (such as kidney function) may be advised by your referring clinician.',
    isPopular: true
  },
  {
    id: '5d-sonography',
    slug: '5d-sonography',
    title: '5D Sonography',
    shortTitle: '5D Sonography',
    hindiTitle: 'सोनोग्राफी (5D)',
    category: 'Ultrasound',
    shortDesc: 'Advanced ultrasound imaging. Contact the centre to confirm the examinations and appointments available.',
    detailedDesc: '5D Sonography represents an evolutionary step in diagnostic ultrasound, combining volumetric 3D/4D acquisition with realistic anatomical lighting and depth rendering.',
    clinicalPurpose: 'Provides clinicians and expectant parents with exceptional clarity for obstetric assessments, fetal development tracking, as well as detailed abdominal and soft-tissue evaluation.',
    image: '/images/ultrasound-5d.jpg',
    keyIndications: [
      'High-Definition Obstetric & Fetal Imaging',
      'Fetal Growth & Anatomy Screenings',
      'Whole Abdomen & Pelvic Sonography',
      'Superficial Soft Tissue & Organ Imaging'
    ],
    preparationNote: 'Preparation varies depending on the examination. Pelvic and early pregnancy ultrasounds may require a comfortably full bladder, while upper abdominal scans often need a few hours of fasting. Enquire with our team when scheduling.',
    isPopular: true
  },
  {
    id: 'colour-doppler',
    slug: 'colour-doppler',
    title: 'Colour Doppler',
    shortTitle: 'Colour Doppler',
    hindiTitle: 'कलर डॉप्लर',
    category: 'Ultrasound',
    shortDesc: 'Ultrasound imaging used to assess blood flow in relevant blood vessels.',
    detailedDesc: 'Colour Doppler ultrasound visualizes the direction and velocity of blood movement through arterial and venous channels using color-coded sound wave reflections.',
    clinicalPurpose: 'Enables precise clinical assessment of vascular patency, blood clots (DVT), narrowing of arteries (stenosis), varicose veins, and placental blood flow during pregnancy.',
    image: '/images/colour-doppler.jpg',
    keyIndications: [
      'Carotid Doppler for Stroke Risk Assessment',
      'Lower & Upper Limb Arterial and Venous Studies',
      'Deep Vein Thrombosis (DVT) Detection',
      'Obstetric Uterine & Umbilical Blood Flow Studies'
    ],
    preparationNote: 'Wear loose, comfortable clothing allowing easy access to the limb, neck, or abdomen being scanned. No general medication restrictions apply unless specified by your doctor.',
    isPopular: true
  },
  {
    id: 'echocardiography',
    slug: 'echocardiography',
    title: 'Echocardiography',
    shortTitle: 'Echo / 2D Echo',
    hindiTitle: 'इकोकार्डियोग्राफी',
    category: 'Cardiac',
    shortDesc: 'Ultrasound examination used to assess heart structure and function.',
    detailedDesc: 'An Echocardiogram (Echo) is a non-invasive specialized cardiac ultrasound that captures real-time motion images of the beating heart, heart chambers, and heart valves.',
    clinicalPurpose: 'Evaluates the pumping strength of the heart (ejection fraction), assesses heart valve function, identifies pericardial fluid, and screens for congenital or hypertensive cardiac changes.',
    image: '/images/echocardiography.jpg',
    keyIndications: [
      'Evaluation of Heart Chambers & Valve Motion',
      'Assessment of Pumping Efficacy & Ejection Fraction',
      'Screening for Breathlessness or Chest Discomfort Causes',
      'Monitoring Hypertensive & Ischemic Heart Conditions'
    ],
    preparationNote: 'Echocardiography requires no prior fasting or dietary alterations. Please bring along previous ECG reports or cardiac records for comparison.',
    isPopular: true
  },
  {
    id: 'digital-x-ray',
    slug: 'digital-x-ray',
    title: 'Digital X-Ray',
    shortTitle: 'Digital X-Ray',
    hindiTitle: 'डिजिटल एक्स-रे',
    category: 'Imaging',
    shortDesc: 'Digital X-ray imaging to help clinicians assess relevant bones and other structures.',
    detailedDesc: 'Digital Radiography (X-Ray) utilizes sensitive digital detectors that produce immediate, high-resolution radiographic images with reduced radiation dosage compared to conventional film.',
    clinicalPurpose: 'Fundamental first-line diagnostic investigation for bone fractures, joint degenerations, spine alignment, chest infections, pneumonia, and foreign body localization.',
    image: '/images/digital-xray.jpg',
    keyIndications: [
      'Chest Radiographs (Lungs, Pleura & Heart Silhouette)',
      'Bone Fracture, Dislocation & Joint Alignment',
      'Cervical, Thoracic & Lumbar Spine Studies',
      'Paranasal Sinus & Skeletal Surveys'
    ],
    preparationNote: 'Wear clothing free of metallic zippers, hooks, or jewellery in the area being examined. Females must inform our radiographers in advance if pregnancy is confirmed or suspected.',
    isPopular: false
  },
  {
    id: 'ecg',
    slug: 'ecg',
    title: 'ECG',
    shortTitle: 'ECG',
    hindiTitle: 'ईसीजी',
    category: 'Cardiac',
    shortDesc: 'An electrocardiogram records the electrical activity of the heart.',
    detailedDesc: 'An Electrocardiogram (ECG) records the minute electrical impulses generated by cardiac tissue during each heartbeat, producing a precise 12-lead graphical tracing.',
    clinicalPurpose: 'Detects arrhythmias, conduction blocks, signs of ischemic changes or past heart attacks, electrolyte abnormalities, and provides baseline pre-operative cardiac clearance.',
    image: '/images/ecg-test.jpg',
    keyIndications: [
      'Immediate Heart Rate & Rhythm Tracing',
      'Evaluation of Palpitations, Dizziness or Chest Discomfort',
      'Pre-Operative Anesthetic Clearance',
      'Routine Health & Cardiovascular Screening'
    ],
    preparationNote: 'Quick and non-invasive, taking only 5 to 10 minutes. Wear comfortable clothing with easy access to your chest, wrists, and ankles.',
    isPopular: false
  },
  {
    id: 'pft',
    slug: 'pft',
    title: 'Pulmonary Function Test (PFT)',
    shortTitle: 'PFT / Spirometry',
    hindiTitle: 'पीएफटी',
    category: 'Pulmonary',
    shortDesc: 'Pulmonary function testing helps assess aspects of how the lungs work.',
    detailedDesc: 'Pulmonary Function Testing (PFT) with digital spirometry measures the volume of air an individual can inhale and exhale, as well as how rapidly air can be expelled from the lungs.',
    clinicalPurpose: 'Assists clinicians in identifying and differentiating obstructive and restrictive pulmonary disorders such as Asthma, Chronic Obstructive Pulmonary Disease (COPD), and occupational lung disorders.',
    image: '/images/pft-test.jpg',
    keyIndications: [
      'Evaluation of Chronic Cough, Wheezing & Shortness of Breath',
      'Diagnosis & Monitoring of Asthma and COPD',
      'Pre-Operative Assessment of Respiratory Reserve',
      'Assessment of Occupational Dust Exposure Impact'
    ],
    preparationNote: 'Avoid heavy meals immediately before testing. If you use inhalers, enquire with our clinical team or referring doctor whether to withhold medication on the test morning.',
    isPopular: false
  },
  {
    id: 'obg-consultation',
    slug: 'obg-consultation',
    title: 'OBG Consultation',
    shortTitle: 'OBG Consultation',
    hindiTitle: 'प्रसूति एवं स्त्री रोग परामर्श',
    category: "Women's Health",
    shortDesc: "Enquire about the women's health and obstetric-gynaecological consultation services available at the centre.",
    detailedDesc: "Specialized clinical consultation focused on obstetrics and gynaecology, supporting women throughout various life stages including pregnancy, reproductive wellness, and general gynaecological health.",
    clinicalPurpose: "Provides professional clinical evaluation, correlation of obstetric ultrasound findings, antenatal guidance, and gynaecological health consultations in a private and caring environment.",
    image: '/images/obg-consultation.jpg',
    keyIndications: [
      'Antenatal Care & Pregnancy Check-up Guidance',
      'Obstetric Ultrasound Findings Review & Counselling',
      'Women’s General & Gynaecological Health Enquiries',
      'Post-natal and Preventive Wellness Advice'
    ],
    preparationNote: 'Please carry your previous medical prescriptions, lab reports, and antenatal ultrasound records for your consultation.',
    isPopular: false
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'All',
  'Imaging',
  'Ultrasound',
  'Cardiac',
  'Pulmonary',
  "Women's Health"
];

export const getServiceBySlug = (slug: string): DiagnosticService | undefined => {
  return DIAGNOSTIC_SERVICES.find((s) => s.slug === slug);
};

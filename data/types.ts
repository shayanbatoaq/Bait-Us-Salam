export type NavItem = {
  href: string;
  label: string;
};

export type TrustBadge = {
  label: string;
  subtitle: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type IconFeatureItem = FeatureItem & {
  icon: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export type CompanyInfo = {
  name: string;
  website: string;
  address: string;
  phones: string[];
  positioning: string;
  navigation: NavItem[];
  quickLinks: NavItem[];
  packageLinks: NavItem[];
  accreditations: TrustBadge[];
  trustHighlights: string[];
  homeReasons: IconFeatureItem[];
  process: ProcessStep[];
  testimonials: Testimonial[];
  aboutValues: FeatureItem[];
  differentiators: FeatureItem[];
  supportPillars: FeatureItem[];
  contactMethods: ContactMethod[];
};

export type OccupancyKey = "sharing" | "quad" | "triple" | "double";

export type FlightSegment = {
  code: string;
  date: string;
  from: string;
  to: string;
  route: string;
  departureTime: string;
  arrivalTime: string;
  baggage: string;
};

export type UmrahPackage = {
  packageNo: number;
  makkahHotel: string;
  makkahNights: string;
  madinahHotel: string;
  madinahNights: string;
  occupancy: Partial<Record<OccupancyKey, number>>;
  recommended?: boolean;
};

export type UmrahPackageSet = {
  id: string;
  title: string;
  airline: string;
  duration: string;
  departure: FlightSegment;
  returnFlight: FlightSegment;
  packages: UmrahPackage[];
  featured?: boolean;
};

export type PackageRoomPrice = {
  label: string;
  pkr: number;
  sar?: string;
  usd?: string;
  note?: string;
};

export type HajjAddonGroup = {
  title: string;
  items: string[];
};

export type HajjHotel = {
  title: string;
  details: string[];
};

export type HajjPackage = {
  id: string;
  name: string;
  headingLabel?: string;
  duration: string;
  maktab: string;
  zone: string;
  startingPrice: number;
  roomPrices: PackageRoomPrice[];
  includes: string[];
  addOns: HajjAddonGroup[];
  hotels: HajjHotel[];
  schedule: string[];
  notes: string[];
  recommended?: boolean;
};

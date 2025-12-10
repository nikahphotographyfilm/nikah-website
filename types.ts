
export interface NavItem {
  label: string;
  path: string;
}

export interface Package {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface GalleryItem {
  id: string;
  src: string;
  category: 'Wedding' | 'Pre-wedding' | 'Films' | 'Editorial';
  title: string;
  location: string;
  width?: number; // for masonry calc simulation
  height?: number;
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  embedUrl: string;
  category: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  coverImage: string;
  summary: string;
  body: string; // Markdown content
}

export interface Testimonial {
  id: string;
  couple: string;
  quote: string;
  location: string;
}

export interface Review {
  name: string;
  event: string;
  photo: string;
  rating: number;
  review: string;
}

export enum BookingStep {
  CONTACT = 1,
  EVENT = 2,
  PACKAGE = 3,
  REVIEW = 4,
}

export interface BookingFormData {
  firstName: string;
  lastName: string;
  partnerName: string;
  email: string;
  phone: string;
  eventDate: string;
  venue: string;
  eventType: string;
  packageId: string;
  budget: string;
  message: string;
  gdprConsent: boolean;
}
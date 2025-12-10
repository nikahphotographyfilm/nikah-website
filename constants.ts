import { NavItem, Package, GalleryItem, VideoItem, BlogPost, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Motion', path: '/videos' },
  { label: 'Packages', path: '/packages' },
  { label: 'Blog', path: '/blog' },
];

export const PACKAGES: Package[] = [
  {
    id: 'essential',
    title: 'Essential',
    price: 'BDT 15,000',
    description: 'Perfect for intimate ceremonies needing core coverage.',
    features: [
      '01 Core Photographer & 01 Cinematographer',
      'Duration: 4-5 hours',
      '50 edited pictures',
      'Full Movie: 20 min',
      'Trailer: 2 min',
      'Unlimited Photo Clicks'
    ],
  },
  {
    id: 'classic',
    title: 'Classic',
    price: 'BDT 20,000',
    description: 'Our most popular choice for standard wedding events.',
    features: [
      '01 Core & 01 Associate Photographer',
      '01 Cinematographer',
      'Duration: 4-5 hours',
      '100 edited pictures + 01 Standard Album',
      'Full Movie: 20 min | Trailer: 2 min',
      'Unlimited Photo Clicks'
    ],
    isFeatured: true,
  },
  {
    id: 'heritage',
    title: 'Heritage',
    price: 'BDT 30,000',
    description: 'Premium artistry featuring our Chief Photographer.',
    features: [
      'JAHIDUL HAQUE (Chief) & 02 Senior Photographers',
      'ARIAN SAJJAD (Conceptual Cinematography)',
      'Duration: 5-6 hours',
      '100 edited pictures + 1 Storybook Album',
      'Full Movie: 30 min | Trailer: 3 min',
      'All soft copies in Pendrive'
    ],
  },
  {
    id: 'combo',
    title: 'Combo',
    price: 'BDT 38,000',
    description: 'Comprehensive coverage for 2 days of celebration.',
    features: [
      'Coverage: 2 Days (Holud & Wedding)',
      '02 Photographers & 01 Cinematographer',
      '100 edited pictures + 01 Storybook',
      'Unlimited Clicks',
      '02 Trailers & 02 Full Movies'
    ],
  },
  {
    id: 'photo-only',
    title: 'Photography Only',
    price: 'BDT 12,000',
    description: 'Focused coverage dedicated purely to the still image.',
    features: [
      '02 Photographers',
      'Duration: 4-5 hours',
      '50 edited pictures',
      'Unlimited Photo Clicks'
    ],
  },
  {
    id: 'hindu-full',
    title: 'Hindu Full Project',
    price: 'BDT 1,00,000',
    description: 'The ultimate all-inclusive experience for grand celebrations.',
    features: [
      'All Events (Engagement, Bastralankar, Wedding, Reception)',
      'Includes Briddisraddho, Bashibiye & Biday rituals',
      'JAHIDUL HAQUE & ARIAN SAJJAD cover all',
      'All delivered photos will be edited',
      '02 Premium Storybook Albums',
      '03 Cinematic Trailers & 04 Full Movies',
      'All soft copies in Pendrive'
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', src: 'https://picsum.photos/800/1200?random=1', category: 'Wedding', title: 'Sarah & James', location: 'Lake Como, Italy' },
  { id: '2', src: 'https://picsum.photos/800/600?random=2', category: 'Pre-wedding', title: 'Elena & Marco', location: 'Paris, France' },
  { id: '3', src: 'https://picsum.photos/800/1000?random=3', category: 'Wedding', title: 'Aisha & Omar', location: 'Marrakech, Morocco' },
  { id: '4', src: 'https://picsum.photos/800/1200?random=4', category: 'Editorial', title: 'Vogue Feature', "location": "Santorini, Greece" },
  { id: '5', src: 'https://picsum.photos/800/800?random=5', category: 'Wedding', title: 'Li & Wei', location: 'Kyoto, Japan' },
  { id: '6', src: 'https://picsum.photos/800/1100?random=6', category: 'Films', title: 'Highlights: The Smiths', location: 'New York, USA' },
  { id: '7', src: 'https://picsum.photos/800/600?random=7', category: 'Pre-wedding', title: 'Golden Hour', location: 'Dubai, UAE' },
  { id: '8', src: 'https://picsum.photos/800/1000?random=8', category: 'Wedding', title: 'Classic Romance', location: 'London, UK' },
];

export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: '1',
    title: 'Awal & Pinky wedding',
    thumbnail: 'https://img.youtube.com/vi/X7OsqAFMcRI/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/X7OsqAFMcRI',
    category: 'Wedding Film'
  },
  {
    id: '2',
    title: 'Lablu & Olivia Holud',
    thumbnail: 'https://img.youtube.com/vi/H7EONZ9wD50/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/H7EONZ9wD50',
    category: 'Holud Event'
  },
   {
    id: '3',
    title: 'Pranab & Tisha wedding',
    thumbnail: 'https://img.youtube.com/vi/zRqu49Xn5kE/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/zRqu49Xn5kE',
    category: 'Wedding Film'
  },
  {
    id: '4',
    title: 'Ashim & Akhi wedding',
    thumbnail: 'https://img.youtube.com/vi/9CLHD8JEakQ/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/9CLHD8JEakQ',
    category: 'Wedding Film'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-you-need-wedding-film',
    title: 'Why You Need a Wedding Film: Capturing Voices & Vows',
    summary: 'Photography freezes time, but cinematography captures the feeling. Discover why having a motion record of your vows is an investment you will never regret.',
    date: 'October 12, 2023',
    coverImage: 'https://picsum.photos/800/600?random=10',
    author: 'Nikah Team',
    body: ''
  },
  {
    slug: 'how-to-feel-confident',
    title: 'How to Feel Confident in Front of the Camera',
    summary: 'Nervous about posing? You are not alone. Here are 5 expert tips to help you relax, be yourself, and look effortlessly beautiful on your big day.',
    date: 'September 28, 2023',
    coverImage: 'https://picsum.photos/800/600?random=11',
    author: 'Nikah Team',
    body: ''
  },
  {
    slug: 'legacy-of-print',
    title: 'The Legacy of Print: Why Albums Matter in a Digital Age',
    summary: 'Your wedding photos are the only tangible memory that remains. Learn how we craft a visual legacy that lasts generations through fine art albums.',
    date: 'September 15, 2023',
    coverImage: 'https://picsum.photos/800/600?random=12',
    author: 'Nikah Team',
    body: ''
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', couple: 'Emma & David', location: 'Tuscany, Italy', quote: 'The photos left us breathless. Every fleeting moment was captured with such grace and artistry. NIKAH didn’t just take photos; they bottled our memories.' },
  { id: '2', couple: 'Priya & Rahul', location: 'Mumbai, India', quote: 'Professional, unobtrusive, and incredibly talented. The cinematic film is something we watch every anniversary with tears in our eyes.' },
  { id: '3', couple: 'Sophie & Tom', location: 'New York, USA', quote: 'From the initial consultation to the final album delivery, the experience was premium white-glove service. Highly recommended.' },
];

// Design Tokens for Developer Handoff
export const DESIGN_TOKENS = {
  colors: {
    primary: '#FFFFFF',
    text: '#111214',
    accent: '#C59D5F',
    surface: '#F6F6F7',
  },
  fonts: {
    heading: 'EB Garamond',
    subheading: 'Bodoni Moda',
    body: 'Montserrat',
    script: 'Pinyon Script',
  },
  grid: '8pt soft grid',
};
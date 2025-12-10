import React from 'react';
import Section from '../components/ui/Section';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-charcoal transition-colors duration-300">
      <Section className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl mb-16 text-center text-charcoal dark:text-white">Privacy Policy</h1>
        
        <div className="text-gray-600 dark:text-gray-300 font-light leading-relaxed text-lg mb-12 border-b border-gray-100 dark:border-white/10 pb-12 font-sans">
          <p>
            At NIKAH Photography, we value your trust. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, contact us, or book our services.
          </p>
        </div>

        <div className="space-y-16">
          
          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">1. Information We Collect</h2>
            
            <div className="mb-8">
              <h3 className="font-medium text-charcoal dark:text-white mb-3 block font-subheading">Personal Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
                <li>Name</li>
                <li>Email</li>
                <li>Phone number</li>
                <li>Event details (date, venue, type of event)</li>
                <li>Messages or inquiries you send us</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-medium text-charcoal dark:text-white mb-3 block font-subheading">Media & Project Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
                <li>Photos and videos taken during your event</li>
                <li>Style preferences or notes you share</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-charcoal dark:text-white mb-3 block font-subheading">Website Data</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
                <li>IP address</li>
                <li>Device & browser type</li>
                <li>Pages viewed</li>
                <li>Cookies and analytics</li>
              </ul>
            </div>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">2. How We Use Your Information</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300 font-sans">We use your information to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
              <li>Respond to inquiries</li>
              <li>Confirm bookings</li>
              <li>Deliver photography & cinematography services</li>
              <li>Send your photos, videos, and albums</li>
              <li>Improve the website experience</li>
              <li>Maintain internal project records</li>
              <li>With your permission, showcase selected images on our portfolio or social media</li>
            </ul>
            <p className="font-medium text-charcoal dark:text-white tracking-wide font-sans">We NEVER sell your information.</p>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">3. How We Protect Your Data</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300 font-sans">We use security measures to protect your data, including:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
              <li>Encrypted storage</li>
              <li>Secure delivery systems</li>
              <li>Limited team access</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 font-sans">Your privacy is handled with strict confidentiality.</p>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">4. Sharing Your Information</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300 font-sans">We only share your data with:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
              <li>Our internal photography/cinematography team</li>
              <li>Album printing labs</li>
              <li>Delivery partners</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 font-sans">All partners follow privacy-safe practices.</p>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">5. Your Rights</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300 font-sans">You may request:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
              <li>Access to your stored information</li>
              <li>Correction or update</li>
              <li>Removal of your data</li>
              <li>Removal of your photos from public platforms</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 font-sans">Email: <a href="mailto:nikahphotographyfilm@gmail.com" className="text-charcoal dark:text-white border-b border-charcoal/30 hover:border-gold hover:text-gold transition-colors">nikahphotographyfilm@gmail.com</a></p>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">6. Cookies</h2>
            <p className="mb-2 text-gray-600 dark:text-gray-300 font-sans">Our website uses cookies to improve performance and analytics.</p>
            <p className="text-gray-600 dark:text-gray-300 font-sans">You may disable cookies anytime through your browser settings.</p>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">7. Policy Changes</h2>
            <p className="text-gray-600 dark:text-gray-300 font-sans">If we update this Privacy Policy, changes will be posted on this page.</p>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section className="bg-surface/50 dark:bg-white/5 p-8 rounded-sm">
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">Contact</h2>
            <div className="space-y-2 font-sans">
              <p className="text-gray-600 dark:text-gray-300">Email: <a href="mailto:nikahphotographyfilm@gmail.com" className="text-charcoal dark:text-white hover:text-gold transition-colors font-medium">nikahphotographyfilm@gmail.com</a></p>
              <p className="text-gray-600 dark:text-gray-300">Phone: <a href="tel:+8801703721233" className="text-charcoal dark:text-white hover:text-gold transition-colors font-medium">+880 1703 721233</a></p>
            </div>
          </section>

        </div>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
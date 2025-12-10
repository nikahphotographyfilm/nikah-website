import React from 'react';
import Section from '../components/ui/Section';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-charcoal transition-colors duration-300">
      <Section className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl mb-16 text-center text-charcoal dark:text-white">Terms of Service</h1>
        
        <div className="text-gray-600 dark:text-gray-300 font-light leading-relaxed text-lg mb-12 border-b border-gray-100 dark:border-white/10 pb-12 font-sans">
          <p>
            These Terms define the agreement between NIKAH Photography ("we", "us") and the client ("you") when booking our photography and cinematography services.
          </p>
        </div>

        <div className="space-y-16">

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">1. Booking & Payment</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
              <li>A 50% advance payment is required to confirm your date.</li>
              <li>Remaining payment is due on the event day or before delivery.</li>
              <li>Dates are not reserved without advance payment.</li>
            </ul>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">2. Cancellation & Refunds</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
              <li>Advance payments are non-refundable.</li>
              <li>Transfers to another date are only possible if mutually agreed.</li>
            </ul>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">3. Event Day Expectations</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300 font-sans">You agree to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
              <li>Provide access to all event locations</li>
              <li>Inform us of key rituals or moments</li>
              <li>Ensure a safe working environment for our team</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 italic font-sans">We may pause work if safety is compromised.</p>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">4. Delivery Timeline</h2>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
              <li>Sneak peek: 3–5 days</li>
              <li>Full gallery & films: 4–8 weeks (seasonal variations)</li>
              <li>Albums: 2–3 weeks after photo selection</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 font-sans">Delays caused by client non-response do not affect our timeline.</p>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">5. Copyright & Usage Rights</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
              <li>All photos & videos are copyrighted by NIKAH Photography.</li>
              <li>You may use them for personal viewing, sharing, and printing.</li>
              <li>We may use selected images for our portfolio, website, or social media unless you request privacy.</li>
            </ul>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">6. Editing Style</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
              <li>All final work is delivered in NIKAH’s signature editing style.</li>
              <li>Raw files are not provided unless previously agreed.</li>
            </ul>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">7. Team Substitution</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
              <li>If an emergency occurs, we may assign a qualified replacement team member.</li>
              <li>Quality will remain consistent.</li>
            </ul>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">8. Unexpected Situations</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300 font-sans">We are not responsible for issues caused by:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 dark:text-gray-300 marker:text-gold/50 font-sans">
              <li>Weather</li>
              <li>Venue restrictions</li>
              <li>Sudden scheduling changes</li>
              <li>Crowd or safety challenges</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 font-sans">But we always try our best to adapt professionally.</p>
          </section>

          <div className="w-full h-px bg-gray-100 dark:bg-white/10" />

          <section>
            <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">9. Agreement</h2>
            <p className="text-gray-600 dark:text-gray-300 font-medium font-sans">By booking with NIKAH Photography, you accept these Terms of Service.</p>
          </section>

        </div>
      </Section>
    </div>
  );
};

export default TermsOfService;
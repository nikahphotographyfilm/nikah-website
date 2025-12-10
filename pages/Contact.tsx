import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import SEO from '../components/utils/SEO';
import { PACKAGES } from '../constants';
import { CheckCircle, Calendar, MapPin, User, Gift, DollarSign, Send, Phone, Home, Heart } from 'lucide-react';

// Simplified type for the form step
type Step = 1 | 2 | 3;

const Contact: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const preSelectedPackage = query.get('package');

  const [currentStep, setCurrentStep] = useState<Step>(1);

  // Initialize budget based on pre-selected package
  const getInitialBudget = () => {
    const pkgId = preSelectedPackage || 'essential';
    const pkg = PACKAGES.find(p => p.id === pkgId);
    return pkg ? pkg.price : '';
  };

  const [formData, setFormData] = useState({
    name: '',
    coupleName: '',
    email: '',
    phone: '',
    eventDate: '',
    city: '',
    venueName: '',
    package: preSelectedPackage || 'essential',
    budget: getInitialBudget(),
    story: '',
    honeypot: '', // Security: Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPackage = e.target.value;
    const pkg = PACKAGES.find(p => p.id === newPackage);
    
    setFormData(prev => ({
      ...prev,
      package: newPackage,
      budget: pkg ? pkg.price : ''
    }));
  };

  const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 1) as Step);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Security: Check Honeypot
    if (formData.honeypot) {
      // Bot detected, pretend success but do nothing
      console.log("Spam detected");
      setIsSuccess(true);
      return;
    }

    if (currentStep === 1) {
      setCurrentStep(2);
      return;
    }
    if (currentStep === 2) {
      setCurrentStep(3);
      return;
    }

    setIsSubmitting(true);

    try {
      // Input sanitization/trimming
      const payload = {
        name:       formData.name.trim(),
        coupleName: formData.coupleName.trim(),
        email:      formData.email.trim(),
        phone:      formData.phone.trim(),
        eventDate:  formData.eventDate,
        city:       formData.city.trim(),
        venueName:  formData.venueName.trim(),
        package:    formData.package,
        budget:     formData.budget.trim(),
        story:      formData.story.trim(),
      };

      await fetch("https://script.google.com/macros/s/AKfycbyzUFiS-hNj7UcsHOtmxMYFHq0b1AkPFEGIMAha3EC-2jWZiay--UGsJyyODZEJna3V/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });

      setFormData({
        name: "",
        coupleName: "",
        email: "",
        phone: "",
        eventDate: "",
        city: "",
        venueName: "",
        package: preSelectedPackage || "essential",
        budget: getInitialBudget(),
        story: "",
        honeypot: "",
      });

      setIsSuccess(true);
      setCurrentStep(1);
    } catch (error) {
      console.error("Error submitting form"); // Don't expose actual error object in production logs if possible
      alert("There was an error submitting your request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-surface dark:bg-darkSurface transition-colors duration-300 px-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white dark:bg-white/5 p-12 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 text-center max-w-lg"
        >
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
          </div>
          <h2 className="font-serif text-3xl mb-4 text-charcoal dark:text-white">Request Received!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 font-sans">
            Thank you. We have received your inquiry. Check your email for a confirmation and our full pricing guide.
          </p>
          <Button onClick={() => setIsSuccess(false)}>Back to Home</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-surface dark:bg-darkSurface transition-colors duration-300">
      <SEO 
        title="Contact Us | Book Your Date"
        description="Book Nikah Photography for your wedding. Visit our office in Kadamtali Circle, Chittagong or call +880 1703 721233."
      />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Info & Map */}
        <Section>
          <h4 className="text-gold uppercase tracking-widest font-bold mb-2 font-subheading">Get in Touch</h4>
          <h1 className="font-serif text-5xl mb-8 leading-tight text-charcoal dark:text-white">Visit Our Office</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 leading-relaxed font-sans">
            We'd love to discuss your wedding plans in person over a cup of tea. Find us at our office or book a consultation below.
          </p>
          
          <div className="space-y-8 mb-8 font-sans">
            {/* Address */}
            <div className="flex items-start gap-5">
                <div className="bg-white dark:bg-white/5 p-4 rounded-full shadow-sm shrink-0 text-gold border border-gray-100 dark:border-white/10 transition-colors">
                    <MapPin size={24} />
                </div>
                <div>
                    <h5 className="font-serif font-bold text-xl text-charcoal dark:text-white mb-2">Office Address</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      Jan Super Market, 1st Floor<br/>
                      Kadamtali Circle, Chittagong
                    </p>
                </div>
            </div>

            {/* Phone */}
             <div className="flex items-start gap-5">
                <div className="bg-white dark:bg-white/5 p-4 rounded-full shadow-sm shrink-0 text-gold border border-gray-100 dark:border-white/10 transition-colors">
                    <Phone size={24} />
                </div>
                <div>
                    <h5 className="font-serif font-bold text-xl text-charcoal dark:text-white mb-2">Phone</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-medium tracking-wide">+880 1703 721233</p>
                    <p className="text-sm text-gray-400 mt-1">Available 10:00 AM - 8:00 PM</p>
                </div>
            </div>
          </div>
            
          {/* Map Embed */}
          <div className="w-full h-[350px] bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden border border-white dark:border-white/10 shadow-lg relative group transition-colors">
                <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=Jan%20Super%20Market%2C%20Kadamtali%20Circle%2C%20Chittagong&t=&z=16&ie=UTF8&iwloc=&output=embed"
                style={{ filter: 'grayscale(100%) opacity(0.85)' }}
                className="group-hover:filter-none transition-all duration-700"
                title="Nikah Photography Office Location"
                loading="lazy"
                ></iframe>
                
                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-charcoal/90 backdrop-blur-md px-4 py-2 rounded-md shadow-sm pointer-events-none">
                    <p className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-white font-subheading">Kadamtali Circle</p>
                </div>
          </div>
        </Section>

        {/* Right: Multi-step Form */}
        <Section delay={0.2}>
          <div className="bg-white dark:bg-white/5 p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 dark:border-white/10 h-full transition-colors font-sans">
            {/* Progress Bar */}
            <div className="flex mb-10">
               {[1, 2, 3].map(step => (
                 <div key={step} className="flex-1 h-2 relative bg-gray-100 dark:bg-white/10 first:rounded-l-full last:rounded-r-full overflow-hidden mx-1">
                    <div 
                      className={`absolute inset-0 bg-gold transition-transform duration-500 ${
                        currentStep >= step ? 'translate-x-0' : '-translate-x-full'
                      }`} 
                    />
                 </div>
               ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col h-[min(600px,auto)]">
              {/* Security: Honeypot field (hidden) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="honeypot">Do not fill this out</label>
                <input 
                  type="text" 
                  name="honeypot" 
                  id="honeypot" 
                  tabIndex={-1}
                  value={formData.honeypot} 
                  onChange={handleChange} 
                  autoComplete="off"
                />
              </div>

              <div className="flex-grow">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-serif font-bold mb-4 text-charcoal dark:text-white">The Essentials</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-subheading">Your Name</label>
                        <div className="relative">
                          <User size={18} className="absolute top-3 left-3 text-gray-400" />
                          <input 
                            required name="name" value={formData.name} onChange={handleChange} 
                            className="w-full pl-10 pr-4 py-3 bg-surface dark:bg-black/20 border border-transparent focus:border-gold focus:bg-white dark:focus:bg-white/10 text-charcoal dark:text-white transition-all rounded-md outline-none" placeholder="Jane Doe" 
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-subheading">Couple Name</label>
                        <div className="relative">
                          <Heart size={18} className="absolute top-3 left-3 text-gray-400" />
                          <input 
                            required name="coupleName" value={formData.coupleName} onChange={handleChange} 
                            className="w-full pl-10 pr-4 py-3 bg-surface dark:bg-black/20 border border-transparent focus:border-gold focus:bg-white dark:focus:bg-white/10 text-charcoal dark:text-white transition-all rounded-md outline-none" placeholder="e.g. Romeo & Juliet" 
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-subheading">Email Address</label>
                        <div className="relative">
                          <Send size={18} className="absolute top-3 left-3 text-gray-400" />
                          <input 
                            required type="email" name="email" value={formData.email} onChange={handleChange} 
                            className="w-full pl-10 pr-4 py-3 bg-surface dark:bg-black/20 border border-transparent focus:border-gold focus:bg-white dark:focus:bg-white/10 text-charcoal dark:text-white transition-all rounded-md outline-none" placeholder="jane@example.com" 
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-subheading">Phone Number</label>
                        <div className="relative">
                          <Phone size={18} className="absolute top-3 left-3 text-gray-400" />
                          <input 
                            type="tel" name="phone" value={formData.phone} onChange={handleChange} 
                            className="w-full pl-10 pr-4 py-3 bg-surface dark:bg-black/20 border border-transparent focus:border-gold focus:bg-white dark:focus:bg-white/10 text-charcoal dark:text-white transition-all rounded-md outline-none" placeholder="+880 1..." 
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-serif font-bold mb-4 text-charcoal dark:text-white">Event Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-subheading">Event Date</label>
                        <div className="relative">
                           <Calendar size={18} className="absolute top-3 left-3 text-gray-400" />
                           <input 
                            required type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} 
                            className="w-full pl-10 pr-4 py-3 bg-surface dark:bg-black/20 border border-transparent focus:border-gold focus:bg-white dark:focus:bg-white/10 text-charcoal dark:text-white transition-all rounded-md outline-none dark:[color-scheme:dark]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-subheading">City / Area</label>
                        <div className="relative">
                          <MapPin size={18} className="absolute top-3 left-3 text-gray-400" />
                          <input 
                            required name="city" value={formData.city} onChange={handleChange} 
                            className="w-full pl-10 pr-4 py-3 bg-surface dark:bg-black/20 border border-transparent focus:border-gold focus:bg-white dark:focus:bg-white/10 text-charcoal dark:text-white transition-all rounded-md outline-none" placeholder="e.g. Chittagong" 
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-subheading">Venue Name</label>
                        <div className="relative">
                          <Home size={18} className="absolute top-3 left-3 text-gray-400" />
                          <input 
                            required name="venueName" value={formData.venueName} onChange={handleChange} 
                            className="w-full pl-10 pr-4 py-3 bg-surface dark:bg-black/20 border border-transparent focus:border-gold focus:bg-white dark:focus:bg-white/10 text-charcoal dark:text-white transition-all rounded-md outline-none" placeholder="e.g. Radisson Blu" 
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-serif font-bold mb-4 text-charcoal dark:text-white">Preferences</h3>
                    
                    {/* Hidden inputs to ensure FormData captures all fields from previous steps */}
                    <input type="hidden" name="name" value={formData.name} />
                    <input type="hidden" name="coupleName" value={formData.coupleName} />
                    <input type="hidden" name="email" value={formData.email} />
                    <input type="hidden" name="phone" value={formData.phone} />
                    <input type="hidden" name="eventDate" value={formData.eventDate} />
                    <input type="hidden" name="city" value={formData.city} />
                    <input type="hidden" name="venueName" value={formData.venueName} />
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-subheading">Interested Package</label>
                        <div className="relative">
                          <Gift size={18} className="absolute top-3 left-3 text-gray-400" />
                          <select 
                             name="package" value={formData.package} onChange={handlePackageChange} 
                             className="w-full pl-10 pr-4 py-3 bg-surface dark:bg-black/20 border border-transparent focus:border-gold focus:bg-white dark:focus:bg-white/10 text-charcoal dark:text-white transition-all rounded-md outline-none appearance-none"
                          >
                             {PACKAGES.map(pkg => <option key={pkg.id} value={pkg.id} className="bg-white dark:bg-charcoal text-charcoal dark:text-white">{pkg.title}</option>)}
                             <option value="custom" className="bg-white dark:bg-charcoal text-charcoal dark:text-white">Custom Package</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-subheading">Estimated Budget</label>
                        <div className="relative">
                          <DollarSign size={18} className="absolute top-3 left-3 text-gray-400" />
                          <input
                            type="text"
                            name="budget" 
                            value={formData.budget} 
                            onChange={handleChange} 
                            className="w-full pl-10 pr-4 py-3 bg-surface dark:bg-black/20 border border-transparent focus:border-gold focus:bg-white dark:focus:bg-white/10 text-charcoal dark:text-white transition-all rounded-md outline-none"
                            placeholder="BDT 20,000"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-subheading">Tell us your story</label>
                        <textarea 
                          name="story" value={formData.story} onChange={handleChange} rows={4}
                          className="w-full px-4 py-3 bg-surface dark:bg-black/20 border border-transparent focus:border-gold focus:bg-white dark:focus:bg-white/10 text-charcoal dark:text-white transition-all rounded-md outline-none" placeholder="How did you meet? What is the vibe of your wedding?" 
                        />
                      </div>
                      <div className="flex items-start gap-2 pt-2">
                        <input type="checkbox" required className="mt-1 accent-gold" />
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-sans">I agree to the privacy policy and allow NIKAH to store my data for communication purposes.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              </div>

              <div className="flex justify-between mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                {currentStep > 1 ? (
                  <button type="button" onClick={handlePrev} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-charcoal dark:hover:text-white px-4 py-2 font-sans">Back</button>
                ) : <div></div>}
                
                {currentStep < 3 ? (
                  /* Using type="submit" triggers HTML5 validation for required fields */
                  <Button type="submit">Next Step</Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                  </Button>
                )}
              </div>
            </form>
          </div>
        </Section>

      </div>
    </div>
  );
};

export default Contact;
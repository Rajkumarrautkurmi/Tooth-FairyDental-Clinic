import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  PhoneCall, 
  Menu, 
  X, 
  ShieldCheck, 
  Star, 
  Smile, 
  Wand2, 
  Heart, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ArrowRight,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NavItem = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
  >
    {children}
  </a>
);

const ServiceCard = ({ icon: Icon, title, description, items, colorClass }: { 
  icon: any; 
  title: string; 
  description: string; 
  items: string[];
  colorClass: string;
}) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-${colorClass}-200 transition-colors`}
  >
    <div className={`w-12 h-12 bg-${colorClass}-100 text-${colorClass}-600 rounded-xl flex items-center justify-center mb-6`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-4">{title}</h3>
    <p className="text-sm text-slate-500 mb-6">{description}</p>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
          <CheckCircle2 size={16} className={`text-${colorClass}-500`} />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 cursor-pointer font-medium text-white hover:text-blue-400 transition-colors text-left"
      >
        {question}
        <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-sm text-slate-400">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-blue-50 text-blue-600 p-2 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Stethoscope size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 tracking-tight leading-none text-lg">Tooth Fairy</span>
              <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">Dental Clinic</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">Meet Dr Sharma</NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#booking">Booking</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:9876543210" className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-lg active:scale-95">
              <PhoneCall size={18} />
              <span>987 654 3210</span>
            </a>
            <button onClick={toggleMenu} className="md:hidden p-2 text-slate-600 hover:text-blue-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 top-full px-6 py-6 shadow-xl"
            >
              <div className="flex flex-col gap-4">
                <NavItem href="#home" onClick={toggleMenu}>Home</NavItem>
                <NavItem href="#about" onClick={toggleMenu}>About</NavItem>
                <NavItem href="#services" onClick={toggleMenu}>Services</NavItem>
                <NavItem href="#booking" onClick={toggleMenu}>Booking</NavItem>
                <NavItem href="#contact" onClick={toggleMenu}>Contact</NavItem>
                <a href="tel:9876543210" className="text-center w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-sm mt-2">
                  Call Now
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-center flex items-center justify-center gap-2 w-full bg-emerald-500 text-white py-3 rounded-lg font-medium text-sm mt-1 hover:bg-emerald-600 transition-colors">
                  <MessageCircle size={18} />
                  Book on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Accepting New Patients
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
              Dentist in Sivaram <br />
              <span className="text-blue-600">Dr Sharma Dental Clinic</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Changing lives… one smile at a time. Experience anxiety-free, professional dental care tailored for your whole family.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <a href="#booking" className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-blue-700 transition-all hover:shadow-blue-200 hover:shadow-xl active:scale-95">
                <PhoneCall size={20} />
                Book Now
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-emerald-600 transition-all hover:shadow-emerald-200 hover:shadow-xl active:scale-95">
                <MessageCircle size={20} />
                Book on WhatsApp
              </a>
              <a href="#contact" className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95">
                Contact Us
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 bg-white aspect-[4/3] flex items-center justify-center border border-slate-100 group">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Friendly Dentist Layout" 
                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="mt-[-60px] relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: ShieldCheck, label: "Oral Hygiene", color: "blue" },
              { icon: Star, label: "Whitening", color: "rose" },
              { icon: Smile, label: "Paediatric", color: "emerald" },
              { icon: Wand2, label: "Root Canal", color: "purple" },
            ].map((service, idx) => (
              <motion.a 
                key={idx}
                href="#services" 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 transition-all duration-300 group flex flex-col items-center text-center gap-3"
              >
                <div className={`w-12 h-12 rounded-full bg-${service.color}-50 text-${service.color}-600 flex items-center justify-center group-hover:bg-${service.color}-600 group-hover:text-white transition-colors`}>
                  <service.icon size={24} />
                </div>
                <span className="text-sm font-semibold text-slate-700">{service.label}</span>
              </motion.a>
            ))}
            <motion.a 
              href="#booking" 
              whileHover={{ y: -5 }}
              className="bg-slate-900 p-6 rounded-2xl shadow-lg shadow-slate-900/20 border border-slate-800 transition-all duration-300 group flex flex-col items-center text-center gap-3 col-span-2 md:col-span-1"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors">
                <Clock size={24} />
              </div>
              <span className="text-sm font-semibold text-white">Book Now</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Meet Dr Sharma */}
      <section className="bg-slate-50 pt-32 pb-24" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl"></div>
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd72c7d3-945a-4c3f-a29d-d988e4ef2aef_800w.png" 
                alt="Doctor Consultation" 
                className="relative rounded-2xl shadow-xl border border-white object-cover w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="text-yellow-500" fill="currentColor" />
                  <span className="font-semibold text-slate-900">10+ Years</span>
                </div>
                <p className="text-xs text-slate-500">Dedicated practice providing excellence in patient care.</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-blue-600"></span>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Meet Dr Sharma</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Dr Sharma has been in practice for over 10 years. She ensures all patients feel welcomed and consistently strives for excellence in patient care during dental treatments.
                </p>
                <p>
                  She holds a Bachelor of Dental Science (BDS) and is dedicated to preventative dentistry. She is known for her caring, comfortable personality that helps patients feel at ease.
                </p>
                <p className="font-medium text-slate-800">
                  At the Tooth Fairy Dental Clinic, we focus on ensuring your comfort while providing expert dental services.
                </p>
              </div>
              <div className="pt-4">
                <a href="#booking" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 transition-colors">
                  Book an appointment <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <Heart size={48} className="mx-auto opacity-80" />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Mission</h2>
          <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90">
            "Our mission is to provide every patient with an enjoyable experience that is stress-free, anxiety-free, and pain-free."
          </p>
          <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
          <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Tooth Fairy Dental Clinic is a modern dental practice fitted with the latest dental technology and expert dentists, allowing us to provide a complete range of dental services — from general dentistry to complex dental surgery and cosmetic dentistry.
          </p>
        </div>
      </section>

      {/* Services Detailed */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">What we do</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Services in Brief</h2>
            <p className="text-slate-500">Comprehensive dental care for the whole family under one roof.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Stethoscope}
              title="General Dentistry"
              description="Diagnosis, prevention, and treatment of oral health conditions including routine checkups and scaling."
              items={["Checkup & Clean", "Dental Fillings", "Gum Disease", "Toothache Relief"]}
              colorClass="blue"
            />
            <ServiceCard 
              icon={Wand2}
              title="Cosmetic Dentistry"
              description="Enhancing your smile through aesthetic procedures and modern technology."
              items={["Teeth Whitening", "Invisalign", "Porcelain Veneers", "Implants & Bridges"]}
              colorClass="rose"
            />
            <ServiceCard 
              icon={Smile}
              title="Children’s Dental"
              description="Gentle care for little ones. It is good to bring your children when you come in for your regular evaluation."
              items={["Check-ups & X-rays", "Fissure Sealing", "Preventative Care", "Orthodontics"]}
              colorClass="emerald"
            />
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Restorative Dentistry", "Emergency Dental Care", "Senior Dental Care", "Dentures"].map((tag, idx) => (
              <span key={idx} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Book an Appointment Section */}
      <section id="booking" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16 text-white space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Easy Booking
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                Ready to transform your smile?
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Book your appointment today via WhatsApp. Fill in the details and we'll confirm your slot instantly.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-blue-200" />
                  </div>
                  <span className="text-blue-50 font-medium">Instant Confirmation</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-blue-200" />
                  </div>
                  <span className="text-blue-50 font-medium">Expert Consultation</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-blue-200" />
                  </div>
                  <span className="text-blue-50 font-medium">Pain-Free Experience</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-slate-50 p-12 lg:p-16">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const service = formData.get('service');
                  const date = formData.get('date');
                  const time = formData.get('time');
                  const message = `Hello Dr. Sharma, I would like to book an appointment.%0A%0AName: ${name}%0AService: ${service}%0APreferred Date: ${date}%0APreferred Time: ${time}`;
                  window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                    <input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service</label>
                    <select required name="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white">
                      <option value="General Checkup">General Checkup</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Children's Dental">Children's Dental</option>
                      <option value="Root Canal">Root Canal</option>
                      <option value="Emergency">Emergency</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Preferred Date</label>
                    <input required name="date" type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Preferred Time</label>
                    <input required name="time" type="time" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-emerald-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
                  <MessageCircle size={20} />
                  Book via WhatsApp
                </button>
                <p className="text-center text-xs text-slate-400">
                  By clicking, you will be redirected to WhatsApp to confirm your booking.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Regular Visits Matter */}
      <section className="py-24 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Why Regular Dental Visits Matter</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                To keep your teeth and gums healthy, it is important to schedule regular checkups and dental cleanings.
              </p>
              <div className="pl-6 border-l-2 border-blue-500">
                <p className="text-white italic">
                  Adult patients should visit the dentist at least once every six months. Regular cleanings remove plaque and stains, reducing the risk of tooth decay and gum disease.
                </p>
              </div>
              <p>
                If you experience sudden pain in your teeth or gums, book an appointment immediately for proper evaluation and treatment.
              </p>
            </div>
            <a href="tel:9876543210" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-blue-500 transition-all">
              <PhoneCall size={20} />
              Call Now – 9876543210
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <h3 className="text-white font-semibold text-xl mb-6 flex items-center gap-2">
                <Smile className="text-blue-400" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <FAQItem 
                  question="Why do regular dental visits matter?"
                  answer="Regular visits help detect issues early, prevent gum disease, and maintain overall oral hygiene through professional cleaning."
                />
                <FAQItem 
                  question="How can I prevent cavities?"
                  answer="Brush twice daily, floss regularly, reduce sugar intake, and ensure you attend your 6-monthly checkups."
                />
                <FAQItem 
                  question="Why does the dentist take X-rays?"
                  answer="X-rays allow us to see problems between teeth and under the gums that aren't visible to the naked eye."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class="py-24 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Get in touch</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mt-2">Visit Our Clinic</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-8 md:col-span-1">
              <div>
                <div className="flex items-center gap-3 mb-2 text-blue-600">
                  <MapPin size={24} />
                  <h3 className="font-semibold text-slate-900">Address</h3>
                </div>
                <address className="not-italic text-slate-600 text-sm leading-relaxed pl-9">
                  Shop 122 Tramshed Shopping Centre<br />
                  Cnr Francis Baard & Lilian Ngoyi St<br />
                  Sivaram
                </address>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2 text-blue-600">
                  <PhoneCall size={24} />
                  <h3 className="font-semibold text-slate-900">Phone Numbers</h3>
                </div>
                <div className="flex flex-col gap-1 pl-9">
                  <a href="tel:9876543210" className="text-slate-600 hover:text-blue-600 text-sm">987 654 3210</a>
                  <a href="tel:+27615830032" className="text-slate-600 hover:text-blue-600 text-sm">+27 61 583 0032</a>
                </div>
              </div>
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:9876543210" className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Call to Book
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">
                  <MessageCircle size={18} />
                  Book on WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 md:col-span-2">
              <div className="flex items-center gap-3 mb-6 text-blue-600">
                <Clock size={24} />
                <h3 className="font-semibold text-slate-900">Operating Hours</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  { day: "Monday", time: "8am – 5pm" },
                  { day: "Tuesday", time: "8am – 5pm" },
                  { day: "Wednesday", time: "8am – 5pm" },
                  { day: "Thursday", time: "8am – 5pm" },
                  { day: "Friday", time: "8am – 5pm" },
                  { day: "Saturday", time: "9am – 1pm" },
                  { day: "Sunday", time: "Closed", closed: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-50">
                    <span className="text-sm font-medium text-slate-700">{item.day}</span>
                    <span className={`text-sm ${item.closed ? 'text-rose-500 font-medium' : 'text-slate-500'}`}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-64 sm:h-80 relative bg-slate-200 group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5029649534636!2d77.2062638150821!3d28.614691482424683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd04114660bb%3A0x1d368e55e0c8b323!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1633083602123!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              className="absolute inset-0 grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1 space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Stethoscope size={24} />
                <span className="font-semibold text-slate-900 tracking-tight">Tooth Fairy Dental</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Modern, pain-free dental care for the whole family in the heart of Sivaram.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 text-sm">Navigation</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 text-sm">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>Shop 122 Tramshed Shopping Centre</li>
                <li>Sivaram</li>
                <li><a href="tel:9876543210" className="hover:text-blue-600 transition-colors">987 654 3210</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 text-sm">Social</h4>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-blue-600 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 text-center">
            <p className="text-xs text-slate-400">© 2026 Dentist in Sivaram Dr Sharma Dental Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer" 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Book on WhatsApp
          <span className="absolute top-1/2 -mt-1 -right-1 border-4 border-transparent border-l-slate-900"></span>
        </span>
      </motion.a>
    </div>
  );
}

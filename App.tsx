
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_NAME, TAGLINE, CONTACT_INFO, SERVICES } from './constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-orange-600 p-2 rounded-lg">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className={`heading-font text-2xl font-bold tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            YASHIKA <span className="text-orange-500">ENTERPRISES</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'Location', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-semibold hover:text-orange-500 transition-colors ${isScrolled ? 'text-blue-900' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105"
          >
            <MessageCircle size={18} />
            Inquire Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} className={isScrolled ? 'text-blue-900' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-blue-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col p-6 gap-4">
            {['Home', 'Services', 'Location', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-blue-900 text-lg font-bold border-b border-gray-100 pb-2"
              >
                {item}
              </a>
            ))}
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="bg-green-600 text-white p-4 rounded-xl flex justify-center items-center gap-2 font-bold"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover"
          alt="Construction Site"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 bg-orange-600/20 border border-orange-500/30 rounded-full mb-6">
            <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Your Trusted Partner in Construction</span>
          </div>
          <h1 className="heading-font text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight">
            Building Dreams with <span className="text-orange-500 underline decoration-4 underline-offset-8">Strength</span>
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl font-light">
            Providing high-quality Saria, Angles, and Channels at reasonable prices in Gorakhpur. Professional construction services for your dream project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px]"
            >
              Get a Free Quote <ArrowRight size={20} />
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={20} className="text-green-400" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Badge */}
      <div className="hidden lg:flex absolute bottom-12 right-12 bg-white p-6 rounded-2xl shadow-2xl items-center gap-4 animate-bounce-slow">
        <div className="bg-blue-100 p-3 rounded-full">
          <CheckCircle2 className="text-blue-600 w-8 h-8" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Certified Materials</p>
          <p className="text-xl font-extrabold text-blue-900">ISI Standard Quality</p>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-blue-900 mb-4 uppercase">Our Expertise</h2>
          <div className="h-1.5 w-24 bg-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">We provide end-to-end solutions for all your hardware and building construction needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-2xl text-orange-600 shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="heading-font text-2xl font-bold text-blue-900 mb-3 uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all">
                  Learn More <ChevronRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 bg-blue-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-font text-4xl md:text-5xl font-bold mb-8 uppercase">Visit Our <span className="text-orange-500">Showroom</span></h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Located strategically in Gorakhpur to serve the entire region. Find us easily near the Gulharia Thana.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="bg-orange-600/20 p-4 rounded-2xl self-start">
                  <MapPin className="text-orange-500 w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 uppercase tracking-wider">Address</h4>
                  <p className="text-blue-100 opacity-80">{CONTACT_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="bg-orange-600/20 p-4 rounded-2xl self-start">
                  <CheckCircle2 className="text-orange-500 w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 uppercase tracking-wider">Landmark</h4>
                  <p className="text-blue-100 opacity-80 font-medium">{CONTACT_INFO.landmark}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
               <a 
                href="https://www.google.com/maps/search/Gulharia+Thana+Gorakhpur"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-950 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all"
              >
                Open in Maps <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px] border-4 border-white/10">
              {/* Actual Map Embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.469085876425!2d83.3986705!3d26.837016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991444464c00001%3A0xc47e3076c8e31742!2sGulhariya%20Police%20Station!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100">
          <div className="lg:w-1/3 bg-orange-600 p-12 text-white">
            <h2 className="heading-font text-4xl font-bold mb-8 uppercase">Let's Talk Business</h2>
            <p className="text-orange-100 mb-12 text-lg">Contact us for wholesale pricing, delivery details, or project consultation.</p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white group-hover:text-orange-600 transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-orange-200">Call Us Anytime</p>
                  <p className="text-xl font-bold">{CONTACT_INFO.phone1}</p>
                  <p className="text-xl font-bold">{CONTACT_INFO.phone2}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white group-hover:text-orange-600 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-orange-200">Email Support</p>
                  <p className="text-xl font-bold">contact@yashika.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/20">
              <p className="text-sm font-bold uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 cursor-pointer"></div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 p-12 md:p-16">
            <h3 className="heading-font text-3xl font-bold text-blue-950 mb-8 uppercase tracking-tight">Quick Inquiry Form</h3>
            <form className="grid md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-gray-400 tracking-wider">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-gray-400 tracking-wider">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase font-bold text-gray-400 tracking-wider">Select Service</label>
                <select className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none appearance-none cursor-pointer">
                  <option>Saria Supply</option>
                  <option>Angles & Channels</option>
                  <option>Building Construction</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase font-bold text-gray-400 tracking-wider">Your Message</label>
                <textarea rows={4} placeholder="I am looking for 10 tons of 12mm Saria..." className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none resize-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-blue-950 text-white w-full py-5 rounded-2xl font-bold text-lg hover:bg-blue-900 transition-all shadow-xl hover:shadow-2xl flex justify-center items-center gap-2">
                  Send Message Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-950 p-2 rounded-lg">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className="heading-font text-2xl font-bold text-blue-950 tracking-tight">
                YASHIKA <span className="text-orange-500">ENTERPRISES</span>
              </span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              Gorakhpur's leading supplier of structural hardware and expert construction services. Committed to quality, transparency, and timely delivery.
            </p>
          </div>
          
          <div>
            <h4 className="heading-font text-lg font-bold text-blue-950 mb-6 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Location', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-orange-600 transition-colors flex items-center gap-2">
                    <ChevronRight size={14} /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="heading-font text-lg font-bold text-blue-950 mb-6 uppercase tracking-widest">Business Hours</h4>
            <ul className="space-y-2 text-gray-500">
              <li className="flex justify-between">
                <span>Mon - Sat:</span>
                <span className="font-bold text-blue-950">9 AM - 8 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-bold text-orange-600">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© 2024 Yashika Enterprises. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-950 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-950 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp CTA */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all flex items-center justify-center animate-bounce-slow"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </footer>
  );
};

function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Services />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

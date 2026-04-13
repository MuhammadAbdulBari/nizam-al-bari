// components/Footer.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, 
  Instagram, Send, ChevronRight, Clock, Award, Truck, Shield,
  ArrowUp, MessageCircle
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    'Bulk Supply',
    'Custom Sourcing',
    'Nationwide Delivery',
    'Technical Support',
    'Project Consultation',
    'After Sales Service'
  ];

  const workingHours = [
    { day: 'Mon - Fri', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'By Appointment' },
  ];

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: MessageCircle, href: 'https://wa.me/923009246477', label: 'WhatsApp', color: 'hover:bg-green-600' },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 pt-12 sm:pt-20 pb-8 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10 px-4">

          {/* ── Main Grid ─────────────────────────────────────────────── */}
          {/* Mobile: 2-col (company full-width, then 2 link cols, contact full-width)
              Desktop: 4-col equal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

            {/* 1. Company Info — full width on mobile */}
            <div className="sm:col-span-2 lg:col-span-1 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <Building2 className="h-8 w-8 sm:h-9 sm:w-9 text-gold relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Nizam Al Bari
                  </h3>
                  <p className="text-xs text-gold font-medium tracking-wide">Building Material Suppliers</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-4 text-gray-400">
                Your trusted partner in electromechanical building materials across Pakistan. 
                Quality, reliability, and excellence since establishment.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {[
                  { icon: Award, label: 'ISO Certified' },
                  { icon: Shield, label: 'Quality Assured' },
                  { icon: Truck, label: 'Fast Delivery' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1 text-xs text-gray-400">
                    <item.icon size={12} className="text-gold" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Social icons — shown here on mobile for prominence */}
              <div className="flex gap-2.5 mt-5 lg:hidden">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800 p-2 rounded-full text-gray-400 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* 2. Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 relative inline-block">
                Quick Links
                <div className="absolute -bottom-1.5 left-0 w-10 h-0.5 bg-gold rounded-full"></div>
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.path} 
                      className="group flex items-center gap-1.5 text-gray-400 hover:text-gold transition-all duration-300 hover:translate-x-1 text-sm sm:text-base"
                    >
                      <ChevronRight size={13} className="opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Services */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 relative inline-block">
                Our Services
                <div className="absolute -bottom-1.5 left-0 w-10 h-0.5 bg-gold rounded-full"></div>
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <Link 
                      to="/services" 
                      className="group flex items-center gap-1.5 text-gray-400 hover:text-gold transition-all duration-300 hover:translate-x-1 text-sm sm:text-base"
                    >
                      <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0"></div>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Contact Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 relative inline-block">
                Contact Info
                <div className="absolute -bottom-1.5 left-0 w-10 h-0.5 bg-gold rounded-full"></div>
              </h4>

              {/* Contact items — 2-col grid on mobile for brevity */}
              <ul className="space-y-3 mb-5">
                <li className="flex items-start gap-3 group">
                  <Phone size={15} className="text-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-xs text-gray-500">Pakistan</p>
                    <p className="text-white text-sm">+92 333 2688848</p>
                    <p className="text-white text-sm">+92 300 9246477</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <Phone size={15} className="text-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-xs text-gray-500">UAE</p>
                    <p className="text-white text-sm">+971 50 243 8568</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <Mail size={15} className="text-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a href="mailto:nizamabdulbari13@gmail.com" className="text-white hover:text-gold transition-colors text-sm break-all">
                    nizamabdulbari13@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <MapPin size={15} className="text-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white text-sm">Karachi, Sindh, Pakistan</span>
                </li>
              </ul>

              {/* Working Hours */}
              <div className="p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/5">
                <div className="flex items-center gap-2 mb-2.5">
                  <Clock size={13} className="text-gold shrink-0" />
                  <span className="text-xs font-semibold text-white">Working Hours</span>
                </div>
                <div className="space-y-1.5">
                  {workingHours.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-xs text-gray-400 gap-2">
                      <span className="shrink-0">{item.day}</span>
                      <span className="text-right">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Newsletter ─────────────────────────────────────────────── */}
          <div className="border-t border-gray-800 pt-7 sm:pt-8 mb-7 sm:mb-8">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 items-center">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1">Subscribe to Our Newsletter</h4>
                <p className="text-xs sm:text-sm text-gray-400">Get latest updates on new products and special offers</p>
              </div>
              <div>
                <form onSubmit={handleSubscribe} className="flex gap-2 sm:gap-3">
                  <div className="flex-1 relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-9 pr-3 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 text-white placeholder-gray-500 text-sm"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="group bg-gradient-to-r from-gold to-yellow-500 text-gray-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 flex items-center gap-1.5 shrink-0 text-sm"
                  >
                    <span className="hidden sm:inline">Subscribe</span>
                    <Send size={15} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                  </button>
                </form>
                {subscribed && (
                  <p className="text-green-400 text-xs mt-2 animate-fade-in">✓ Thank you for subscribing!</p>
                )}
              </div>
            </div>
          </div>

          {/* ── Bottom Bar ─────────────────────────────────────────────── */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

              {/* Social icons — desktop only (mobile shown in company section above) */}
              <div className="hidden lg:flex space-x-3">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800 p-2 rounded-full text-gray-400 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon size={17} />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <p className="text-xs sm:text-sm text-gray-500 text-center order-last sm:order-none">
                © {new Date().getFullYear()} Nizam Al Bari Building Material Suppliers. All rights reserved.
              </p>

              {/* Legal links */}
              <div className="flex items-center gap-3 sm:gap-4">
                <a href="/privacy-policy" className="text-xs text-gray-500 hover:text-gold transition-colors">
  Privacy Policy
</a>
                <span className="text-gray-700 text-xs">|</span>
                <a href="/terms" className="text-xs text-gray-500 hover:text-gold transition-colors">
  Terms of Service
</a>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* ── Scroll-to-Top Button ─────────────────────────────────────── */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 bg-gold text-gray-900 p-2.5 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
          showScrollTop ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} className="sm:w-5 sm:h-5" />
      </button>

      {/* ── WhatsApp Float Button ────────────────────────────────────── */}
      <a
        href="https://wa.me/923009246477"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-5 sm:bottom-8 sm:left-8 z-50 bg-green-500 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
        style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} className="sm:w-6 sm:h-6" />
      </a>
    </>
  );
};

export default Footer;

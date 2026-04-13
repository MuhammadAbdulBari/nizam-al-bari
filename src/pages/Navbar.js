// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Settings, Building } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    {
      label: 'Products',
      path: '/products',
      dropdown: [
        { path: '/products#electrical', label: 'Electrical Materials' },
        { path: '/products#hvac', label: 'HVAC Systems' },
        { path: '/products#plumbing', label: 'Plumbing' },
        { path: '/products#solar', label: 'Solar Solutions' },
      ]
    },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-green-600 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-5'
        }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
            >
              {/* Combined Building + Gear Icon */}
              <div className="relative">
                <div className="relative">
                  {/* Building icon as base */}
                  <Building className="h-8 w-8 md:h-9 md:w-9 text-green-800 transition-all duration-500 group-hover:scale-110" />
                  {/* Gear icon overlay */}
                  <div className="absolute -bottom-1 -right-2 bg-white rounded-full p-0.5 shadow-md">
                    <Settings 
                      size={14} 
                      className="text-gold transition-all duration-500 group-hover:rotate-90" 
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
              
              {/* Logo Text with Classic Styling */}
              <div className="border-l-2 border-gold pl-3">
                <h1 className="font-serif text-lg md:text-xl font-bold tracking-tight">
                  <span className="text-gray-900">Nizam Al</span>
                  <span className="text-green-800"> Bari</span>
                </h1>
                <p className="text-[11px] font-semibold tracking-wider uppercase text-gold">
                  Building Material Suppliers
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                >
                  {link.dropdown ? (
                    <div className="relative">
                      <button
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 ${location.pathname === link.path
                            ? 'text-green-800 bg-green-50'
                            : 'text-gray-700 hover:text-green-800 hover:bg-green-50'
                          }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {activeDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up">
                          <div className="py-2">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block px-5 py-3 text-gray-700 hover:bg-green-50 hover:text-green-800 transition-all duration-200"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${location.pathname === link.path
                          ? 'text-green-800 bg-green-50'
                          : 'text-gray-700 hover:text-green-800 hover:bg-green-50'
                        }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-gradient-to-r from-green-800 to-green-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5 group"
              >
                Get Quote
                <Zap size={16} className="transition-transform duration-300 group-hover:rotate-12" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 rounded-full bg-gray-100 hover:bg-green-50 transition-all duration-300 flex items-center justify-center"
            >
              {isOpen ?
                <X size={22} className="text-green-800" /> :
                <Menu size={22} className="text-gray-700" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-x-0 top-[73px] bg-white shadow-2xl transition-all duration-300 transform overflow-y-auto max-h-[calc(100vh-73px)] ${isOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
          }`}>
          <div className="flex flex-col py-4 px-4 space-y-1">
            {navLinks.map((link) => (
              <React.Fragment key={link.label}>
                {link.dropdown ? (
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-800 px-3 py-3 flex items-center justify-between border-b border-gray-100">
                      {link.label}
                      <ChevronDown size={18} />
                    </div>
                    <div className="pl-4 space-y-1 ml-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-gray-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-all duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-3 rounded-lg font-medium transition-all duration-300 ${location.pathname === link.path
                        ? 'text-green-800 bg-green-50'
                        : 'text-gray-700 hover:text-green-800 hover:bg-green-50'
                      }`}
                  >
                    {link.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-gradient-to-r from-green-800 to-green-700 text-white text-center py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
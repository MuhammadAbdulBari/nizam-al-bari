// pages/Home.js
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Zap, Droplets, Wind, Shield, SunMedium, Wrench,
  Truck, Clock, Award, TrendingUp, Sparkles, CheckCircle,
  Star, Users, Building2, Globe, Phone, MessageCircle,
  Play, ChevronRight, Package, Rocket
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const categories = [
    { icon: Zap, name: 'Electrical', color: 'from-yellow-500 to-orange-500', description: 'Wires, cables, DBs, switches, lighting', products: '500+', gradient: 'from-yellow-400 to-orange-500' },
    { icon: Wind, name: 'HVAC', color: 'from-blue-500 to-cyan-500', description: 'AC units, ducts, fans, pumps', products: '300+', gradient: 'from-blue-400 to-cyan-500' },
    { icon: Droplets, name: 'Plumbing', color: 'from-cyan-500 to-blue-500', description: 'Pipes, fittings, valves, sanitary', products: '400+', gradient: 'from-cyan-400 to-blue-500' },
    { icon: Shield, name: 'Fire Fighting', color: 'from-red-500 to-orange-500', description: 'Complete fire safety systems', products: '200+', gradient: 'from-red-400 to-orange-500' },
    { icon: SunMedium, name: 'Solar', color: 'from-amber-500 to-yellow-500', description: 'Panels, inverters, batteries', products: '150+', gradient: 'from-amber-400 to-yellow-500' },
    { icon: Wrench, name: 'Hardware', color: 'from-gray-500 to-gray-700', description: 'Tools, fasteners, installation materials', products: '1000+', gradient: 'from-gray-400 to-gray-600' },
  ];

  const whyChoose = [
    { icon: Award, title: 'Premium Quality', description: 'ISO certified from trusted manufacturers', stat: '100%', statLabel: 'Guaranteed' },
    { icon: TrendingUp, title: 'Bulk Supply', description: 'Specialized in large-scale project procurement', stat: '500+', statLabel: 'Projects' },
    { icon: Truck, title: 'Nationwide Delivery', description: 'Fast & secure delivery across Pakistan', stat: '50+', statLabel: 'Cities' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock consultation and service', stat: '24/7', statLabel: 'Available' },
  ];

  const testimonials = [
    { name: 'Ahmed Raza', company: 'Raza Constructions', text: 'Nizam Al Bari has been our exclusive MEP supplier for 5+ years. Their quality and reliability are unmatched.', rating: 5, initials: 'AR', color: 'bg-green-100 text-green-800' },
    { name: 'Fatima Khan', company: 'Khan Developers', text: 'The team understands our requirements perfectly. Always on time with premium materials.', rating: 5, initials: 'FK', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Usman Malik', company: 'Malik Engineering', text: 'Best MEP supplier in Pakistan! Their technical support and product quality are exceptional.', rating: 5, initials: 'UM', color: 'bg-blue-100 text-blue-800' },
  ];

  const stats = [
    { icon: Users, value: '5000', label: 'Happy Clients', suffix: '+' },
    { icon: Building2, value: '1000', label: 'Projects Done', suffix: '+' },
    { icon: Package, value: '50', label: 'Brand Partners', suffix: '+' },
    { icon: Globe, value: '50', label: 'Cities Served', suffix: '+' },
  ];

  const Counter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      if (countRef.current) observer.observe(countRef.current);
      return () => observer.disconnect();
    }, [end, duration]);

    return (
      <span ref={countRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold">
        {count}{suffix}
      </span>
    );
  };

  return (
    <div className="overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-gray-900/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-20 py-16 md:py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/20 backdrop-blur-sm rounded-full mb-5">
            <Sparkles className="text-gold w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-gold font-semibold text-xs md:text-sm leading-none">
              Pakistan's Leading MEP Supplier Since 1995
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
                Your Trusted Partner in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">
                  Electromechanical
                </span>{' '}
                Building Materials
              </h1>
              <p className="text-base md:text-lg text-gray-200 mb-7 leading-relaxed max-w-xl">
                Pakistan's premier supplier of complete MEP solutions — from electrical components to HVAC systems,
                we deliver excellence with unmatched quality and reliability.
              </p>

              {/* CTA Buttons — full-width on mobile */}
              <div className="flex flex-col sm:flex-row gap-3 mb-7">
                <Link
                  to="/contact"
                  className="group bg-gold text-green-900 px-7 py-3.5 rounded-full font-semibold text-center hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Get a Quote
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/products"
                  className="group border-2 border-white text-white px-7 py-3.5 rounded-full font-semibold text-center hover:bg-white hover:text-green-900 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Explore Products
                  <ChevronRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-r from-gold to-yellow-500 border-2 border-white flex items-center justify-center text-green-900 font-bold text-xs">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-sm">Trusted by 5,000+ clients</p>
              </div>
            </div>

            {/* Hero image — hidden on mobile, shown on lg+ */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3"
                  alt="Building Materials"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">250+ Projects in Progress</span>
                  </div>
                  <button className="text-gold hover:text-green-800 transition-colors">
                    <Play size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile hero image card */}
          <div className="mt-8 lg:hidden rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3"
              alt="Building Materials"
              className="w-full h-48 object-cover"
            />
            <div className="bg-white/95 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-800">250+ Projects in Progress</span>
              </div>
              <Play size={18} className="text-gold" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ── Stats ── */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group animate-on-scroll" id={`stat-${idx}`}>
                <div className="inline-flex p-2.5 md:p-3 bg-green-100 rounded-full mb-2.5 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-green-800 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <Counter end={parseInt(stat.value)} suffix={stat.suffix} />
                <p className="text-gray-500 text-xs md:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="animate-on-scroll" id="about-text">
              <div className="inline-block px-3 py-1 bg-green-100 rounded-full mb-4">
                <span className="text-green-800 font-semibold text-sm">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                Building Pakistan's <span className="text-gold">Future</span>
              </h2>
              <div className="w-16 h-1 bg-gold mb-5" />
              <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                Nizam Al Bari Building Material Suppliers stands as a cornerstone in Pakistan's construction industry,
                providing comprehensive electromechanical solutions that power the nation's development.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                With decades of expertise, we bridge the gap between quality manufacturing and project excellence,
                serving contractors, builders, and engineers with integrity and professionalism.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-green-800 font-semibold group text-sm md:text-base">
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative animate-on-scroll" id="about-image">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4">
                  <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3"
                      alt="Warehouse"
                      className="w-full h-36 sm:h-44 md:h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-xl md:rounded-2xl p-4 text-white text-center">
                    <p className="text-xl md:text-2xl font-bold">25+</p>
                    <p className="text-xs md:text-sm opacity-90">Years of Excellence</p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                  <div className="bg-gradient-to-r from-gold to-yellow-500 rounded-xl md:rounded-2xl p-4 text-green-900 text-center">
                    <p className="text-xl md:text-2xl font-bold">500+</p>
                    <p className="text-xs md:text-sm">Projects Completed</p>
                  </div>
                  <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3"
                      alt="Team"
                      className="w-full h-36 sm:h-44 md:h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block px-3 py-1 bg-green-100 rounded-full mb-4">
              <span className="text-green-800 font-semibold text-sm">Our Range</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Complete MEP <span className="text-gold">Solutions</span>
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-5" />
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
              Everything you need for your construction project, all under one roof
            </p>
          </div>

          {/* Mobile: 2-col compact cards; md+: 2-col; lg: 3-col */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="group animate-on-scroll"
                id={`category-${idx}`}
                style={{
                  opacity: isVisible[`category-${idx}`] ? 1 : 0,
                  transform: isVisible[`category-${idx}`] ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.5s ease-out ${idx * 0.08}s`,
                }}
              >
                <div className="relative bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5 border border-gray-100 h-full">
                  {/* Icon */}
                  <div className={`bg-gradient-to-r ${cat.gradient} w-11 h-11 sm:w-13 sm:h-13 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 transform -rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500`}>
                    <cat.icon className="text-white w-5 h-5 md:w-8 md:h-8" />
                  </div>

                  <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{cat.name}</h3>
                  <p className="text-gray-500 text-xs md:text-sm mb-3 leading-snug line-clamp-2">{cat.description}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-400">{cat.products} items</span>
                    <Link
                      to="/products"
                      className="text-gold font-semibold text-xs md:text-sm flex items-center gap-1 group-hover:gap-1.5 transition-all"
                    >
                      View <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-60 h-60 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-500 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <span className="text-gold font-semibold text-sm">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Setting Standards in Excellence</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
            <p className="mt-4 text-gray-300 text-sm md:text-base max-w-xl mx-auto">
              We pride ourselves on delivering excellence in every aspect of our service
            </p>
          </div>

          {/* 2-col on mobile, 4-col on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-1.5 group animate-on-scroll"
                id={`why-${idx}`}
              >
                <div className="inline-flex p-3 md:p-4 bg-gold rounded-xl md:rounded-2xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-green-900 w-5 h-5 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm sm:text-base md:text-xl font-bold mb-1.5 md:mb-2">{item.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-3 leading-snug">{item.description}</p>
                <div className="inline-block px-2.5 py-1 bg-white/10 rounded-full">
                  <span className="text-gold font-bold text-sm md:text-base">{item.stat}</span>
                  <span className="text-xs text-gray-300 ml-1">{item.statLabel}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-green-900 px-7 py-3.5 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5 group text-sm md:text-base"
            >
              Request a Quote
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block px-3 py-1 bg-green-100 rounded-full mb-4">
              <span className="text-green-800 font-semibold text-sm">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              What Our <span className="text-gold">Clients Say</span>
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
            <p className="text-gray-500 mt-4 text-sm md:text-base">Trusted by industry leaders across Pakistan</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 md:p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 animate-on-scroll flex flex-col"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-gold fill-gold w-4 h-4" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 md:mb-6 text-sm md:text-base leading-relaxed flex-1">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  {/* Avatar initials instead of external image (avoids broken img on mobile) */}
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${testimonial.color}`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-r from-green-900 via-green-800 to-green-900">
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 opacity-10 pointer-events-none">
          <svg preserveAspectRatio="none" viewBox="0 0 1440 120" className="w-full h-16 md:h-24 text-white fill-current">
            <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L0,120Z" />
          </svg>
        </div>

        <div className="container-custom relative z-10 text-center text-white px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-5">
            <Rocket className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-semibold">Start Your Project Today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
            Ready to Build Something Great?
          </h2>
          <p className="text-base md:text-xl text-green-100 mb-8 max-w-xl mx-auto">
            Get competitive quotes and expert consultation for your construction needs
          </p>

          {/* CTA buttons — stack on mobile */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8 md:mb-10">
            <Link
              to="/contact"
              className="bg-gold text-green-900 px-7 py-3.5 rounded-full font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 group text-sm md:text-base"
            >
              Contact Now
              <Phone size={17} className="group-hover:rotate-12 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white hover:text-green-900 transition-all flex items-center justify-center gap-2 group text-sm md:text-base"
            >
              Our Services
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/923009246477"
              className="bg-[#25D366] text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 group text-sm md:text-base"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>
          </div>

          {/* Trust badges — wrap on mobile */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs md:text-sm">
            {['Free Consultation', 'Volume Discounts', 'Pan-Pakistan Delivery'].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-gold flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
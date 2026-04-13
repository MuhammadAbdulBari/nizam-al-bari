// pages/About.js
import React, { useEffect, useRef, useState } from 'react';
import {
  Target, Eye, Heart, Users, Building2, Globe, Award,
  TrendingUp, Shield, Clock, Calendar, Star, CheckCircle,
  ArrowRight, MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isVisible, setIsVisible] = useState({});

  const values = [
    { icon: Target, title: 'Our Mission', desc: 'To provide premium electromechanical building materials with unmatched reliability, driving construction excellence across Pakistan.', color: 'from-red-500 to-orange-500' },
    { icon: Eye, title: 'Our Vision', desc: "To become Pakistan's most trusted and comprehensive MEP supply partner, recognized for quality, integrity, and innovation.", color: 'from-blue-500 to-cyan-500' },
    { icon: Heart, title: 'Core Values', desc: 'Integrity, quality excellence, customer-centric approach, and sustainable business practices guide everything we do.', color: 'from-green-500 to-emerald-500' },
  ];

  const stats = [
    { number: '25', suffix: '+', label: 'Years of Excellence', icon: Calendar },
    { number: '500', suffix: '+', label: 'Projects Supplied', icon: Building2 },
    { number: '1000', suffix: '+', label: 'Happy Clients', icon: Users },
    { number: '50', suffix: '+', label: 'Brand Partners', icon: Award },
  ];

  const achievements = [
    { icon: Shield, title: 'ISO Certified', description: 'Quality management certified' },
    { icon: TrendingUp, title: 'Market Leader', description: 'Leading MEP supplier in Pakistan' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock assistance' },
    { icon: Globe, title: 'Nationwide', description: 'Pan-Pakistan operations' },
  ];

  const milestones = [
    { year: '1995', title: 'Company Founded', description: 'Started as a small family enterprise in Karachi' },
    { year: '2005', title: 'Expansion', description: 'Expanded to complete MEP solutions' },
    { year: '2015', title: 'National Presence', description: 'Established nationwide supply network' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as premier MEP supplier' },
  ];

  const team = [
    { name: 'Fayyaz Uddin Rajput', role: 'Founder & CEO', experience: '30+', initials: 'FUR', color: 'bg-green-100 text-green-800' },
    { name: 'Najam Rajput', role: 'Operations Director', experience: '5+ years', initials: 'NR', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Abdul Bari Rajput', role: 'Procurement Head', experience: '2+ years', initials: 'ABR', color: 'bg-blue-100 text-blue-800' },
  ];

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
      <span ref={countRef} className="text-4xl sm:text-5xl md:text-6xl font-bold text-gold">
        {count}{suffix}
      </span>
    );
  };

  return (
    <div className="overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3")',
            filter: 'brightness(0.3)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-gray-900/90" />
        <div className="container-custom relative z-10 text-center px-4 py-16 md:py-20">
          <div className="inline-block px-4 py-1.5 bg-gold/20 backdrop-blur-sm rounded-full mb-5">
            <span className="text-gold font-semibold text-sm">Since 1995</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">
            Building Pakistan's
            <span className="text-gold block mt-1">Future Together</span>
          </h1>
          <p className="text-base md:text-xl text-gray-200 max-w-xl mx-auto">
            Quality electromechanical solutions that power the nation's progress
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 md:h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Story ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text */}
            <div
              className="animate-on-scroll"
              id="story-text"
              style={{
                opacity: isVisible['story-text'] ? 1 : 0,
                transform: isVisible['story-text'] ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              <div className="inline-block px-3 py-1 bg-green-100 rounded-full mb-4">
                <span className="text-green-800 font-semibold text-sm">Our Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                From Humble <span className="text-gold">Beginnings</span>
              </h2>
              <div className="w-16 h-1 bg-gold mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base lg:text-lg">
                Founded in Karachi, Nizam Al Bari Building Material Suppliers began as a family-owned enterprise
                with a vision to revolutionize the construction supply chain in Pakistan. Recognizing the growing
                demand for integrated electromechanical solutions, we evolved into a comprehensive MEP supplier.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Today, we stand as a beacon of trust for contractors, engineers, and developers across the nation.
                Our extensive inventory, strategic partnerships with leading manufacturers, and unwavering commitment
                to quality have made us the preferred choice for projects of all scales.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-r from-green-800 to-green-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm">Trusted by industry leaders across Pakistan</p>
              </div>
            </div>

            {/* Image */}
            <div
              className="relative animate-on-scroll"
              id="story-image"
              style={{
                opacity: isVisible['story-image'] ? 1 : 0,
                transform: isVisible['story-image'] ? 'translateX(0)' : 'translateX(30px)',
                transition: 'all 0.8s ease-out 0.2s',
              }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3"
                  alt="Warehouse"
                  className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 right-3 md:-bottom-6 md:-right-4 bg-white rounded-xl shadow-xl p-3 md:p-4 flex items-center gap-3">
                <div className="bg-gold rounded-full p-1.5 md:p-2 flex-shrink-0">
                  <Star className="text-white w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm md:text-base">4.9/5 Rating</p>
                  <p className="text-xs md:text-sm text-gray-500">From 500+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-60 h-60 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Our Impact in Numbers</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>
          {/* 2-col on mobile, 4-col on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group animate-on-scroll">
                <div className="mb-3 flex justify-center">
                  <div className="bg-white/10 rounded-full p-3 md:p-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-gold" />
                  </div>
                </div>
                <Counter end={parseInt(stat.number)} suffix={stat.suffix} />
                <p className="text-gray-200 mt-1.5 text-sm md:text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Values ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Our Core Purpose</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4" />
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">Driven by excellence, guided by integrity</p>
          </div>
          {/* Stacks to 1-col on mobile, 3-col on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="group relative animate-on-scroll"
                id={`value-${idx}`}
                style={{
                  opacity: isVisible[`value-${idx}`] ? 1 : 0,
                  transform: isVisible[`value-${idx}`] ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s ease-out ${idx * 0.12}s`,
                }}
              >
                <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className={`bg-gradient-to-r ${item.color} w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500`}>
                    <item.icon className="text-white w-7 h-7 md:w-10 md:h-10" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base flex-1">{item.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Our Journey</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4" />
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">Celebrating decades of excellence and growth</p>
          </div>

          {/* Mobile timeline: vertical left-line */}
          <div className="md:hidden relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-green-600 to-gold" />
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative mb-8 animate-on-scroll">
                {/* Dot */}
                <div className="absolute -left-5 top-4 w-8 h-8 bg-gold rounded-full border-2 border-white shadow flex items-center justify-center">
                  <CheckCircle className="text-white w-4 h-4" />
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
                  <span className="inline-block px-3 py-0.5 bg-gold/10 rounded-full text-gold font-bold text-sm mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{milestone.title}</h3>
                  <p className="text-gray-500 text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop timeline: center-line alternating */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gold via-green-600 to-gold" />
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className={`relative mb-14 animate-on-scroll flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 inline-block w-full">
                    <span className="inline-block px-3 py-1 bg-gold/10 rounded-full text-gold font-bold text-sm mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{milestone.title}</h3>
                    <p className="text-gray-500 text-sm">{milestone.description}</p>
                  </div>
                </div>
                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-11 h-11 bg-gold rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                  <CheckCircle className="text-white w-5 h-5" />
                </div>
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-green-50 to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Why Industry Leaders Choose Us</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>
          {/* 2-col on mobile, 4-col on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 md:p-6 text-center group animate-on-scroll hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-green-100 to-green-50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-green-800 w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Leadership Team</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4" />
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">Meet the experts driving excellence in MEP supply</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="animate-on-scroll group" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5 overflow-hidden border border-gray-100">
                  {/* Avatar block */}
                  <div className={`h-36 sm:h-44 md:h-52 flex items-center justify-center text-5xl md:text-6xl font-bold ${member.color}`}>
                    {member.initials}
                  </div>
                  <div className="p-4 md:p-5 text-center">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">{member.name}</h3>
                    <p className="text-gold font-medium text-sm md:text-base">{member.role}</p>
                    <p className="text-gray-400 text-xs md:text-sm mt-0.5">{member.experience} experience</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <div className="inline-flex gap-3 items-center bg-gray-100 px-6 py-3.5 md:px-8 md:py-4 rounded-full">
              <Users size={20} className="text-gold flex-shrink-0" />
              <span className="font-semibold text-gray-800 text-sm md:text-base">
                100+ dedicated professionals serving you nationwide
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-green-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-56 h-56 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="container-custom text-center relative z-10 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Ready to Work Together?</h2>
          <p className="text-green-100 mb-7 md:mb-8 max-w-xl mx-auto text-sm md:text-base">
            Join hundreds of satisfied clients who trust us for their MEP material needs
          </p>
          {/* Stacked on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/contact"
              className="bg-gold text-green-900 px-8 py-3.5 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5 text-sm md:text-base text-center"
            >
              Request a Quote
            </Link>
            <a
              href="https://wa.me/923009246477"
              className="bg-[#25D366] text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
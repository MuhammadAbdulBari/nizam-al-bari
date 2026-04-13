// pages/Services.js
import React, { useEffect, useState } from 'react';
import { 
  Truck, PackageSearch, Headphones, TrendingUp, ShieldCheck, 
  Clock, Building2, Phone, Mail, CheckCircle, ArrowRight, 
  Sparkles, Users, Star, MessageCircle,
  FileCheck, Watch, BarChart, Rocket
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState({});
  const [hoveredService, setHoveredService] = useState(null);

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

  const services = [
    { 
      icon: TrendingUp, 
      title: 'Bulk Supply for Construction Projects', 
      description: 'Specialized procurement and supply chain management for large-scale residential, commercial, and industrial projects. Competitive pricing with volume discounts.',
      features: ['Volume Discounts', 'Priority Handling', 'Dedicated Account Manager'],
      color: 'from-orange-500 to-red-500'
    },
    { 
      icon: PackageSearch, 
      title: 'Customized Material Sourcing', 
      description: 'Hard-to-find components? We source specific brands, specifications, and custom orders from our extensive network of manufacturers and distributors.',
      features: ['Global Sourcing', 'Brand Agnostic', 'Quality Verified'],
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Truck, 
      title: 'Delivery Across Pakistan', 
      description: 'Nationwide logistics network ensuring timely delivery to any city: Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, and beyond.',
      features: ['Real-time Tracking', 'Insurance Coverage', 'Express Options'],
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Headphones, 
      title: 'Consultation Support', 
      description: 'Expert technical consultation for MEP design, material selection, quantity estimation, and project planning by our experienced engineering team.',
      features: ['24/7 Support', 'Site Visits', 'Technical Documentation'],
      color: 'from-purple-500 to-pink-500'
    },
  ];

  const benefits = [
    { icon: ShieldCheck, title: 'Quality Assurance', desc: 'All materials meet international standards with manufacturer warranties.', stat: '100%', statLabel: 'Certified' },
    { icon: Clock, title: 'Just-in-Time Delivery', desc: 'Coordinated delivery schedules to match your project timeline.', stat: '98%', statLabel: 'On-Time' },
    { icon: Building2, title: 'Project Partnership', desc: 'Long-term supply agreements for ongoing construction needs.', stat: '500+', statLabel: 'Projects' },
    { icon: Users, title: 'Expert Team', desc: 'Dedicated professionals with decades of industry experience.', stat: '100+', statLabel: 'Experts' },
  ];

  const processSteps = [
    { step: '01', title: 'Share Requirements', desc: 'Tell us your project specifications and quantities.', icon: FileCheck, duration: '30 min' },
    { step: '02', title: 'Get Quote', desc: 'Receive competitive pricing within 24 hours.', icon: BarChart, duration: '24 hrs' },
    { step: '03', title: 'Order Confirmation', desc: 'Confirm order with advance payment.', icon: CheckCircle, duration: '1 hr' },
    { step: '04', title: 'Delivery', desc: 'Timely delivery to your site location.', icon: Rocket, duration: 'Varies' },
  ];

  const testimonials = [
    { name: 'Ahmed Malik', company: 'Malik Construction Co.', text: 'Nizam Al Bari has been our trusted partner for over a decade. Their reliability and quality are unmatched.', rating: 5 },
    { name: 'Sara Khan', company: 'Khan Developers', text: 'The team goes above and beyond to ensure we get exactly what we need, when we need it.', rating: 5 },
    { name: 'Usman Riaz', company: 'Riaz Engineering', text: 'Professional, efficient, and cost-effective. Highly recommended for any MEP project.', rating: 5 },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3")',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-gray-900/95" />
        <div className="container-custom relative z-10 text-center animate-fade-in-up px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gold/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
            <Sparkles className="text-gold w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-gold font-semibold text-xs sm:text-sm">Premium Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Comprehensive MEP
            <span className="text-gold block mt-1 sm:mt-2">Solutions</span>
          </h1>
          <p className="text-sm sm:text-xl text-gray-200 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Tailored services to power your construction projects from start to finish
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="bg-gold text-green-900 px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base">
              Get Started <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-900 transition-all text-sm sm:text-base">
              View Process
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-24 bg-gray-50">
        <div className="container-custom px-4">
          <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
            <div className="inline-block px-3 py-1 bg-green-100 rounded-full mb-3 sm:mb-4">
              <span className="text-green-800 font-semibold text-xs sm:text-sm">What We Offer</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Core <span className="text-gold">Services</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              End-to-end solutions for all your electromechanical material needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative animate-on-scroll"
                id={`service-${idx}`}
                style={{ 
                  opacity: isVisible[`service-${idx}`] ? 1 : 0, 
                  transform: isVisible[`service-${idx}`] ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 0.6s ease-out ${idx * 0.1}s`
                }}
                onMouseEnter={() => setHoveredService(idx)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative bg-white rounded-2xl p-5 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden">
                  {/* Faint background icon */}
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-5">
                    <service.icon className="w-full h-full" />
                  </div>

                  <div className="flex items-start gap-4 sm:block">
                    {/* Icon */}
                    <div className={`bg-gradient-to-r ${service.color} w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0 sm:mb-6 transform -rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500`}>
                      <service.icon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                    </div>

                    {/* Title on mobile sits next to icon */}
                    <h3 className="text-base sm:text-2xl font-bold text-gray-900 sm:mb-3 mt-1 sm:mt-0 leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base mt-3 sm:mt-0">{service.description}</p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {service.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="text-gold font-semibold flex items-center gap-2 group/btn text-sm sm:text-base">
                    Learn More 
                    <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {hoveredService === idx && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-green-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Work With <span className="text-gold">Us</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Setting new standards in building material supply
            </p>
          </div>

          {/* Mobile: 2-col grid with compact cards; Desktop: 4-col */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="group animate-on-scroll cursor-pointer"
                id={`benefit-${idx}`}
                style={{ 
                  opacity: isVisible[`benefit-${idx}`] ? 1 : 0, 
                  transform: isVisible[`benefit-${idx}`] ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease-out ${idx * 0.1}s`
                }}
              >
                <div className="bg-gray-50 sm:bg-transparent rounded-2xl p-4 sm:p-0 text-center h-full">
                  <div className="relative mb-3 sm:mb-4">
                    <div className="relative bg-gradient-to-r from-green-800 to-green-700 w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="text-gold w-7 h-7 sm:w-10 sm:h-10" />
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 mb-2 sm:mb-3 text-xs sm:text-sm hidden sm:block">{benefit.desc}</p>
                  <div className="inline-flex flex-col">
                    <span className="text-xl sm:text-2xl font-bold text-gold">{benefit.stat}</span>
                    <span className="text-xs text-gray-400">{benefit.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: benefit descriptions shown as a list */}
          <div className="sm:hidden mt-6 space-y-3">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3.5">
                <div className="bg-green-100 rounded-full p-2 shrink-0">
                  <benefit.icon className="text-green-800 w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{benefit.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-12 sm:py-24 bg-gradient-to-br from-gray-900 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10 px-4">
          <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              How It <span className="text-gold">Works</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base">Simple, transparent, and efficient process</p>
          </div>

          {/* Mobile: vertical stepper; Desktop: 4-col grid */}
          <div className="block sm:hidden space-y-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 relative">
                {/* Vertical connector */}
                {idx < processSteps.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-white/10" />
                )}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gold rounded-full flex items-center justify-center text-green-900 font-bold text-xs">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 pb-4">
                  <h3 className="text-base font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-300 text-xs mb-1.5">{step.desc}</p>
                  <div className="inline-flex items-center gap-1 text-xs text-gold">
                    <Watch size={11} />
                    <span>{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop grid */}
          <div className="hidden sm:grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative animate-on-scroll text-center group" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="mb-4 relative">
                  <div className="w-24 h-24 mx-auto bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-white/20">
                    <step.icon className="w-10 h-10 text-gold" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-green-900 font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{step.desc}</p>
                <div className="inline-flex items-center gap-1 text-xs text-gold">
                  <Watch size={12} />
                  <span>{step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-24 bg-gray-50">
        <div className="container-custom px-4">
          <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our <span className="text-gold">Clients Say</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Trusted by industry leaders across Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 animate-on-scroll">
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-gold fill-gold w-4 h-4 sm:w-5 sm:h-5" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-800 to-green-600 rounded-full flex items-center justify-center shrink-0">
                    <Users className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800 to-green-900">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="absolute bottom-0 left-0 w-full h-20 sm:h-32 text-white" preserveAspectRatio="none" viewBox="0 0 1440 120">
              <path fill="currentColor" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
            </svg>
          </div>
        </div>
        <div className="container-custom relative z-10 text-center text-white px-4">
          <div className="inline-block px-3 py-1 sm:px-4 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
            <span className="font-semibold text-sm sm:text-base">Ready to Start?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Let's Discuss Your Project</h2>
          <p className="text-sm sm:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get a free consultation and competitive quote from our experts
          </p>

          {/* Buttons: stacked on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="bg-gold text-green-900 px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
              Call Now
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-900 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
              <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
              Email Us
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-900 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
              <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
              WhatsApp
            </button>
          </div>

          {/* Trust badges: wrap on mobile */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs sm:text-sm">
            {['No obligation quote', '24hr response time', 'Free consultation'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-gold" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

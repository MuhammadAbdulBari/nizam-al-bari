// pages/Contact.js
import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Mail, MapPin, MessageCircle, Send, Clock, 
  Facebook, Linkedin, Twitter, Instagram, ArrowRight, CheckCircle,
  Sparkles, Globe, Award, Users, Calendar, Star, Navigation, 
  Headphones, Zap, Shield, Truck, Package, TrendingUp
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const mapRef = useRef(null);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  };

  const contactMethods = [
    { icon: Phone, title: 'Call Us', details: ['+92 333 2688848', '+92 300 9246477','Landline : (021) 36653746', 'UAE : +971 50 243 8568'], link: 'tel:+923009246477', color: 'from-blue-500 to-cyan-500', action: 'Call Now' },
    { icon: MessageCircle, title: 'WhatsApp', details: ['+92 300 9246477'], link: 'https://wa.me/923009246477', color: 'from-green-500 to-emerald-500', action: 'Chat Now' },
    { icon: Mail, title: 'Email Us', details: ['nizamabdulbari13@gmail.com' ], link: 'mailto:nizamabdulbari13@gmail.com', color: 'from-red-500 to-orange-500', action: 'Send Email' },
    { icon: MapPin, title: 'Visit Us', details: ['Karachi, Sindh, Pakistan', 'Main Office: Orangi Town Sector 8/L'], link: 'https://maps.app.goo.gl/jSx6SP99tLUnnWZ2A', color: 'from-purple-500 to-pink-500', action: 'Get Directions' },
  ];

  const officeHours = [
    { day: 'Monday - Saturday', hours: '9:00 AM - 12:00 PM', status: 'Open' },
    { day: 'Sunday', hours: 'Closed', status: 'Closed' },
  ];

  const quickResponses = [
    { icon: Zap, text: 'Response within 24 hours', color: 'text-yellow-500' },
    { icon: Shield, text: '100% Confidential', color: 'text-green-500' },
    { icon: Users, text: 'Expert Support Team', color: 'text-blue-500' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[45vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3")',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-gray-900/95" />
        <div className="container-custom relative z-10 text-center animate-fade-in-up px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gold/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
            <Sparkles className="text-gold w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-gold font-semibold text-xs sm:text-sm">Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Let's Start a
            <span className="text-gold block mt-1 sm:mt-2">Conversation</span>
          </h1>
          <p className="text-sm sm:text-xl text-gray-200 max-w-2xl mx-auto px-2">
            Whether you have a question, need a quote, or want to discuss a project — we're here to help
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Contact Methods Grid */}
      <section className="py-10 sm:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                className="group animate-on-scroll"
                id={`method-${idx}`}
                style={{ 
                  opacity: isVisible[`method-${idx}`] ? 1 : 0, 
                  transform: isVisible[`method-${idx}`] ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease-out ${idx * 0.1}s`
                }}
              >
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center cursor-pointer h-full flex flex-col items-center">
                  <div className={`bg-gradient-to-r ${method.color} w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 transform -rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 shrink-0`}>
                    <method.icon className="text-white w-5 h-5 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{method.title}</h3>
                  <div className="hidden sm:block">
                    {method.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm mb-1">{detail}</p>
                    ))}
                  </div>
                  <div className="mt-2 sm:mt-4 inline-flex items-center gap-1 sm:gap-2 text-gold font-semibold text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                    {method.action} <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile details shown below cards */}
          <div className="sm:hidden mt-4 space-y-3">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <div className={`bg-gradient-to-r ${method.color} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
                  <method.icon className="text-white w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 text-sm">{method.title}</p>
                  {method.details.map((detail, i) => (
                    <p key={i} className="text-gray-500 text-xs leading-snug">{detail}</p>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll" id="contact-form">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-5 sm:p-8 border border-gray-100">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                  <div className="w-12 sm:w-16 h-1 bg-gold mb-3 sm:mb-4"></div>
                  <p className="text-gray-600 text-sm sm:text-base">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>

                {submitted && (
                  <div className="mb-5 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg animate-fade-in">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                      <div>
                        <p className="font-semibold text-green-800 text-sm sm:text-base">Message Sent Successfully!</p>
                        <p className="text-green-600 text-xs sm:text-sm">Thank you for contacting us. Our team will respond shortly.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Name & Email - stacked on mobile, side-by-side on md+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'transform scale-[1.02]' : ''}`}>
                        <input 
                          type="text" 
                          name="name" 
                          required 
                          value={formData.name} 
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'transform scale-[1.02]' : ''}`}>
                        <Mail className="absolute left-3 top-3.5 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input 
                          type="email" 
                          name="email" 
                          required 
                          value={formData.email} 
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-9 sm:pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Subject - stacked on mobile, side-by-side on sm+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'transform scale-[1.02]' : ''}`}>
                        <Phone className="absolute left-3 top-3.5 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-9 sm:pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="+92 XXX XXXXXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base bg-white"
                      >
                        <option>General Inquiry</option>
                        <option>Request Quote</option>
                        <option>Bulk Order</option>
                        <option>Technical Support</option>
                        <option>Partnership Opportunity</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message / Requirements *</label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'transform scale-[1.02]' : ''}`}>
                      <textarea 
                        name="message" 
                        rows="4" 
                        required 
                        value={formData.message} 
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base resize-none"
                        placeholder="Please provide details about your requirements..."
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-800 to-green-700 text-white py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group text-sm sm:text-base"
                  >
                    Send Message 
                    <Send size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Quick Response Badges - wrap on mobile */}
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2">
                    {quickResponses.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                        <item.icon className={item.color} size={13} />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-5 sm:space-y-8">
              {/* Office Hours Card */}
              <div className="animate-on-scroll bg-gradient-to-r from-green-900 to-green-800 rounded-2xl p-5 sm:p-8 text-white" id="office-hours">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <Clock className="text-gold w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-bold">Office Hours</h3>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {officeHours.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-white/10 gap-2">
                      <span className="font-medium text-sm sm:text-base">{item.day}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-gray-200 text-xs sm:text-sm">{item.hours}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${item.status === 'Open' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-xs sm:text-sm text-center">
                    <span className="text-gold">Emergency Support:</span> Available 24/7 for urgent inquiries
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="animate-on-scroll bg-gray-50 rounded-2xl p-5 sm:p-8" id="social">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">Connect With Us</h3>
                <div className="flex justify-center gap-3 sm:gap-4">
                  {[
                    { icon: Facebook, color: 'hover:bg-blue-600', link: '#' },
                    { icon: Linkedin, color: 'hover:bg-blue-700', link: '#' },
                    { icon: Twitter, color: 'hover:bg-sky-500', link: '#' },
                    { icon: Instagram, color: 'hover:bg-pink-600', link: '#' },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      className={`w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 sm:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Find Us Here</h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Visit our main office in Karachi
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-on-scroll" id="map">
            <div className="relative h-[280px] sm:h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.512323993746!2d67.0067120748827!3d24.94867814172273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e049d702aba6ab%3A0xd4bd0ab2daa23419!2sNizam-al-Bari!5e0!3m2!1sen!2s!4v1775850389198!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="absolute inset-0 w-full h-full"
              ></iframe>
              {/* Map Overlay Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-xl z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-gold rounded-full p-1.5 sm:p-2 shrink-0">
                    <Navigation className="text-green-900 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Main Office</p>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">Orangi Town Sector 8/L, Karachi, Pakistan</p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/jSx6SP99tLUnnWZ2A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-800 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-gold hover:text-green-800 transition-all shrink-0"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 text-center">
            {[
              { icon: Users, value: '5000+', label: 'Happy Customers' },
              { icon: TrendingUp, value: '1000+', label: 'Projects Completed' },
              { icon: Award, value: '25+', label: 'Years Experience' },
              { icon: Globe, value: '50+', label: 'Cities Served' },
            ].map((stat, idx) => (
              <div key={idx} className="animate-on-scroll group cursor-pointer" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="inline-flex p-2.5 sm:p-3 bg-green-100 rounded-full mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-green-800 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full mb-3 sm:mb-4">
            <Headphones className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-semibold">24/7 Emergency Support</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Need Urgent Assistance?</h3>
          <p className="text-red-100 mb-5 sm:mb-6 text-sm sm:text-base">Our emergency response team is available round the clock</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="tel:+923001234567" className="bg-white text-red-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
              Call Emergency Line
            </a>
            <a href="https://wa.me/923001234567" className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
              <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

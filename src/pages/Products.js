import React, { useState, useEffect } from 'react';
import {
  Zap, Wind, Droplets, Shield, Cpu, Sun, Wrench, ChevronRight,
  Sparkles, CheckCircle, ArrowRight, Search, Star, TrendingUp,
  Package, Truck, Clock, Award, Grid3x3, List, X,
  Battery, Cable, Lightbulb, Fan, Droplet, FlameKindling,
  Camera, PanelTop, Hammer, Thermometer, Lock, ShoppingCart,
  Activity
} from 'lucide-react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('electrical');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [showQuoteModal, setShowQuoteModal] = useState(false);

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

  const productImages = {
    electrical: ['./images/a.png','./images/b.png','./images/dbs.png','./images/circuit_breakers.png','./images/switches_sockets.png','./images/lights.png','./images/accessories.png','./images/protection.png'],
    hvac: ['./images/ac.png','./images/chillers.png','./images/ducting.png','./images/fans.png','./images/pumps.png','./images/thermostats.png','./images/piping.png','./images/vav.png'],
    plumbing: ['./images/pipes.png','./images/valves.png','./images/ware.png','./images/tanks.png','./images/drain.png','./images/pipe_ins.png','./images/water_meters.png','./images/pumping.png'],
    fire: ['./images/fire.png','./images/sprinkler.png','./images/fire_ex.png','./images/fire_hose.png','./images/fire_alarm.png','./images/smoke.png','./images/fire_pumps.png','./images/emer_light.png'],
    security: ['./images/cctv.png','./images/access_control.png','./images/cabling.png','./images/address.png','./images/intercom.png','./images/networking.png','./images/fiber.png','./images/home.png'],
    solar: ['./images/panels.png','./images/inverters.png','./images/batteries.png','./images/mounting.png','./images/dccables.png','./images/combiner.png','./images/controller.png','./images/net.png'],
    hardware: ['./images/power.png','./images/hand.png','./images/fastners.png','./images/sealants.png','./images/safety.png','./images/ladders.png','./images/measure.png','./images/install.png'],
  };

  const categories = {
    electrical: {
      icon: Zap, name: 'Electrical', fullName: 'Electrical Materials',
      description: 'Complete range of electrical components for residential, commercial, and industrial projects',
      gradient: 'from-yellow-500 to-orange-500', bgGradient: 'from-yellow-50 to-orange-50',
      items: [
        { name: 'Copper & Aluminum Wires', icon: Cable, specs: 'Various gauges available', popular: true, brand: 'Multiple Brands' },
        { name: 'Armored & Unarmored Cables', icon: Cable, specs: 'PVC, XLPE, Fire resistant', popular: true, brand: 'Premium Quality' },
        { name: 'Distribution Boards (DBs)', icon: Zap, specs: 'Single & Three Phase', popular: false, brand: 'Top Brands' },
        { name: 'Circuit Breakers', icon: Shield, specs: 'MCB, RCCB, MCCB, ELCB', popular: true, brand: 'International Standards' },
        { name: 'Modular Switches & Sockets', icon: Zap, specs: 'Premium brands', popular: false, brand: 'Designer Series' },
        { name: 'LED Lighting & Fixtures', icon: Lightbulb, specs: 'Energy efficient', popular: true, brand: 'Energy Saver' },
        { name: 'Conduits & Accessories', icon: Package, specs: 'PVC, GI, Flexible', popular: false, brand: 'Durable Range' },
        { name: 'Earthing & Lightning Protection', icon: Shield, specs: 'Complete systems', popular: false, brand: 'Safety First' },
      ]
    },
    hvac: {
      icon: Wind, name: 'HVAC', fullName: 'Mechanical / HVAC',
      description: 'Heating, ventilation, and air conditioning solutions for all building types',
      gradient: 'from-blue-500 to-cyan-500', bgGradient: 'from-blue-50 to-cyan-50',
      items: [
        { name: 'Split & Package AC Units', icon: Wind, specs: '1 Ton to 10 Ton', popular: true, brand: 'Energy Efficient' },
        { name: 'Chillers & AHUs', icon: Thermometer, specs: 'Air cooled, Water cooled', popular: false, brand: 'Industrial Grade' },
        { name: 'Ducting & Insulation', icon: Package, specs: 'GI, Aluminum, Flexible', popular: true, brand: 'Thermal Efficient' },
        { name: 'Industrial Fans', icon: Fan, specs: 'Centrifugal, Axial', popular: false, brand: 'Heavy Duty' },
        { name: 'Pumps & Circulators', icon: Droplet, specs: 'Various capacities', popular: true, brand: 'High Performance' },
        { name: 'Thermostats & Controls', icon: Cpu, specs: 'Smart controls', popular: false, brand: 'Digital Solutions' },
        { name: 'Refrigerant Piping', icon: Activity, specs: 'Copper, Insulated', popular: false, brand: 'Leak Proof' },
        { name: 'VAV & VRV Systems', icon: Wind, specs: 'Variable refrigerant flow', popular: false, brand: 'Premium Series' },
      ]
    },
    plumbing: {
      icon: Droplets, name: 'Plumbing', fullName: 'Plumbing Materials',
      description: 'High-quality plumbing solutions for water supply and drainage systems',
      gradient: 'from-cyan-500 to-blue-500', bgGradient: 'from-cyan-50 to-blue-50',
      items: [
        { name: 'Pipes & Fittings', icon: Activity, specs: 'UPVC, CPVC, GI, PPR', popular: true, brand: 'Leak Proof' },
        { name: 'Valves', icon: Droplet, specs: 'Gate, Globe, Ball, Butterfly', popular: true, brand: 'Industrial Grade' },
        { name: 'Sanitary Ware', icon: Droplets, specs: 'Premium bathroom fixtures', popular: false, brand: 'Luxury Collection' },
        { name: 'Water Tanks', icon: Package, specs: 'Plastic, Steel, Concrete', popular: true, brand: 'Long Lasting' },
        { name: 'Drainage Systems', icon: Activity, specs: 'SWR, Cast Iron', popular: false, brand: 'Efficient Flow' },
        { name: 'Pipe Insulation', icon: Package, specs: 'Rubber, Fiberglass', popular: false, brand: 'Energy Saving' },
        { name: 'Water Meters', icon: Droplet, specs: 'Mechanical, Digital', popular: false, brand: 'Precision Tools' },
        { name: 'Pumping Systems', icon: Droplets, specs: 'Submersible, Booster', popular: true, brand: 'High Pressure' },
      ]
    },
    fire: {
      icon: Shield, name: 'Fire', fullName: 'Fire Fighting Systems',
      description: 'Comprehensive fire protection and safety equipment',
      gradient: 'from-red-500 to-orange-500', bgGradient: 'from-red-50 to-orange-50',
      items: [
        { name: 'Fire Hydrant Systems', icon: FlameKindling, specs: 'Complete networks', popular: true, brand: 'Life Safety' },
        { name: 'Sprinkler Systems', icon: Shield, specs: 'Wet, Dry, Pre-action', popular: true, brand: 'Auto Response' },
        { name: 'Fire Extinguishers', icon: FlameKindling, specs: 'CO2, Dry powder, Foam', popular: true, brand: 'UL Listed' },
        { name: 'Fire Hose Reels', icon: Package, specs: 'Heavy duty', popular: false, brand: 'Industrial Strength' },
        { name: 'Fire Alarm Panels', icon: Cpu, specs: 'Conventional, Addressable', popular: true, brand: 'Early Warning' },
        { name: 'Smoke & Heat Detectors', icon: Shield, specs: 'Optical, Ionization', popular: false, brand: 'Sensitive Detection' },
        { name: 'Fire Pumps', icon: Droplet, specs: 'Electric, Diesel', popular: false, brand: 'High Capacity' },
        { name: 'Emergency Lighting', icon: Lightbulb, specs: 'LED, Battery backup', popular: true, brand: 'Safety Light' },
      ]
    },
    security: {
      icon: Cpu, name: 'Security', fullName: 'Low Current & Security',
      description: 'Advanced security and low voltage systems',
      gradient: 'from-purple-500 to-pink-500', bgGradient: 'from-purple-50 to-pink-50',
      items: [
        { name: 'CCTV Systems', icon: Camera, specs: 'IP, Analog, 4K', popular: true, brand: 'HD Security' },
        { name: 'Access Control', icon: Lock, specs: 'Biometric, Card, RFID', popular: true, brand: 'Secure Entry' },
        { name: 'Structured Cabling', icon: Cable, specs: 'CAT6, CAT6A, Fiber', popular: true, brand: 'High Speed' },
        { name: 'Public Address', icon: Cpu, specs: 'Background music, Emergency', popular: false, brand: 'Clear Sound' },
        { name: 'Intercom Systems', icon: Cpu, specs: 'Audio, Video', popular: false, brand: 'Instant Connect' },
        { name: 'Networking Equipment', icon: Cpu, specs: 'Switches, Routers, APs', popular: true, brand: 'Enterprise Grade' },
        { name: 'Fiber Optic Cables', icon: Cable, specs: 'Single mode, Multi mode', popular: false, brand: 'High Bandwidth' },
        { name: 'Home Automation', icon: Cpu, specs: 'Smart home solutions', popular: true, brand: 'Smart Living' },
      ]
    },
    solar: {
      icon: Sun, name: 'Solar', fullName: 'Solar Materials',
      description: 'Renewable energy solutions for sustainable power generation',
      gradient: 'from-yellow-500 to-green-500', bgGradient: 'from-yellow-50 to-green-50',
      items: [
        { name: 'Solar Panels', icon: PanelTop, specs: 'Monocrystalline, Polycrystalline', popular: true, brand: 'High Efficiency' },
        { name: 'Inverters', icon: Battery, specs: 'Grid-tie, Hybrid, Off-grid', popular: true, brand: 'Power Conversion' },
        { name: 'Solar Batteries', icon: Battery, specs: 'Lithium, Lead Acid', popular: true, brand: 'Long Life' },
        { name: 'Mounting Structures', icon: Package, specs: 'Roof, Ground, Carport', popular: false, brand: 'Sturdy Design' },
        { name: 'DC Cables', icon: Cable, specs: 'Solar rated', popular: false, brand: 'Weather Proof' },
        { name: 'Combiner Boxes', icon: Package, specs: 'With surge protection', popular: false, brand: 'Safety First' },
        { name: 'Charge Controllers', icon: Battery, specs: 'PWM, MPPT', popular: false, brand: 'Efficient Charging' },
        { name: 'Net Metering', icon: TrendingUp, specs: 'Grid-tie systems', popular: true, brand: 'Utility Ready' },
      ]
    },
    hardware: {
      icon: Wrench, name: 'Hardware', fullName: 'Hardware & Installation',
      description: 'Tools and accessories for professional installation',
      gradient: 'from-gray-500 to-gray-700', bgGradient: 'from-gray-50 to-gray-100',
      items: [
        { name: 'Power Tools', icon: Hammer, specs: 'Drills, Saws, Grinders', popular: true, brand: 'Professional Grade' },
        { name: 'Hand Tools', icon: Wrench, specs: 'Complete sets', popular: true, brand: 'Precision Tools' },
        { name: 'Fasteners', icon: Package, specs: 'Screws, Bolts, Anchors', popular: false, brand: 'Strong Hold' },
        { name: 'Adhesives & Sealants', icon: Package, specs: 'Silicon, Epoxy, Glue', popular: false, brand: 'Industrial Bond' },
        { name: 'Safety Equipment', icon: Shield, specs: 'Helmets, Gloves, Vests', popular: true, brand: 'Worker Safety' },
        { name: 'Ladders & Scaffolding', icon: Package, specs: 'Aluminum, Steel', popular: false, brand: 'Sturdy Access' },
        { name: 'Measuring Tools', icon: Wrench, specs: 'Tapes, Levels, Meters', popular: false, brand: 'Accurate Measure' },
        { name: 'Installation Accessories', icon: Package, specs: 'Clips, Ties, Glands', popular: false, brand: 'Complete Kit' },
      ]
    },
  };

  const filteredItems = categories[activeTab].items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.specs.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ── Quote Modal ──
  const QuoteModal = ({ product, onClose }) => {
    const [quoteForm, setQuoteForm] = useState({ name: '', email: '', phone: '', quantity: '', message: '' });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Quote request sent for ${product.name}! We'll contact you shortly.`);
      onClose();
    };

    return (
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm">
        {/* Bottom-sheet on mobile, centered modal on sm+ */}
        <div className="bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl max-h-[92vh] overflow-y-auto shadow-2xl">
          {/* Handle bar (mobile) */}
          <div className="flex justify-center pt-3 pb-1 sm:hidden">
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>

          <div className="flex justify-between items-start p-5 md:p-6 border-b border-gray-100">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Request Quote</h2>
              <p className="text-sm text-gray-500 mt-0.5">{product.name}</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors p-1 -mr-1">
              <X size={22} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-4">
            {[
              { label: 'Full Name', key: 'name', type: 'text', required: true },
              { label: 'Email', key: 'email', type: 'email', required: true },
              { label: 'Phone', key: 'phone', type: 'tel', required: true },
              { label: 'Quantity Required', key: 'quantity', type: 'text', required: false },
            ].map(({ label, key, type, required }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label} {required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={type}
                  required={required}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  value={quoteForm[key]}
                  onChange={(e) => setQuoteForm({ ...quoteForm, [key]: e.target.value })}
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
              <textarea
                rows="3"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                value={quoteForm.message}
                onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-800 to-green-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-sm md:text-base"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    );
  };

  const activeCat = categories[activeTab];

  return (
    <div className="overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3")',
            filter: 'brightness(0.3)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-gray-900/95" />
        <div className="container-custom relative z-10 text-center px-4 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full mb-5">
            <Package className="text-gold w-4 h-4" />
            <span className="text-gold font-semibold text-sm">Premium Quality Materials</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Complete MEP
            <span className="text-gold block mt-1">Solutions Catalog</span>
          </h1>
          <p className="text-base md:text-xl text-gray-200 max-w-xl mx-auto">
            Explore our extensive range of electromechanical building materials from world-class manufacturers
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 md:h-20 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* ── Category Nav ── */}
      {/* Desktop: horizontal scrollable pill row */}
      <section className="sticky top-16 z-40 bg-white shadow-md">
        {/* Mobile: compact icon-grid (2 rows of 4) */}
        <div className="md:hidden px-3 py-3">
          <div className="grid grid-cols-4 gap-2">
            {Object.entries(categories).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => { setActiveTab(key); setSearchTerm(''); }}
                className={`flex flex-col items-center gap-1 py-2 px-1 rounded-xl text-xs font-medium transition-all ${
                  activeTab === key
                    ? `bg-gradient-to-r ${cat.gradient} text-white shadow-md`
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <cat.icon size={18} />
                <span className="leading-none text-center">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: scrollable pill row */}
        <div className="hidden md:block py-3">
          <div className="container-custom">
            <div className="flex justify-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {Object.entries(categories).map(([key, cat]) => (
                <button
                  key={key}
                  onClick={() => { setActiveTab(key); setSearchTerm(''); }}
                  className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeTab === key
                      ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg scale-105`
                      : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:scale-105'
                  }`}
                >
                  <cat.icon size={17} />
                  {cat.fullName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Products Main ── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container-custom px-3 sm:px-4 md:px-6">

          {/* Category Header */}
          <div className={`bg-gradient-to-r ${activeCat.bgGradient} rounded-xl md:rounded-2xl shadow-md p-4 md:p-8 mb-6 md:mb-8`}>
            {/* Top row: icon + title */}
            <div className="flex items-center gap-3 md:gap-4 mb-4">
              <div className={`bg-gradient-to-r ${activeCat.gradient} w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                {React.createElement(activeCat.icon, { className: 'text-white w-6 h-6 md:w-8 md:h-8' })}
              </div>
              <div className="min-w-0">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{activeCat.fullName}</h2>
                <p className="text-gray-600 text-xs md:text-sm mt-0.5 line-clamp-2">{activeCat.description}</p>
              </div>
            </div>

            {/* Search + view toggle */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 md:py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <X size={15} />
                  </button>
                )}
              </div>
              {/* View toggle — hidden on mobile (grid only) */}
              <div className="hidden sm:flex gap-1 bg-white rounded-lg p-1 shadow-sm flex-shrink-0">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-green-800 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Grid3x3 size={17} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-green-800 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <List size={17} />
                </button>
              </div>
            </div>
          </div>

          {/* Products — always grid on mobile, grid or list on sm+ */}
          <div
            className={`animate-on-scroll ${
              viewMode === 'grid'
                ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6'
                : 'space-y-3 md:space-y-4'
            }`}
            id="products-grid"
          >
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className={`group cursor-pointer transition-all duration-400 ${
                  viewMode === 'grid'
                    ? 'bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden'
                    : 'bg-white rounded-xl shadow-md hover:shadow-lg p-3 md:p-4 flex items-center justify-between gap-3'
                }`}
                style={{
                  opacity: isVisible['products-grid'] ? 1 : 0,
                  transform: isVisible['products-grid'] ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.5s ease-out ${idx * 0.04}s`,
                }}
              >
                {viewMode === 'grid' ? (
                  <>
                    {/* Image area */}
                    <div className={`bg-gradient-to-r ${activeCat.gradient} relative h-32 sm:h-40 md:h-48 flex items-center justify-center overflow-hidden`}>
                      <img
                        src={productImages[activeTab][idx % productImages[activeTab].length]}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                      {/* Icon badge */}
                      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur rounded-lg p-1.5">
                        <item.icon className="w-4 h-4 text-green-800" />
                      </div>
                      {/* Popular badge */}
                      {item.popular && (
                        <div className="absolute top-2 right-2 bg-gold text-green-900 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow">
                          <Star size={10} fill="currentColor" />
                          <span className="hidden sm:inline">Popular</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-3 md:p-5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-0.5 leading-tight line-clamp-2">{item.name}</h3>
                      <p className="text-xs md:text-sm text-gray-500 mb-1 line-clamp-1">{item.specs}</p>
                      <p className="text-xs text-gold font-semibold mb-3">{item.brand}</p>
                      <div className="flex items-center justify-between gap-2">
                        <button
                          onClick={() => setSelectedProduct(item)}
                          className="bg-green-800 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-gold hover:text-green-900 transition-all flex items-center gap-1.5"
                        >
                          <ShoppingCart size={12} />
                          Quote
                        </button>
                        <div className="text-xs text-gray-400 flex items-center gap-1 hidden sm:flex">
                          <CheckCircle size={11} className="text-green-500" />
                          In Stock
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  /* List view */
                  <>
                    <div className={`bg-gradient-to-r ${activeCat.gradient} w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="text-white w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">{item.name}</h3>
                      <p className="text-xs md:text-sm text-gray-500 truncate">{item.specs}</p>
                      <p className="text-xs text-gold">{item.brand}</p>
                    </div>
                    {item.popular && (
                      <div className="hidden sm:flex bg-gold/10 text-gold text-xs px-2 py-1 rounded-full items-center gap-1 flex-shrink-0">
                        <Star size={11} fill="currentColor" />
                        Popular
                      </div>
                    )}
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="bg-green-800 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-gold hover:text-green-900 transition-all flex items-center gap-1 flex-shrink-0"
                    >
                      Quote <ChevronRight size={13} />
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl">
              <Package className="w-14 h-14 text-gray-200 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">No products found matching "{searchTerm}"</p>
              <button onClick={() => setSearchTerm('')} className="mt-3 text-green-800 text-sm font-medium underline">
                Clear search
              </button>
            </div>
          )}

          {/* Stats strip */}
          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 animate-on-scroll" id="stats">
            {[
              { icon: Award, value: '5000+', label: 'Products Available' },
              { icon: Truck, value: 'Same Day', label: 'Delivery Available' },
              { icon: Clock, value: '24/7', label: 'Technical Support' },
              { icon: TrendingUp, value: '100%', label: 'Quality Assured' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-3 md:p-4 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                <stat.icon className="text-gold w-5 h-5 md:w-6 md:h-6 mx-auto mb-1.5" />
                <p className="text-lg md:text-xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-8 md:mt-12 relative overflow-hidden rounded-2xl animate-on-scroll" id="cta">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800 pointer-events-none">
              <div className="absolute top-0 right-0 w-56 h-56 bg-gold/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/20 rounded-full blur-3xl" />
            </div>
            <div className="relative p-6 md:p-10 lg:p-12 text-center text-white">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Bulk Orders Welcome</span>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
                Need a specific product or bulk pricing?
              </h3>
              <p className="text-green-100 mb-6 max-w-xl mx-auto text-sm md:text-base">
                Our procurement specialists will source exactly what you need at competitive prices
              </p>
              {/* Stacked on mobile, row on sm+ */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
                <button
                  onClick={() => setShowQuoteModal(true)}
                  className="bg-gold text-green-900 px-7 py-3 rounded-full font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Request a Quote <ArrowRight size={17} />
                </button>
                <button className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-green-900 transition-all text-sm md:text-base">
                  Download Catalog
                </button>
              </div>
              {/* Trust badges — wrap on mobile */}
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs md:text-sm">
                {['Volume Discounts', 'Free Consultation', 'Pan-Pakistan Delivery'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={13} className="text-gold flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Modals */}
      {selectedProduct && <QuoteModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {showQuoteModal && <QuoteModal product={{ name: 'Bulk Order Inquiry' }} onClose={() => setShowQuoteModal(false)} />}
    </div>
  );
};

export default Products;

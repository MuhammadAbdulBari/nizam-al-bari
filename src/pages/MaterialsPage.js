import React, { useState } from 'react';
import './MaterialsPage.css';

const MaterialsPage = () => {
  const [activeTab, setActiveTab] = useState('electrical');
  const [hoveredItem, setHoveredItem] = useState(null);

  const tabs = [
    { id: 'electrical', label: 'Electrical', icon: '⚡' },
    { id: 'mechanical', label: 'Mechanical', icon: '🔧' },
    { id: 'plumbing', label: 'Plumbing', icon: '💧' },
    { id: 'fire', label: 'Fire Safety', icon: '🔥' },
    { id: 'smart', label: 'Smart Systems', icon: '🧠' },
  ];

  const materialsData = {
    electrical: {
      title: 'Electrical Materials',
      subtitle: 'Power supply, lighting, and communication systems',
      color: 'electric',
      gradient: 'linear-gradient(135deg, #00a8cc 0%, #0088aa 100%)',
      items: [
        { name: 'Wires & Cables', description: 'High-quality copper and aluminum cables for reliable power distribution', specs: ['CU/AL', 'Various gauges', 'Fire resistant'] },
        { name: 'Switches & Sockets', description: 'Modular switches and universal sockets with modern designs', specs: ['1-6 Gang', 'LED indicator', 'Safety shutters'] },
        { name: 'Circuit Breakers', description: 'MCB, MCCB, and RCCB protection devices for electrical safety', specs: ['6A-63A', 'Single/Three phase', 'C/D curves'] },
        { name: 'Distribution Boards', description: 'Main and sub-distribution panels for organized power management', specs: ['4-36 ways', 'Metal/PVC', 'Surface/Wall mount'] },
        { name: 'Lighting Fixtures', description: 'Energy-efficient LED lighting solutions for all applications', specs: ['LED panels', 'Spotlights', 'Street lights'] },
        { name: 'Conduits & Cable Trays', description: 'PVC and metal conduits with heavy-duty cable management systems', specs: ['Various sizes', 'Galvanized', 'Accessories'] },
        { name: 'Earthing Systems', description: 'Complete earthing solutions for electrical safety', specs: ['Copper rods', 'Chemical earthing', 'Test points'] },
      ]
    },
    mechanical: {
      title: 'Mechanical Materials',
      subtitle: 'Heating, cooling, ventilation, and machinery',
      color: 'orange',
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #e85d2c 100%)',
      items: [
        { name: 'HVAC Systems', description: 'Complete heating, ventilation, and air conditioning solutions', specs: ['VRF systems', 'Chillers', 'Air handlers'] },
        { name: 'Ventilation Fans', description: 'High-performance exhaust and ventilation fans', specs: ['Axial fans', 'Centrifugal', 'Smoke extract'] },
        { name: 'Pumps', description: 'Water pumps, booster pumps, and circulation pumps', specs: ['Centrifugal', 'Submersible', 'Multistage'] },
        { name: 'Elevators & Escalators', description: 'Passenger and freight elevator systems', specs: ['Hydraulic', 'Traction', 'Machine room-less'] },
        { name: 'Generators', description: 'Diesel and gas generators for backup power', specs: ['10kVA-2000kVA', 'Standby/Prime', 'Soundproof'] },
      ]
    },
    plumbing: {
      title: 'Plumbing Materials',
      subtitle: 'Water supply and drainage systems',
      color: 'blue',
      gradient: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
      items: [
        { name: 'Pipes & Fittings', description: 'PVC, PPR, and GI pipes for water distribution', specs: ['Various diameters', 'Pressure rated', 'Complete fittings'] },
        { name: 'Valves', description: 'Gate valves, ball valves, and control valves', specs: ['Brass/Stainless', 'Sizes 1/2"-6"', 'PN16/PN25'] },
        { name: 'Sanitary Ware', description: 'Premium bathroom and kitchen fittings', specs: ['Faucets', 'Showers', 'Accessories'] },
        { name: 'Water Tanks', description: 'Polyethylene and stainless steel water storage tanks', specs: ['500L-5000L', 'Vertical/Horizontal', 'Insulated'] },
        { name: 'Drainage Systems', description: 'Complete drainage solutions for buildings', specs: ['Floor drains', 'Gully traps', 'PVC drainage'] },
      ]
    },
    fire: {
      title: 'Fire Fighting Systems',
      subtitle: 'Advanced fire protection and safety systems',
      color: 'red',
      gradient: 'linear-gradient(135deg, #e63946 0%, #c1121f 100%)',
      items: [
        { name: 'Fire Alarms', description: 'Addressable and conventional fire alarm systems', specs: ['Intelligent detectors', 'Control panels', 'Sounders'] },
        { name: 'Sprinkler Systems', description: 'Automatic fire suppression sprinkler systems', specs: ['Wet pipe', 'Dry pipe', 'Pre-action'] },
        { name: 'Fire Extinguishers', description: 'Portable fire extinguishers for all fire classes', specs: ['CO2', 'Dry powder', 'Foam', 'Water'] },
        { name: 'Emergency Lighting', description: 'Battery-backed emergency exit and lighting systems', specs: ['LED', 'Maintained', 'Non-maintained'] },
        { name: 'Fire Hose Reels', description: 'Complete fire hose reel systems with cabinets', specs: ['30m hose', 'Wall mounted', 'All accessories'] },
      ]
    },
    smart: {
      title: 'Smart Building Systems',
      subtitle: 'Building automation and security solutions',
      color: 'green',
      gradient: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
      items: [
        { name: 'Building Management', description: 'Centralized BMS for building automation', specs: ['BACnet', 'Modbus', 'Web-based'] },
        { name: 'CCTV Systems', description: 'High-definition surveillance solutions', specs: ['4MP-8MP', 'IP/Analog', 'NVR/DVR'] },
        { name: 'Access Control', description: 'Biometric and card-based access systems', specs: ['Fingerprint', 'RFID', 'Mobile access'] },
        { name: 'Intercom Systems', description: 'Audio and video door entry systems', specs: ['IP-based', 'Multi-tenant', 'Mobile app'] },
      ]
    }
  };

  const currentData = materialsData[activeTab];

  return (
    <div className="materials-page">
      <div className="container">
        <div className="materials-header fade-up">
          <h1 className="page-title">Our Materials</h1>
          <p className="page-subtitle">Premium quality building materials from trusted global manufacturers</p>
        </div>

        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? `tab-active tab-${currentData.color}` : ''}`}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="materials-showcase scale-in">
          <div className="materials-header-section" style={{ background: currentData.gradient }}>
            <h2 className="materials-title">{currentData.title}</h2>
            <p className="materials-subtitle">{currentData.subtitle}</p>
          </div>
          
          <div className="materials-grid">
            {currentData.items.map((item, idx) => (
              <div 
                key={idx} 
                className={`material-card ${hoveredItem === idx ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredItem(idx)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="material-card-inner">
                  <div className="material-icon">{idx + 1}</div>
                  <h3 className="material-name">{item.name}</h3>
                  <p className="material-description">{item.description}</p>
                  <div className="material-specs">
                    {item.specs.map((spec, i) => (
                      <span key={i} className="material-spec">{spec}</span>
                    ))}
                  </div>
                  <button className="material-btn">View Details →</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="info-banner">
          <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p>All materials comply with international quality standards (ISO, CE, UL) and include manufacturer warranties.</p>
        </div>
      </div>
    </div>
  );
};

export default MaterialsPage;
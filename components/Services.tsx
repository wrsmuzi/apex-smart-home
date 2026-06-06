import React from 'react';

const services = [
  { title: 'Smart Security', description: 'AI cameras, smart locks, and perimeter security.', icon: '🛡️' },
  { title: 'Climate & Lighting', description: 'Automated HVAC and intelligent lighting scenes.', icon: '💡' },
  { title: 'Home Cinema', description: 'Professional acoustics and 4K projection.', icon: '🎬' },
  { title: 'Network Setup', description: 'Enterprise-grade Mesh Wi-Fi and cabling.', icon: '🌐' },
  { title: 'Electrical', description: 'Certified work and smart switch installations.', icon: '⚡' },
  { title: 'Maintenance', description: 'Drywall, painting, and premium carpentry.', icon: '🛠️' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-xl hover:border-blue-300 hover:shadow-xl transition-all bg-white">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

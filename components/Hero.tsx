import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span>Premium Home Automation</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Elevating Your Living <br />
              <span className="text-blue-600">With Smart Solutions</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              We specialize in high-end home automation, security systems, and premium maintenance. 
              Bringing efficiency, safety, and luxury to your modern residence.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#request" className="text-center bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Get a Free Quote
              </a>
              <a href="#services" className="text-center bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-all">
                Our Services
              </a>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 relative">
            <div className="relative z-10 w-full h-[500px] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000" 
                    alt="Modern Smart Home" 
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

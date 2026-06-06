'use client';

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              APEX <span className="text-blue-600">SMART HOME</span>
            </span>
          </div>

          {/* Navigation - Desktop (Visible from lg upwards) */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#request" className="hover:text-blue-600 transition-colors">Contact</a>
            <div className="h-4 w-px bg-gray-300 mx-2"></div>
            <div className="flex items-center space-x-4 text-slate-900">
              <span>+1 (480) 944-0444</span>
              <a href="#request" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all">
                Get a Quote
              </a>
            </div>
          </div>

          {/* Mobile/Tablet Menu Toggle (Visible up to lg) */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 transition-colors p-2"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 absolute w-full z-40 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Services</a>
            <a href="#request" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Contact</a>
            <div className="pt-4 border-t border-gray-100">
              <p className="px-3 py-2 text-sm text-slate-500">Contact us:</p>
              <p className="px-3 py-1 text-base font-bold text-slate-900">+1 (480) 944-0444</p>
              <a href="#request" onClick={() => setIsOpen(false)} className="mt-4 block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-md font-medium">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

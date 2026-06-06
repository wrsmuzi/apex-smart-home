'use client';

import React, { useState } from 'react';

const LeadForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      if (files.length + newFiles.length > 7) {
        alert('Maximum 7 files allowed');
        return;
      }
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    files.forEach((file) => formData.append('files', file));

    try {
      const response = await fetch('/api/request', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        (e.target as HTMLFormElement).reset();
        setFiles([]);
      } else {
        throw new Error(data.error || 'Request failed');
      }
    } catch (err: any) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="request" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="bg-slate-900 p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Service Request</h2>
            <p className="text-slate-400">Provide your details, and our experts will contact you shortly.</p>
          </div>
          <form className="p-10 space-y-8" onSubmit={handleSubmit}>
            {status && (
              <div className={`p-4 rounded-lg text-center font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                {status.message}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                <input name="firstName" type="text" required className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                <input name="lastName" type="text" required className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Doe" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                <input name="phone" type="tel" required className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+1 (000) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                <input name="email" type="email" required className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Service Address *</label>
              <input name="address" type="text" required className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Full address, city, zip code" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-4">Required Services</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Smart Security', 'Climate Control', 'Home Cinema', 'Network Setup', 'Electrical', 'Maintenance'].map((service) => (
                  <label key={service} className="flex items-center space-x-3 p-4 border border-slate-100 rounded-xl cursor-pointer hover:bg-blue-50 transition-all group">
                    <input name="services" value={service} type="checkbox" className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500" />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600">{service}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Project Details</label>
              <textarea name="description" rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Tell us more about your requirements..."></textarea>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Upload Site Photos (Max 7)</label>
              <div className="mt-2 flex justify-center px-6 py-10 border-2 border-slate-200 border-dashed rounded-2xl hover:border-blue-400 transition-all relative">
                <div className="text-center">
                  <div className="flex text-sm text-slate-600">
                    <label className="relative cursor-pointer bg-white px-4 py-2 rounded-lg font-semibold text-blue-600 hover:text-blue-700 shadow-sm border border-blue-100">
                      <span>Upload files</span>
                      <input type="file" multiple onChange={handleFileChange} className="sr-only" />
                    </label>
                    <span className="pl-2">or drag and drop</span>
                  </div>
                </div>
              </div>
              {files.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {files.map((file, index) => (
                    <div key={index} className="text-xs flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="truncate max-w-[80%]">{file.name}</span>
                      <button type="button" onClick={() => removeFile(index)} className="text-slate-400 hover:text-red-500 font-bold">✕</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform active:scale-[0.98] shadow-lg ${isSubmitting ? 'bg-slate-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'}`}
            >
              {isSubmitting ? 'Sending Request...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;

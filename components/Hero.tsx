import React from 'react';
import { Mail, Linkedin, MapPin, Phone, Download } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Profile Image */}
          <div className="flex-shrink-0 relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-indigo-600 rounded-2xl -rotate-6 opacity-20"></div>
              <img 
                src={PROFILE.image} 
                alt={PROFILE.name} 
                className="w-full h-full object-cover rounded-2xl shadow-xl relative z-10 border-4 border-white"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-slate-900 mb-4">
              {PROFILE.name}
            </h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-medium mb-6">
              {PROFILE.role}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-slate-600 mb-8">
              <span className="flex items-center gap-2">
                <MapPin size={18} /> {PROFILE.institution}
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-2">
                <MapPin size={18} /> {PROFILE.location}
              </span>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {PROFILE.summary}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                <Mail size={18} /> Contact Me
              </a>
              <a href={SOCIAL_LINKS[0].url} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full hover:border-blue-300 hover:text-blue-600 transition-colors">
                <Download size={18} /> Download CV
              </a>
              {SOCIAL_LINKS.map((link) => (
                <a key={link.name} href={link.url} className="p-3 bg-white text-slate-600 rounded-full border border-slate-200 hover:text-blue-600 hover:border-blue-300 transition-colors" title={link.name}>
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
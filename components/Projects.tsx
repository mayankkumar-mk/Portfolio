import React from 'react';
import { PROJECTS } from '../constants';
import { Shield, Lock } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12">Research Projects</h2>

        <div className="grid md:grid-cols-1 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-32 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Shield className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-slate-300 text-sm">{project.role} | {project.duration}</p>
                    </div>
                  </div>
                  {project.confidential && (
                    <span className="px-3 py-1 bg-red-500/20 text-red-200 text-xs font-semibold rounded-full border border-red-500/30 flex items-center gap-1">
                      <Lock size={12} /> Confidential
                    </span>
                  )}
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-slate-200">
                      • {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
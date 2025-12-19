import React from 'react';
import { EDUCATION, SKILLS } from '../constants';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background similar to other sections for consistency */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Education Column - Takes up more space now for better design */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/20">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900">Education</h2>
            </div>

            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="group relative pl-8 border-l-2 border-slate-200 hover:border-blue-400 transition-colors duration-300">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white bg-slate-300 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300 shadow-sm"></div>
                  
                  {/* Content Card */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:bg-white hover:border-blue-100 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                                {edu.degree}
                            </h3>
                            <div className="text-lg font-medium text-slate-600 mt-1">
                                {edu.institution}
                            </div>
                        </div>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">
                            <Calendar size={14} />
                            {edu.year}
                        </span>
                    </div>

                    {edu.grade && (
                        <div className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-sm font-semibold rounded-md border border-amber-100 mb-4">
                            {edu.grade}
                        </div>
                    )}
                    
                    {edu.details && (
                      <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-3 mt-1">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Column - Styled to complement */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
                <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-slate-900 text-white rounded-xl shadow-lg shadow-slate-900/20">
                        <Award size={28} />
                    </div>
                    <h2 className="text-4xl font-serif font-bold text-slate-900">Technical Skills</h2>
                </div>

                <div className="grid gap-5">
                {SKILLS.map((skillGroup) => (
                    <div key={skillGroup.category} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                        <skillGroup.icon className="text-blue-600" size={22} />
                        <h3 className="font-bold text-lg text-slate-900">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors cursor-default">
                            {skill}
                        </span>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
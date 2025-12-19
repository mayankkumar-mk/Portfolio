import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Trophy } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Trophy className="text-amber-500" size={32} />
          <h2 className="text-3xl font-serif font-bold text-slate-900">Honors & Achievements</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-amber-200 transition-colors">
              <span className="text-xs font-bold tracking-wider text-amber-600 uppercase mb-2 block">
                {item.year}
              </span>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
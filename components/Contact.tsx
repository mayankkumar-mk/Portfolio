import React from 'react';
import { REFEREES, PROFILE } from '../constants';
import { User } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Contact</h2>
            <p className="text-slate-400 mb-4 max-w-sm">
              I am currently looking for Post Doc opportunities. Feel free to reach out for collaborations or discussions on Federated Learning and Privacy.
            </p>
            <div className="space-y-2 text-slate-300">
              <p>Email: <a href={`mailto:${PROFILE.email}`} className="text-blue-400 hover:text-blue-300">{PROFILE.email}</a></p>
              <p>Phone: {PROFILE.phone}</p>
              <p>Address: {PROFILE.location}</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Referees</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {REFEREES.map((ref, idx) => (
                <div key={idx} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <User size={16} className="text-slate-400" />
                    <h3 className="font-bold text-white">{ref.name}</h3>
                  </div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">{ref.title}</p>
                  <p className="text-sm text-slate-300 mb-2">{ref.department}, {ref.institution}</p>
                  <a href={`mailto:${ref.email}`} className="text-sm text-blue-400 hover:text-blue-300">
                    {ref.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
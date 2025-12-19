import React, { useState } from 'react';
import { PUBLICATIONS } from '../constants';
import { FileText, Award, Clock, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Publication } from '../types';

export const Publications: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Journal' | 'Conference' | 'Under Review'>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredPubs = filter === 'All' 
    ? PUBLICATIONS 
    : PUBLICATIONS.filter(p => p.type === filter);

  const getIcon = (type: string) => {
    switch (type) {
      case 'Journal': return <FileText size={20} />;
      case 'Conference': return <Award size={20} />;
      default: return <Clock size={20} />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'Journal': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Conference': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-amber-100 text-amber-700 border-amber-200';
    }
  };

  const toggleAbstract = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="publications" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Publications</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A selected list of my research contributions in Federated Learning, Privacy, and Medical Imaging.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {['All', 'Journal', 'Conference', 'Under Review'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 ${
                filter === f 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
                  : 'bg-white text-slate-600 hover:bg-white hover:shadow-md hover:text-blue-600 border border-transparent hover:border-slate-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="grid gap-6">
          {filteredPubs.map((pub) => (
            <div 
              key={pub.id} 
              className={`group bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden ${expandedId === pub.id ? 'shadow-lg ring-1 ring-blue-100' : ''}`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                
                {/* Type Icon Badge */}
                <div className={`flex-shrink-0 p-3 rounded-xl border ${getColor(pub.type)} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {getIcon(pub.type)}
                </div>

                <div className="flex-1 w-full">
                  {/* Title Header */}
                  <div 
                    onClick={() => toggleAbstract(pub.id)}
                    className="cursor-pointer mb-3 select-none"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                        {pub.title}
                      </h3>
                      <button 
                        className={`flex-shrink-0 text-slate-400 group-hover:text-blue-500 transition-all duration-300 ${expandedId === pub.id ? 'rotate-180 bg-blue-50 p-1 rounded-full' : 'p-1'}`}
                        aria-label={expandedId === pub.id ? "Collapse abstract" : "Expand abstract"}
                      >
                        <ChevronDown size={24} />
                      </button>
                    </div>
                  </div>

                  {/* Authors */}
                  <p className="text-slate-600 text-base mb-4 font-medium">
                    {pub.authors}
                  </p>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-4 text-sm mb-2">
                    <span className={`px-3 py-1 rounded-md font-semibold text-xs uppercase tracking-wider ${getColor(pub.type).split(' ')[0]} ${getColor(pub.type).split(' ')[1]}`}>
                      {pub.type}
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 font-medium italic">
                      <span>{pub.venue}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                      <span>{pub.year}</span>
                    </div>
                  </div>

                  {/* Expandable Abstract Section */}
                  <div 
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${
                      expandedId === pub.id 
                        ? 'grid-rows-[1fr] opacity-100 mt-6' 
                        : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 relative">
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-xl"></div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Abstract</h4>
                        <p className="text-slate-700 leading-relaxed text-base">
                          {pub.abstract || "Abstract details not currently available."}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Click to view hint (only visible when closed) */}
                  <div className={`mt-4 text-sm font-medium text-blue-500 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${expandedId === pub.id ? 'hidden' : 'block'}`}>
                    <span>Click title to view abstract</span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
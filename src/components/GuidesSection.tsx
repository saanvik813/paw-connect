import React from 'react';
import { PetCareGuide } from '../types';

interface GuidesSectionProps {
  guides: PetCareGuide[];
  onSelectGuide: (guide: PetCareGuide) => void;
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({ guides, onSelectGuide }) => {
  return (
    <section id="pet-guides" className="py-16 bg-[#f4fbf6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[12px] font-bold text-[#a83301] uppercase tracking-wider">
              Adoption Counseling & Care
            </span>
            <h2 className="text-[32px] sm:text-[38px] font-black text-[#161d1a] tracking-tight mt-1">
              Pet Care Resources & Guides
            </h2>
            <p className="text-[15px] text-[#59413a] mt-2 max-w-xl">
              Written by certified animal welfare behaviorists and veterinary nutritionists to support you through every stage of adoption.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#dde4df] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video bg-[#e8f0ea] overflow-hidden">
                  <img
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={guide.image}
                  />
                  <span className="absolute top-3 left-3 bg-[#a83301] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                    {guide.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="text-[11px] text-[#59413a] font-semibold mb-1">
                    {guide.readTime}
                  </div>
                  <h3 className="font-bold text-[16px] text-[#161d1a] group-hover:text-[#a83301] transition-colors line-clamp-1">
                    {guide.title}
                  </h3>
                  <p className="text-[12px] text-[#59413a] mt-1.5 leading-relaxed line-clamp-2">
                    {guide.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectGuide(guide)}
                  className="w-full py-2 rounded-full bg-[#eef5f0] hover:bg-[#a83301] text-[#161d1a] hover:text-white font-semibold text-[12px] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Read Full Guide</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

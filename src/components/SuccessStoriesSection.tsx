import React from 'react';
import { SuccessStory } from '../types';

interface SuccessStoriesSectionProps {
  stories: SuccessStory[];
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({ stories }) => {
  return (
    <section id="success-stories" className="py-16 bg-[#f4fbf6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[12px] font-bold text-[#a83301] uppercase tracking-wider">
              Happy Tails & Transformations
            </span>
            <h2 className="text-[32px] sm:text-[38px] font-black text-[#161d1a] tracking-tight mt-1">
              Rescue Success Stories
            </h2>
            <p className="text-[15px] text-[#59413a] mt-2 max-w-xl">
              Real families, real transformations. Witness the life-altering difference a loving home creates for shelter animals.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[#2a674c] font-bold text-[13px] bg-white px-4 py-2 rounded-full border border-[#dde4df] shadow-xs">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span>2,400+ Total Placements Verified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#dde4df] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              {/* Before & After Photo Comparison */}
              <div className="relative">
                <div className="grid grid-cols-2 h-52 overflow-hidden">
                  <div className="relative group overflow-hidden bg-[#e8f0ea]">
                    <img
                      alt={`${story.petName} Before Adoption`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      src={story.beforeImage}
                    />
                    <span className="absolute bottom-2 left-2 bg-[#161d1a]/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase backdrop-blur-xs">
                      At Shelter
                    </span>
                  </div>
                  <div className="relative group overflow-hidden bg-[#e8f0ea]">
                    <img
                      alt={`${story.petName} In Forever Home`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      src={story.afterImage}
                    />
                    <span className="absolute bottom-2 left-2 bg-[#2a674c] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase backdrop-blur-xs">
                      Forever Home
                    </span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                  <span className="material-symbols-outlined text-[#fdae2f] text-[14px] fill-1">star</span>
                  <span className="text-[11px] font-bold text-[#161d1a]">5.0</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="font-bold text-[16px] text-[#161d1a] leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-[13px] text-[#59413a] mt-2 leading-relaxed italic">
                    "{story.description}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#dde4df]/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ffdbd0] text-[#a83301] font-bold text-[13px] flex items-center justify-center shrink-0">
                    {story.adopterInitials}
                  </div>
                  <div>
                    <div className="font-bold text-[13px] text-[#161d1a]">
                      {story.adopterName}
                    </div>
                    <div className="text-[11px] text-[#59413a]">
                      {story.timeline}
                    </div>
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

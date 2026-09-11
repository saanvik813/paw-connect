import React from 'react';

export const AdoptionProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Search & Filter',
      desc: 'Filter verified adoptable pets by species, energy level, house training, and kid/pet compatibility to find your ideal match.',
      icon: 'manage_search',
      color: 'bg-[#ffdbd0] text-[#a83301]',
    },
    {
      number: '02',
      title: 'Submit Application',
      desc: 'Fill out our unified 5-step digital application once. No repetitive paper forms, immediate transmission to shelter review teams.',
      icon: 'edit_document',
      color: 'bg-[#ffddb4] text-[#291800]',
    },
    {
      number: '03',
      title: 'Meet & Greet',
      desc: 'Schedule an on-site or virtual meeting with shelter coordinators. Test compatibility in person and ask questions directly in chat.',
      icon: 'diversity_1',
      color: 'bg-[#b1f0ce] text-[#0e5138]',
    },
    {
      number: '04',
      title: 'Welcome Home',
      desc: 'Finalize official microchip transfers, access veterinary medical history, and receive our 3-3-3 transition support care pack.',
      icon: 'home',
      color: 'bg-[#e3eae5] text-[#2a674c]',
    },
  ];

  return (
    <section id="adoption-process" className="py-16 bg-white border-y border-[#dde4df]/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] font-bold text-[#a83301] uppercase tracking-wider">
            Simple 4-Step Journey
          </span>
          <h2 className="text-[32px] sm:text-[38px] font-black text-[#161d1a] tracking-tight mt-1">
            How Adoption Works
          </h2>
          <p className="text-[15px] text-[#59413a] mt-2">
            We streamline the adoption process to keep shelter animals safe while matching them with loving, well-prepared forever homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#f4fbf6] rounded-3xl p-6 border border-[#dde4df] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center shadow-inner`}>
                    <span className="material-symbols-outlined text-[24px]">
                      {step.icon}
                    </span>
                  </div>
                  <span className="text-[20px] font-black text-[#8d7168]/60 group-hover:text-[#a83301] transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-[#161d1a] mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#59413a] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

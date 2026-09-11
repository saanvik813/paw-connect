import React from 'react';

export const WhyPawConnectSection: React.FC = () => {
  const pillars = [
    {
      title: 'Full Medical Transparency',
      desc: 'Every animal profile includes certified veterinary intake assessments, rabies/DHPP immunization status, spay/neuter dates, and microchip IDs.',
      icon: 'verified_user',
    },
    {
      title: 'Direct Shelter Messaging',
      desc: 'No automated call centers or third-party brokers. Message foster parents and shelter case managers directly to ask about temperament.',
      icon: 'forum',
    },
    {
      title: '3-3-3 Transition Support',
      desc: 'We don’t stop when you sign the adoption papers. Access behavioral counseling, training resources, and post-placement check-ins.',
      icon: 'family_restroom',
    },
    {
      title: 'Strict No-Kill Network',
      desc: 'We prioritize urgent foster callouts, senior animals, and special needs companions who deserve extra patience and love.',
      icon: 'volunteer_activism',
    },
  ];

  return (
    <section id="why-pawconnect" className="py-16 bg-white border-b border-[#dde4df]/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] font-bold text-[#a83301] uppercase tracking-wider">
            Our Standard of Ethics
          </span>
          <h2 className="text-[32px] sm:text-[38px] font-black text-[#161d1a] tracking-tight mt-1">
            Why Adopt Through PawConnect?
          </h2>
          <p className="text-[15px] text-[#59413a] mt-2">
            Built from the ground up to eliminate shelter stress and protect both animals and adopters throughout their journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#f4fbf6] border border-[#dde4df] shadow-xs flex flex-col justify-between hover:border-[#a83301]/40 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ffdbd0] text-[#a83301] flex items-center justify-center mb-4 shadow-inner">
                  <span className="material-symbols-outlined text-[24px]">{p.icon}</span>
                </div>
                <h3 className="text-[18px] font-bold text-[#161d1a] mb-2">{p.title}</h3>
                <p className="text-[13px] text-[#59413a] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

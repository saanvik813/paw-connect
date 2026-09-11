import React from 'react';
import { Shelter } from '../types';

interface SheltersSectionProps {
  shelters: Shelter[];
  onContactShelter: (shelterName: string) => void;
}

export const SheltersSection: React.FC<SheltersSectionProps> = ({
  shelters,
  onContactShelter,
}) => {
  return (
    <section id="shelters-network" className="py-16 bg-white border-b border-[#dde4df]/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[12px] font-bold text-[#a83301] uppercase tracking-wider">
              Trusted Non-Profit Allies
            </span>
            <h2 className="text-[32px] sm:text-[38px] font-black text-[#161d1a] tracking-tight mt-1">
              Verified Shelter Network
            </h2>
            <p className="text-[15px] text-[#59413a] mt-2 max-w-xl">
              We partner directly with certified municipal rescues, 501(c)(3) charities, and no-kill sanctuaries to give animals safe refuge.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[13px] text-[#59413a]">Want to register your rescue?</span>
            <button
              onClick={() => onContactShelter('Austin Pets Alive!')}
              className="text-[13px] font-bold text-[#a83301] hover:underline cursor-pointer"
            >
              Partner with Us →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shelters.map((shelter) => (
            <div
              key={shelter.id}
              className="bg-[#f4fbf6] rounded-3xl p-6 border border-[#dde4df] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between gap-5"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#ffdbd0] text-[#a83301] flex items-center justify-center font-bold text-[18px] shadow-inner">
                      <span className="material-symbols-outlined">{shelter.avatarIcon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[17px] text-[#161d1a] flex items-center gap-1">
                        {shelter.name}
                        <span className="material-symbols-outlined text-[#2a674c] text-[16px] fill-1">
                          verified
                        </span>
                      </h3>
                      <p className="text-[12px] text-[#59413a]">{shelter.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full border border-[#dde4df] text-[12px] font-bold text-[#161d1a]">
                    <span className="material-symbols-outlined text-[#fdae2f] text-[14px] fill-1">star</span>
                    <span>{shelter.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 text-[12px] text-[#59413a] my-4">
                  <div className="flex items-center justify-between">
                    <span>Adoption Placements:</span>
                    <span className="font-bold text-[#161d1a]">{shelter.adoptionsCount} animals</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Available Sanctuary Pets:</span>
                    <span className="font-bold text-[#161d1a]">{shelter.activePetsCount} looking for homes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Direct Hotline:</span>
                    <span className="font-medium text-[#161d1a]">{shelter.phone}</span>
                  </div>
                </div>

                {/* Capacity Bar */}
                <div className="bg-white p-3 rounded-2xl border border-[#dde4df]/60">
                  <div className="flex items-center justify-between text-[11px] font-semibold mb-1">
                    <span className="text-[#59413a]">Shelter Foster Capacity</span>
                    <span className="text-[#6b4500] font-bold">{shelter.capacityRate}% Filled</span>
                  </div>
                  <div className="w-full bg-[#e8f0ea] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#fdae2f] h-full rounded-full"
                      style={{ width: `${shelter.capacityRate}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#dde4df]/60 flex gap-2">
                <button
                  onClick={() => onContactShelter(shelter.name)}
                  className="w-full py-2.5 rounded-full bg-[#a83301] hover:bg-[#ca4a1c] text-white font-semibold text-[13px] transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>Contact Coordinator</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

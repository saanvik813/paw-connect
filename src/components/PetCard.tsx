import React from 'react';
import { Pet } from '../types';

interface PetCardProps {
  pet: Pet;
  isSaved: boolean;
  onToggleSave: (pet: Pet) => void;
  onViewProfile: (pet: Pet) => void;
  onAdopt: (pet: Pet) => void;
}

export const PetCard: React.FC<PetCardProps> = ({
  pet,
  isSaved,
  onToggleSave,
  onViewProfile,
  onAdopt,
}) => {
  return (
    <div
      className={`bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col border border-[#dde4df]/60 ${
        pet.isUrgent ? 'ring-2 ring-[#fdae2f]' : ''
      }`}
    >
      {/* Pet Image Banner */}
      <div className="relative w-full aspect-[4/3] bg-[#e8f0ea] overflow-hidden group">
        <img
          alt={`${pet.name}, a ${pet.ageExact} ${pet.gender} ${pet.breed}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={pet.image}
          loading="lazy"
        />

        {/* Status Badge */}
        {pet.isUrgent ? (
          <span className="absolute top-3 left-3 bg-[#fdae2f] text-[#6b4500] px-3 py-1 rounded-full font-bold text-[12px] flex items-center gap-1 shadow-xs animate-pulse">
            <span className="material-symbols-outlined text-[14px]">timer</span> Urgent Foster / Adopt
          </span>
        ) : (
          <span className="absolute top-3 left-3 bg-[#b1f0ce] text-[#0e5138] px-3 py-1 rounded-full font-semibold text-[12px] flex items-center gap-1 shadow-xs">
            <span className="material-symbols-outlined text-[14px]">check_circle</span> Available
          </span>
        )}

        {/* Favorite Heart Button */}
        <button
          aria-label={`Favorite ${pet.name}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(pet);
          }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center transition-all shadow-xs cursor-pointer ${
            isSaved ? 'text-[#a83301] scale-110' : 'text-[#59413a] hover:text-[#a83301]'
          }`}
          type="button"
        >
          <span
            className={`material-symbols-outlined text-[20px] ${
              isSaved ? 'fill-1 text-[#a83301]' : ''
            }`}
          >
            favorite
          </span>
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-grow justify-between gap-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-[20px] text-[#161d1a] leading-tight">
                  {pet.name}
                </h3>
                {pet.isSpecialNeeds && (
                  <span className="bg-[#ffdad6] text-[#ba1a1a] text-[10px] px-2 py-0.5 rounded-full font-bold">
                    Special Needs
                  </span>
                )}
              </div>
              <p className="text-[12px] text-[#59413a] mt-0.5">
                {pet.breed} • {pet.ageExact} • {pet.gender}
              </p>
            </div>
            <span className="text-[12px] text-[#2a674c] font-semibold flex items-center gap-0.5 shrink-0">
              <span className="material-symbols-outlined text-[14px]">location_on</span> {pet.city}
            </span>
          </div>

          {/* Tag Chips */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {pet.shelterStayDays && pet.shelterStayDays > 30 && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#ffddb4] text-[#291800] font-bold text-[11px]">
                Shelter Stay: {pet.shelterStayDays}d
              </span>
            )}
            {pet.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-full bg-[#e8f0ea] text-[#59413a] font-medium text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#dde4df]/40">
          <button
            onClick={() => onViewProfile(pet)}
            className="w-full py-2 rounded-full bg-[#e3eae5] text-[#161d1a] font-semibold text-[13px] hover:bg-[#dde4df] transition-colors cursor-pointer"
          >
            View Profile
          </button>
          <button
            onClick={() => onAdopt(pet)}
            className={`w-full py-2 rounded-full font-semibold text-[13px] transition-all shadow-xs cursor-pointer ${
              pet.isUrgent
                ? 'bg-[#835500] text-white hover:bg-[#633f00]'
                : 'bg-[#a83301] text-white hover:bg-[#ca4a1c]'
            }`}
          >
            {pet.isUrgent ? 'Fast-Track Adopt' : 'Adopt Me'}
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Pet } from '../types';

interface PetModalProps {
  pet: Pet | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (pet: Pet) => void;
  isSaved: boolean;
  onToggleSave: (pet: Pet) => void;
  onOpenChatWithShelter: (shelterName: string) => void;
}

export const PetModal: React.FC<PetModalProps> = ({
  pet,
  isOpen,
  onClose,
  onApply,
  isSaved,
  onToggleSave,
  onOpenChatWithShelter,
}) => {
  if (!isOpen || !pet) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#2b322f]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col relative animate-in fade-in zoom-in-95 duration-200 border border-[#dde4df]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/85 backdrop-blur-md text-[#161d1a] flex items-center justify-center hover:bg-white transition-colors shadow-sm cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        {/* Hero Photo Banner */}
        <div className="relative w-full h-72 sm:h-80 bg-[#e8f0ea]">
          <img
            alt={pet.name}
            className="w-full h-full object-cover"
            src={pet.image}
          />
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span
              className={`px-3 py-1 rounded-full font-semibold text-[12px] shadow-xs flex items-center gap-1 ${
                pet.isUrgent
                  ? 'bg-[#fdae2f] text-[#6b4500]'
                  : 'bg-[#2a674c] text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">
                {pet.isUrgent ? 'timer' : 'verified'}
              </span>
              {pet.isUrgent ? 'Urgent Foster / Adopt' : 'Available for Adoption'}
            </span>
            <span className="bg-white/90 backdrop-blur-md text-[#161d1a] px-3 py-1 rounded-full font-semibold text-[12px] shadow-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#2a674c]">
                location_on
              </span>{' '}
              {pet.city}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex flex-col gap-5">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-[28px] text-[#161d1a] leading-tight">
                  {pet.name}
                </h2>
                {pet.isSpecialNeeds && (
                  <span className="bg-[#ffdad6] text-[#ba1a1a] text-[11px] px-2.5 py-0.5 rounded-full font-bold">
                    Special Needs Companion
                  </span>
                )}
              </div>
              <p className="text-[14px] text-[#59413a] mt-0.5">
                {pet.breed} • {pet.ageExact} • {pet.gender} • {pet.size} Size
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onToggleSave(pet)}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors shadow-xs cursor-pointer ${
                  isSaved
                    ? 'bg-[#ffdbd0] text-[#a83301]'
                    : 'bg-[#e3eae5] text-[#161d1a] hover:text-[#a83301]'
                }`}
                title={isSaved ? 'Remove from favorites' : 'Save to favorites'}
              >
                <span className={`material-symbols-outlined text-[22px] ${isSaved ? 'fill-1' : ''}`}>
                  favorite
                </span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onApply(pet);
                }}
                className="px-6 py-2.5 rounded-full bg-[#a83301] text-white font-bold text-[14px] hover:bg-[#ca4a1c] transition-colors shadow-md cursor-pointer"
              >
                {pet.isUrgent ? 'Fast-Track Adopt' : 'Apply to Adopt'}
              </button>
            </div>
          </div>

          {/* Compatibility Meter */}
          <div className="bg-[#eef5f0] p-4 rounded-2xl grid grid-cols-3 gap-2 text-center border border-[#dde4df]/50">
            <div className="flex flex-col items-center">
              <span className="text-[12px] text-[#59413a]">Good with Dogs</span>
              <span className="text-[13px] font-bold text-[#2a674c] flex items-center gap-1 mt-0.5">
                <span className="material-symbols-outlined text-[16px]">
                  {pet.goodWithDogs ? 'check_circle' : 'cancel'}
                </span>{' '}
                {pet.goodWithDogs ? 'Yes' : 'Prefers Solo'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[12px] text-[#59413a]">Good with Kids</span>
              <span className="text-[13px] font-bold text-[#2a674c] flex items-center gap-1 mt-0.5">
                <span className="material-symbols-outlined text-[16px]">
                  {pet.goodWithKids ? 'check_circle' : 'info'}
                </span>{' '}
                {pet.goodWithKids ? 'Gentle' : 'Adults Preferred'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[12px] text-[#59413a]">House Trained</span>
              <span className="text-[13px] font-bold text-[#2a674c] flex items-center gap-1 mt-0.5">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>{' '}
                {pet.isHouseTrained ? '100% Trained' : 'In Progress'}
              </span>
            </div>
          </div>

          {/* Health Checklist */}
          <div>
            <h4 className="font-bold text-[16px] text-[#161d1a] mb-2">
              Health & Medical Verification
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="bg-[#e8f0ea] p-2.5 rounded-xl flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2a674c] text-[20px]">vaccines</span>
                <span className="text-[12px] font-semibold text-[#161d1a]">Fully Vaccinated</span>
              </div>
              <div className="bg-[#e8f0ea] p-2.5 rounded-xl flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2a674c] text-[20px]">medical_services</span>
                <span className="text-[12px] font-semibold text-[#161d1a]">Spayed / Neutered</span>
              </div>
              <div className="bg-[#e8f0ea] p-2.5 rounded-xl flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2a674c] text-[20px]">contactless</span>
                <span className="text-[12px] font-semibold text-[#161d1a]">Microchipped</span>
              </div>
              <div className="bg-[#e8f0ea] p-2.5 rounded-xl flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2a674c] text-[20px]">favorite</span>
                <span className="text-[12px] font-semibold text-[#161d1a]">Dewormed</span>
              </div>
            </div>
            {pet.medicalInfo.notes && (
              <p className="text-[12px] text-[#59413a] mt-2 italic bg-[#f4fbf6] p-2 rounded-lg border border-[#dde4df]/40">
                Medical Notes: {pet.medicalInfo.notes}
              </p>
            )}
          </div>

          {/* Bio Story */}
          <div>
            <h4 className="font-bold text-[16px] text-[#161d1a] mb-1">
              Meet {pet.name}
            </h4>
            <p className="text-[14px] text-[#59413a] leading-relaxed">
              {pet.bio}
            </p>
          </div>

          {/* Shelter Info & Contact */}
          <div className="bg-[#eef5f0] p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#dde4df]/50">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#ffdbd0] text-[#a83301] flex items-center justify-center font-bold text-[14px]">
                APA
              </div>
              <div>
                <div className="font-bold text-[14px] text-[#161d1a] flex items-center gap-1">
                  {pet.shelterName}
                  <span className="material-symbols-outlined text-[#2a674c] text-[16px] fill-1">
                    verified
                  </span>
                </div>
                <div className="text-[12px] text-[#59413a]">
                  Response rate: Under 2 hours • Verified Non-Profit Rescue
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenChatWithShelter(pet.shelterName);
              }}
              className="px-4 py-2 rounded-full bg-white text-[#161d1a] hover:bg-[#e8f0ea] font-semibold text-[13px] transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px] text-[#2a674c]">forum</span>
              <span>Ask Question</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

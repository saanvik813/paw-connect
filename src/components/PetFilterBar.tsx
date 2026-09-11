import React from 'react';
import { SpeciesType, AgeType, GenderType, SizeType } from '../types';

export interface FilterOptions {
  keyword: string;
  city: string;
  species: SpeciesType;
  age: AgeType;
  gender: GenderType;
  size: SizeType;
  goodWithKids: boolean;
  isHouseTrained: boolean;
  isUrgent: boolean;
  isSpecialNeeds: boolean;
  sortBy: 'relevance' | 'newest' | 'urgent';
}

interface PetFilterBarProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  totalMatching: number;
  onReset: () => void;
}

export const PetFilterBar: React.FC<PetFilterBarProps> = ({
  filters,
  setFilters,
  totalMatching,
  onReset,
}) => {
  const updateField = <K extends keyof FilterOptions>(key: K, value: FilterOptions[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleChip = (chipKey: 'goodWithKids' | 'isHouseTrained' | 'isUrgent' | 'isSpecialNeeds') => {
    setFilters((prev) => ({ ...prev, [chipKey]: !prev[chipKey] }));
  };

  return (
    <div className="bg-white rounded-3xl p-5 lg:p-6 shadow-md flex flex-col gap-4 border border-[#dde4df]/60">
      {/* Top Row: Search & Location */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="md:col-span-7 relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#8d7168]">
            search
          </span>
          <input
            type="text"
            value={filters.keyword}
            onChange={(e) => updateField('keyword', e.target.value)}
            placeholder="Search by pet name or breed (e.g., Luna, Golden Retriever, Milo)..."
            className="w-full pl-12 pr-4 py-3 bg-[#eef5f0] rounded-xl text-[#161d1a] placeholder:text-[#8d7168] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#a83301] shadow-inner"
          />
        </div>
        <div className="md:col-span-5 relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#8d7168]">
            location_on
          </span>
          <input
            type="text"
            value={filters.city}
            onChange={(e) => updateField('city', e.target.value)}
            placeholder="Enter city (e.g. Austin, Delhi, Seattle)..."
            className="w-full pl-12 pr-4 py-3 bg-[#eef5f0] rounded-xl text-[#161d1a] placeholder:text-[#8d7168] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#a83301] shadow-inner"
          />
        </div>
      </div>

      {/* Middle Row: Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="block text-[12px] font-semibold text-[#59413a] mb-1">Species</label>
          <select
            value={filters.species}
            onChange={(e) => updateField('species', e.target.value as SpeciesType)}
            className="w-full px-3 py-2.5 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#a83301] cursor-pointer"
          >
            <option value="all">All Species</option>
            <option value="Dogs">🐶 Dogs</option>
            <option value="Cats">🐱 Cats</option>
            <option value="Rabbits">🐰 Rabbits</option>
            <option value="Birds">🐦 Birds</option>
            <option value="Small Pets">🐹 Small Pets</option>
          </select>
        </div>

        <div>
          <label className="block text-[12px] font-semibold text-[#59413a] mb-1">Age</label>
          <select
            value={filters.age}
            onChange={(e) => updateField('age', e.target.value as AgeType)}
            className="w-full px-3 py-2.5 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#a83301] cursor-pointer"
          >
            <option value="all">All Ages</option>
            <option value="Puppy/Kitten">Puppy / Kitten (&lt; 1 yr)</option>
            <option value="Young">Young (1-3 yrs)</option>
            <option value="Adult">Adult (3-7 yrs)</option>
            <option value="Senior">Senior (8+ yrs)</option>
          </select>
        </div>

        <div>
          <label className="block text-[12px] font-semibold text-[#59413a] mb-1">Gender</label>
          <select
            value={filters.gender}
            onChange={(e) => updateField('gender', e.target.value as GenderType)}
            className="w-full px-3 py-2.5 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#a83301] cursor-pointer"
          >
            <option value="all">All Genders</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>

        <div>
          <label className="block text-[12px] font-semibold text-[#59413a] mb-1">Size</label>
          <select
            value={filters.size}
            onChange={(e) => updateField('size', e.target.value as SizeType)}
            className="w-full px-3 py-2.5 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#a83301] cursor-pointer"
          >
            <option value="all">All Sizes</option>
            <option value="Small">Small (&lt; 20 lbs)</option>
            <option value="Medium">Medium (20-50 lbs)</option>
            <option value="Large">Large (&gt; 50 lbs)</option>
          </select>
        </div>
      </div>

      {/* Bottom Row: Quick Filter Chips & Reset */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[12px] text-[#59413a] font-medium mr-1">Quick Filters:</span>
          <button
            type="button"
            onClick={() => toggleChip('goodWithKids')}
            className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
              filters.goodWithKids
                ? 'bg-[#a83301] text-white'
                : 'bg-[#e8f0ea] text-[#161d1a] hover:bg-[#e3eae5]'
            }`}
          >
            Good with Kids
          </button>
          <button
            type="button"
            onClick={() => toggleChip('isHouseTrained')}
            className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
              filters.isHouseTrained
                ? 'bg-[#a83301] text-white'
                : 'bg-[#e8f0ea] text-[#161d1a] hover:bg-[#e3eae5]'
            }`}
          >
            House Trained
          </button>
          <button
            type="button"
            onClick={() => toggleChip('isUrgent')}
            className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
              filters.isUrgent
                ? 'bg-[#a83301] text-white'
                : 'bg-[#e8f0ea] text-[#161d1a] hover:bg-[#e3eae5]'
            }`}
          >
            Urgent Adoption
          </button>
          <button
            type="button"
            onClick={() => toggleChip('isSpecialNeeds')}
            className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
              filters.isSpecialNeeds
                ? 'bg-[#a83301] text-white'
                : 'bg-[#e8f0ea] text-[#161d1a] hover:bg-[#e3eae5]'
            }`}
          >
            Special Needs
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReset}
            className="px-4 py-2 rounded-full text-[#59413a] hover:text-[#161d1a] text-[13px] font-semibold transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
          <button
            type="button"
            onClick={() => {
              const grid = document.getElementById('pets-grid');
              if (grid) grid.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2 rounded-full bg-[#a83301] text-white text-[13px] font-semibold hover:bg-[#ca4a1c] transition-colors shadow-xs cursor-pointer"
          >
            Apply Search
          </button>
        </div>
      </div>
    </div>
  );
};

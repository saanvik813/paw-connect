import React, { useState } from 'react';
import { Pet } from '../types';

interface AddPetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPet: (pet: Pet) => void;
}

export const AddPetModal: React.FC<AddPetModalProps> = ({ isOpen, onClose, onAddPet }) => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState<'Dogs' | 'Cats' | 'Rabbits' | 'Birds' | 'Small Pets'>('Dogs');
  const [breed, setBreed] = useState('');
  const [ageExact, setAgeExact] = useState('2 Years');
  const [ageGroup, setAgeGroup] = useState<'Puppy/Kitten' | 'Young' | 'Adult' | 'Senior'>('Young');
  const [gender, setGender] = useState<'Female' | 'Male'>('Female');
  const [size, setSize] = useState<'Small' | 'Medium' | 'Large'>('Medium');
  const [city, setCity] = useState('Austin, TX');
  const [isUrgent, setIsUrgent] = useState(false);
  const [bio, setBio] = useState('');
  const [tagsInput, setTagsInput] = useState('Friendly, Playful, House Trained');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !breed.trim()) return;

    // Use one of the high quality hotlinked animal photos based on species
    let sampleImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAog3-POjA3qwrhinbQlvt75NHftb5TJbijPldiMcg151zMxRn8RDMk0NrGQNRRHCW6zkJf3nqWojbd2mLJkilhOtuPCfGfAB0fNkHhlCMuw2HrpvMNdEmRmyN9S0xgE3WdnXy6z6MaOlabiiZYp9RfRMOkXEznYjKzvfgETf1r1xMVUBtXpE0ACdlW5P3EL08G8yvS8Jr7CQuZRcPWtpmtcjrgEt9xFD4-0oUnk1GL-tvecYyw0xk_AQ';
    if (species === 'Cats') {
      sampleImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsRiEInB8SKpAgjVNYb54qsB1mnRZcy8t4W11Ax0Q4K86zqzKjElEILLzHmOX8jC-k67bc3zZfCF9s_3maJjhmMYr010QloMHIPG5GOcrz4GYj8w4yF432epy86az6tVDqICnph8fOgTLKfriaC3QQDgHYK4PaRlmGC0h75gwqrZSgpJ3Jm15HhSjxCCXHC62WQRxV_QqrgIRazPIbDYgWjLifltGCCzbn9TFqb2oTFguHYPJcCzXRbQ';
    } else if (species === 'Rabbits') {
      sampleImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCofLQBzi-yOML-R614AG8Gq78k5E9Ra5SnoPUY8yFwxSzC0RdmP2VLHtlyzId9Q-Q9BLPcYy7AoufME4pG9TlKzH16gWpC3z_BBTXvvFrX6KcK5cykQWEk18l6XfVnJtWSrY6D2Tgww7-47ljKDYRuVmFMvvCAUs4abAqDmMWCH4jKjuGMzz3Tow-UgweNe4tTR1xauPO6scKhKdZd3ZSHBRUpJTA75HqVdGOC9FcHFQHk4hsfyETgLw';
    }

    const newPet: Pet = {
      id: `pet-custom-${Date.now()}`,
      name: name.trim(),
      species,
      breed: breed.trim(),
      ageExact,
      ageGroup,
      gender,
      size,
      city,
      shelterName: 'Austin Pets Alive!',
      image: sampleImg,
      isUrgent,
      isSpecialNeeds: false,
      goodWithKids: true,
      goodWithDogs: true,
      goodWithCats: true,
      isHouseTrained: true,
      shelterStayDays: 1,
      tags: tagsInput.split(',').map((t) => t.trim()).filter(Boolean),
      bio: bio.trim() || `${name} is a newly admitted companion awaiting a loving adoptive family.`,
      medicalInfo: {
        vaccinated: true,
        spayedNeutered: true,
        microchipped: true,
        dewormed: true,
        notes: 'Intake exam complete, healthy baseline.'
      }
    };

    onAddPet(newPet);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#2b322f]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative border border-[#dde4df]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#e8f0ea] flex items-center justify-center text-[#161d1a] hover:bg-[#dde4df] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <h2 className="text-[22px] font-bold text-[#161d1a] mb-1">
          Publish Rescued Pet Listing
        </h2>
        <p className="text-[13px] text-[#59413a] mb-5">
          Austin Pets Alive! coordinator intake form.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[12px] font-semibold text-[#59413a] mb-1">Pet Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Barnaby"
                className="w-full px-3 py-2 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#a83301]"
              />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-[#59413a] mb-1">Species</label>
              <select
                value={species}
                onChange={(e) => setSpecies(e.target.value as any)}
                className="w-full px-3 py-2 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#a83301]"
              >
                <option value="Dogs">Dogs</option>
                <option value="Cats">Cats</option>
                <option value="Rabbits">Rabbits</option>
                <option value="Birds">Birds</option>
                <option value="Small Pets">Small Pets</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[12px] font-semibold text-[#59413a] mb-1">Breed *</label>
              <input
                type="text"
                required
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                placeholder="e.g., Australian Cattle Dog"
                className="w-full px-3 py-2 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#a83301]"
              />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-[#59413a] mb-1">Age Description</label>
              <input
                type="text"
                value={ageExact}
                onChange={(e) => setAgeExact(e.target.value)}
                placeholder="e.g., 2 Years or 8 Months"
                className="w-full px-3 py-2 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#a83301]"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-[12px] font-semibold text-[#59413a] mb-1">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as any)}
                className="w-full px-3 py-2 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[13px]"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-[#59413a] mb-1">Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as any)}
                className="w-full px-3 py-2 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[13px]"
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-[#59413a] mb-1">Age Group</label>
              <select
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value as any)}
                className="w-full px-3 py-2 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[13px]"
              >
                <option value="Puppy/Kitten">Puppy/Kitten</option>
                <option value="Young">Young</option>
                <option value="Adult">Adult</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#59413a] mb-1">City & State</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-3 py-2 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[13px]"
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#59413a] mb-1">Temperament Tags (comma-separated)</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full px-3 py-2 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[13px]"
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#59413a] mb-1">Bio / Story</label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Describe personality, background, and ideal home environment..."
              className="w-full px-3 py-2 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#a83301]"
            />
          </div>

          <label className="flex items-center gap-2 cursor-pointer pt-1">
            <input
              type="checkbox"
              checked={isUrgent}
              onChange={(e) => setIsUrgent(e.target.checked)}
              className="text-[#a83301]"
            />
            <span className="text-[13px] font-semibold text-[#6b4500]">
              Flag as Urgent Adoption / Foster Needed
            </span>
          </label>

          <div className="pt-3 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full text-[#59413a] hover:text-[#161d1a] font-semibold text-[13px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-[#a83301] text-white font-bold text-[13px] hover:bg-[#ca4a1c] shadow-xs cursor-pointer"
            >
              Publish Pet Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

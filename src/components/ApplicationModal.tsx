import React, { useState } from 'react';
import { Pet, AdoptionApplication } from '../types';

interface ApplicationModalProps {
  pet: Pet | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (newApp: AdoptionApplication) => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  pet,
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Form states
  const [fullName, setFullName] = useState('Sarah Anderson');
  const [email, setEmail] = useState('sarah.anderson@example.com');
  const [phone, setPhone] = useState('(512) 555-0198');
  const [cityZip, setCityZip] = useState('Austin, TX 78704');
  const [housingType, setHousingType] = useState('Single Family House (Owned)');
  const [hasYard, setHasYard] = useState(true);
  const [experience, setExperience] = useState('Yes, lifelong pet owner');
  const [currentPets, setCurrentPets] = useState('None currently');
  const [hoursAlone, setHoursAlone] = useState('0 - 2 hours (Remote work)');
  const [vetClinic, setVetClinic] = useState('South Congress Veterinary Clinic');
  const [agreeCare, setAgreeCare] = useState(true);
  const [agreeReturn, setAgreeReturn] = useState(true);

  if (!isOpen || !pet) return null;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Create application
      const newApp: AdoptionApplication = {
        id: `app-${Date.now()}`,
        petId: pet.id,
        petName: pet.name,
        petBreed: pet.breed,
        petImage: pet.image,
        shelterName: pet.shelterName,
        submittedAt: 'Just now',
        applicantName: fullName,
        applicantEmail: email,
        applicantPhone: phone,
        applicantCityZip: cityZip,
        housingType,
        hasYard,
        petExperience: experience,
        currentPets,
        hoursAlone,
        preferredVet: vetClinic,
        status: 'Under Shelter Review',
        notes: `Applied for ${pet.name} (${pet.breed}). Standard background check initiated.`
      };

      onSubmitSuccess(newApp);
      onClose();
      setCurrentStep(1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progressPct = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-[#2b322f]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200 border border-[#dde4df]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close application modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#e8f0ea] text-[#161d1a] flex items-center justify-center hover:bg-[#dde4df] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[12px] font-bold text-[#a83301] uppercase tracking-wider">
            Adoption Application
          </span>
          <h2 className="text-[24px] font-bold text-[#161d1a] mt-0.5">
            Adopt {pet.name} ({pet.breed})
          </h2>
          <p className="text-[14px] text-[#59413a]">
            Standard PawConnect universal adoption form. Takes about 2 minutes.
          </p>
        </div>

        {/* Step Indicator Progress Bar */}
        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#dde4df] w-full z-0"></div>
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#a83301] transition-all duration-300 z-0"
            style={{ width: `${progressPct}%` }}
          ></div>

          {[1, 2, 3, 4, 5].map((stepNum) => {
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;
            return (
              <div
                key={stepNum}
                className={`z-10 w-8 h-8 rounded-full font-bold text-[12px] flex items-center justify-center shadow-xs transition-all ${
                  isCompleted
                    ? 'bg-[#2a674c] text-white'
                    : isCurrent
                    ? 'bg-[#a83301] text-white ring-4 ring-[#ffdbd0]'
                    : 'bg-[#e8f0ea] text-[#59413a]'
                }`}
              >
                {isCompleted ? (
                  <span className="material-symbols-outlined text-[16px]">check</span>
                ) : (
                  stepNum
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Form Step Content */}
        <div className="flex-grow">
          {currentStep === 1 && (
            <div className="flex flex-col gap-4 animate-in fade-in">
              <h3 className="font-bold text-[18px] text-[#161d1a]">
                Step 1: Your Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#59413a] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[14px] focus:ring-2 focus:ring-[#a83301] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#59413a] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[14px] focus:ring-2 focus:ring-[#a83301] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#59413a] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[14px] focus:ring-2 focus:ring-[#a83301] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#59413a] mb-1">
                    City & Zip Code
                  </label>
                  <input
                    type="text"
                    value={cityZip}
                    onChange={(e) => setCityZip(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[14px] focus:ring-2 focus:ring-[#a83301] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="flex flex-col gap-4 animate-in fade-in">
              <h3 className="font-bold text-[18px] text-[#161d1a]">
                Step 2: Living Situation & Home
              </h3>
              <div>
                <label className="block text-[12px] font-semibold text-[#59413a] mb-1">
                  Housing Type
                </label>
                <select
                  value={housingType}
                  onChange={(e) => setHousingType(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[14px] focus:ring-2 focus:ring-[#a83301] focus:outline-none"
                >
                  <option>Single Family House (Owned)</option>
                  <option>Single Family House (Rented - Landlord Approval)</option>
                  <option>Apartment / Condo (Pet-friendly building)</option>
                  <option>Townhome / Duplex</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[#59413a] mb-2">
                  Do you have an enclosed yard or outdoor exercise area?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    onClick={() => setHasYard(true)}
                    className={`p-3 rounded-xl flex items-center gap-3 cursor-pointer border transition-all ${
                      hasYard
                        ? 'bg-[#eef5f0] border-[#2a674c] shadow-xs'
                        : 'bg-white border-[#dde4df]'
                    }`}
                  >
                    <input
                      type="radio"
                      checked={hasYard}
                      onChange={() => setHasYard(true)}
                      className="text-[#a83301]"
                    />
                    <span className="text-[13px] font-medium text-[#161d1a]">
                      Yes, fully enclosed yard (6ft+)
                    </span>
                  </label>
                  <label
                    onClick={() => setHasYard(false)}
                    className={`p-3 rounded-xl flex items-center gap-3 cursor-pointer border transition-all ${
                      !hasYard
                        ? 'bg-[#eef5f0] border-[#2a674c] shadow-xs'
                        : 'bg-white border-[#dde4df]'
                    }`}
                  >
                    <input
                      type="radio"
                      checked={!hasYard}
                      onChange={() => setHasYard(false)}
                      className="text-[#a83301]"
                    />
                    <span className="text-[13px] font-medium text-[#161d1a]">
                      No private yard (Nearby dog parks)
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="flex flex-col gap-4 animate-in fade-in">
              <h3 className="font-bold text-[18px] text-[#161d1a]">
                Step 3: Pet Experience & Current Animals
              </h3>
              <div>
                <label className="block text-[12px] font-semibold text-[#59413a] mb-1">
                  Have you owned or fostered a pet in the past 5 years?
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[14px] focus:ring-2 focus:ring-[#a83301] focus:outline-none"
                >
                  <option>Yes, lifelong pet owner</option>
                  <option>Yes, owned 1-2 pets previously</option>
                  <option>Active foster parent</option>
                  <option>First time pet adopter (We provide extra guides!)</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[#59413a] mb-1">
                  Current pets living in your household:
                </label>
                <input
                  type="text"
                  value={currentPets}
                  onChange={(e) => setCurrentPets(e.target.value)}
                  placeholder="e.g. 1 senior cat (indoor only), no other dogs..."
                  className="w-full px-4 py-2.5 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[14px] focus:ring-2 focus:ring-[#a83301] focus:outline-none"
                />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="flex flex-col gap-4 animate-in fade-in">
              <h3 className="font-bold text-[18px] text-[#161d1a]">
                Step 4: Daily Routine & Care Plan
              </h3>
              <div>
                <label className="block text-[12px] font-semibold text-[#59413a] mb-1">
                  How many hours per day will the pet typically be home alone?
                </label>
                <select
                  value={hoursAlone}
                  onChange={(e) => setHoursAlone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[14px] focus:ring-2 focus:ring-[#a83301] focus:outline-none"
                >
                  <option>0 - 2 hours (Someone works remotely)</option>
                  <option>3 - 5 hours</option>
                  <option>6 - 8 hours (Midday pet walker planned)</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[#59413a] mb-1">
                  Preferred Veterinary Clinic (if known):
                </label>
                <input
                  type="text"
                  value={vetClinic}
                  onChange={(e) => setVetClinic(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#eef5f0] rounded-xl text-[#161d1a] text-[14px] focus:ring-2 focus:ring-[#a83301] focus:outline-none"
                />
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="flex flex-col gap-4 animate-in fade-in">
              <h3 className="font-bold text-[18px] text-[#161d1a]">
                Step 5: Code of Ethics & Digital Pledge
              </h3>
              <div className="bg-[#eef5f0] p-4 rounded-2xl flex flex-col gap-3 border border-[#dde4df]">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeCare}
                    onChange={(e) => setAgreeCare(e.target.checked)}
                    className="mt-1 text-[#a83301] focus:ring-[#a83301]"
                  />
                  <span className="text-[13px] text-[#161d1a] leading-relaxed">
                    I promise to provide indoor shelter, veterinary preventative care, nutritious food,
                    and compassionate companionship for the animal's natural life.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeReturn}
                    onChange={(e) => setAgreeReturn(e.target.checked)}
                    className="mt-1 text-[#a83301] focus:ring-[#a83301]"
                  />
                  <span className="text-[13px] text-[#161d1a] leading-relaxed">
                    I agree that if life circumstances ever prevent me from caring for this pet,
                    I will contact PawConnect or the original rescue shelter partner before rehoming.
                  </span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#dde4df]">
          {currentStep > 1 ? (
            <button
              onClick={handlePrev}
              className="px-5 py-2.5 rounded-full text-[#59413a] hover:text-[#161d1a] font-semibold text-[14px] transition-colors cursor-pointer"
            >
              ← Back
            </button>
          ) : (
            <div></div>
          )}

          <button
            onClick={handleNext}
            disabled={currentStep === 5 && (!agreeCare || !agreeReturn)}
            className={`px-8 py-2.5 rounded-full font-bold text-[14px] transition-all shadow-md cursor-pointer ${
              currentStep === totalSteps
                ? 'bg-[#2a674c] text-white hover:bg-[#1e4835]'
                : 'bg-[#a83301] text-white hover:bg-[#ca4a1c]'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {currentStep === totalSteps ? 'Submit Application 🎉' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

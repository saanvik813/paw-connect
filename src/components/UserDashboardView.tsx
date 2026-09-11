import React from 'react';
import { AdoptionApplication, Pet } from '../types';

interface UserDashboardViewProps {
  applications: AdoptionApplication[];
  savedPets: Pet[];
  onRemoveFavorite: (pet: Pet) => void;
  onViewPet: (pet: Pet) => void;
  onBrowsePets: () => void;
  onOpenChat: (shelterName: string) => void;
}

export const UserDashboardView: React.FC<UserDashboardViewProps> = ({
  applications,
  savedPets,
  onRemoveFavorite,
  onViewPet,
  onBrowsePets,
  onOpenChat,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Profile & Overview Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#dde4df] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            alt="Sarah Anderson"
            className="w-16 h-16 rounded-full object-cover ring-4 ring-[#ffdbd0]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIuH3W0lSfvniBii3r_reJnvQeHEhBnc7v02OeIQ8u9cw1faOckfrxsXzJFX2XXE95eXqUTcAh3-ELOsDQ159GbaQVP0dFHo8USXA90zdm-4v7wWT4dskZ230wL5tdXyApaG5gPyWJi3O2dRwEeg4Kk6-PNW31EpBWizJwLl4Bz7pZO427etQja0uoyp_kI7J_HCq8ftCmLWOVsnVxzPxJJqvl6Hl5mKE3EIRZhCHv5mvVEwIQHmheNQ"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-[22px] font-bold text-[#161d1a]">Sarah Anderson</h1>
              <span className="bg-[#b1f0ce] text-[#0e5138] text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">verified</span> Verified Adopter
              </span>
            </div>
            <p className="text-[13px] text-[#59413a] mt-0.5">
              sarah.anderson@example.com • Austin, Texas (Zilker)
            </p>
          </div>
        </div>

        {/* Adopter Stat Badges */}
        <div className="flex items-center gap-3">
          <div className="bg-[#eef5f0] px-4 py-3 rounded-2xl text-center border border-[#dde4df]/50">
            <span className="text-[20px] font-black text-[#a83301] block leading-none">
              {applications.length}
            </span>
            <span className="text-[11px] font-semibold text-[#59413a] mt-1 block">
              Applications
            </span>
          </div>
          <div className="bg-[#eef5f0] px-4 py-3 rounded-2xl text-center border border-[#dde4df]/50">
            <span className="text-[20px] font-black text-[#6b4500] block leading-none">
              {savedPets.length}
            </span>
            <span className="text-[11px] font-semibold text-[#59413a] mt-1 block">
              Saved Pets
            </span>
          </div>
          <button
            onClick={onBrowsePets}
            className="px-5 py-3 rounded-2xl bg-[#a83301] text-white font-bold text-[13px] hover:bg-[#ca4a1c] transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px]">search</span>
            <span>Browse More Pets</span>
          </button>
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#dde4df]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[20px] font-bold text-[#161d1a]">My Adoption Applications</h2>
            <p className="text-[13px] text-[#59413a]">
              Real-time application status synced with shelter review desks
            </p>
          </div>
          <span className="text-[12px] font-semibold text-[#2a674c]">
            {applications.length} Active Records
          </span>
        </div>

        {applications.length === 0 ? (
          <div className="text-center py-12 bg-[#f4fbf6] rounded-2xl">
            <span className="material-symbols-outlined text-[48px] text-[#8d7168]">
              assignment_late
            </span>
            <p className="text-[15px] font-bold text-[#161d1a] mt-2">No active applications</p>
            <p className="text-[13px] text-[#59413a] max-w-sm mx-auto mt-1">
              Find a rescue companion you love and click "Adopt Me" to start your application!
            </p>
            <button
              onClick={onBrowsePets}
              className="mt-4 px-6 py-2 rounded-full bg-[#a83301] text-white text-[13px] font-bold hover:bg-[#ca4a1c] transition-colors"
            >
              Explore Adoptable Pets
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => {
              const isApproved = app.status.includes('Approved');
              return (
                <div
                  key={app.id}
                  className={`p-5 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    isApproved
                      ? 'bg-[#f4fbf6] border-[#b1f0ce] shadow-xs'
                      : 'bg-white border-[#dde4df] hover:border-[#a83301]/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      alt={app.petName}
                      className="w-16 h-16 rounded-2xl object-cover"
                      src={app.petImage}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[17px] text-[#161d1a]">
                          {app.petName}
                        </span>
                        <span className="text-[12px] text-[#59413a]">({app.petBreed})</span>
                      </div>
                      <div className="text-[12px] text-[#59413a] flex items-center gap-2 mt-0.5">
                        <span className="font-semibold text-[#161d1a]">{app.shelterName}</span>
                        <span>•</span>
                        <span>Submitted {app.submittedAt}</span>
                      </div>
                      {app.notes && (
                        <p className="text-[11px] text-[#2a674c] mt-1 bg-white/70 px-2.5 py-0.5 rounded-md inline-block font-medium">
                          Notes: {app.notes}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-center">
                    <span
                      className={`px-3.5 py-1.5 rounded-full font-bold text-[12px] flex items-center gap-1.5 shadow-2xs ${
                        isApproved
                          ? 'bg-[#b1f0ce] text-[#0e5138]'
                          : 'bg-[#ffddb4] text-[#291800]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        {isApproved ? 'check_circle' : 'hourglass_top'}
                      </span>
                      {app.status}
                    </span>

                    <button
                      onClick={() => onOpenChat(app.shelterName)}
                      className="px-4 py-2 rounded-full bg-white border border-[#dde4df] text-[#161d1a] hover:bg-[#eef5f0] text-[12px] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px] text-[#2a674c]">
                        chat
                      </span>
                      <span>Message Shelter</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Saved Pets Gallery */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#dde4df]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[20px] font-bold text-[#161d1a]">Saved Companion Wishlist</h2>
            <p className="text-[13px] text-[#59413a]">
              Animals you've marked as favorites for easy reference
            </p>
          </div>
          <span className="text-[12px] font-semibold text-[#6b4500]">
            {savedPets.length} Saved
          </span>
        </div>

        {savedPets.length === 0 ? (
          <div className="text-center py-10 bg-[#f4fbf6] rounded-2xl">
            <span className="material-symbols-outlined text-[40px] text-[#8d7168]">favorite_border</span>
            <p className="text-[14px] font-bold text-[#161d1a] mt-1">No saved pets yet</p>
            <p className="text-[12px] text-[#59413a]">
              Tap the heart icon on any pet card to save them to your wishlist.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {savedPets.map((pet) => (
              <div
                key={pet.id}
                className="bg-[#f4fbf6] rounded-2xl p-3 border border-[#dde4df] flex flex-col justify-between gap-3 group"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img
                    alt={pet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    src={pet.image}
                  />
                  <button
                    onClick={() => onRemoveFavorite(pet)}
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 text-[#a83301] flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                    title="Remove from favorites"
                  >
                    <span className="material-symbols-outlined text-[16px] fill-1">favorite</span>
                  </button>
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-[#161d1a]">{pet.name}</h4>
                  <p className="text-[12px] text-[#59413a]">{pet.breed} • {pet.city}</p>
                </div>
                <button
                  onClick={() => onViewPet(pet)}
                  className="w-full py-1.5 rounded-full bg-white text-[#161d1a] font-semibold text-[12px] hover:bg-[#e8f0ea] transition-colors border border-[#dde4df] cursor-pointer"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Post-Adoption Support Journey */}
      <div className="bg-[#eef5f0] rounded-3xl p-6 sm:p-8 border border-[#dde4df]">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-[#2a674c]">health_and_safety</span>
          <h3 className="font-bold text-[18px] text-[#161d1a]">
            PawConnect 3-3-3 Transition Guide
          </h3>
        </div>
        <p className="text-[13px] text-[#59413a] mb-6 max-w-2xl leading-relaxed">
          The first 3 months with your adopted companion are critical. Here is your personalized checklist to make settling in smooth and joyous.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-[#dde4df]/70">
            <span className="bg-[#ffdbd0] text-[#a83301] text-[11px] font-black px-2 py-0.5 rounded-full">
              Day 1 - 3
            </span>
            <h4 className="font-bold text-[14px] text-[#161d1a] mt-2">Quiet Decompression</h4>
            <p className="text-[12px] text-[#59413a] mt-1 leading-snug">
              Allow them to explore one quiet room. Keep routine feeding predictable and avoid visitor overwhelm.
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-[#dde4df]/70">
            <span className="bg-[#ffddb4] text-[#291800] text-[11px] font-black px-2 py-0.5 rounded-full">
              Week 1 - 3
            </span>
            <h4 className="font-bold text-[14px] text-[#161d1a] mt-2">Routine & Boundaries</h4>
            <p className="text-[12px] text-[#59413a] mt-1 leading-snug">
              Establish walking and feeding schedules. Begin gentle 5-minute positive reinforcement training cues.
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-[#dde4df]/70">
            <span className="bg-[#b1f0ce] text-[#0e5138] text-[11px] font-black px-2 py-0.5 rounded-full">
              Month 1 - 3
            </span>
            <h4 className="font-bold text-[14px] text-[#161d1a] mt-2">Trust & Lifelong Bonding</h4>
            <p className="text-[12px] text-[#59413a] mt-1 leading-snug">
              Deep emotional security is reached. Your companion feels safe, loved, and fully at home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

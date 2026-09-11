/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Pet, Shelter, SuccessStory, AdoptionApplication, ChatMessage, PetCareGuide, AppRole } from './types';
import {
  INITIAL_PETS,
  INITIAL_SHELTERS,
  INITIAL_STORIES,
  INITIAL_APPLICATIONS,
  INITIAL_MESSAGES,
  PET_CARE_GUIDES,
} from './data/mockData';
import { Header } from './components/Header';
import { RoleSwitcher } from './components/RoleSwitcher';
import { HeroSection } from './components/HeroSection';
import { PetCard } from './components/PetCard';
import { PetFilterBar, FilterOptions } from './components/PetFilterBar';
import { AdoptionProcessSection } from './components/AdoptionProcessSection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { SheltersSection } from './components/SheltersSection';
import { GuidesSection } from './components/GuidesSection';
import { WhyPawConnectSection } from './components/WhyPawConnectSection';
import { Footer } from './components/Footer';
import { PetModal } from './components/PetModal';
import { ApplicationModal } from './components/ApplicationModal';
import { ArticleModal } from './components/ArticleModal';
import { AddPetModal } from './components/AddPetModal';
import { ChatDrawer } from './components/ChatDrawer';
import { UserDashboardView } from './components/UserDashboardView';
import { ShelterDashboardView } from './components/ShelterDashboardView';
import { AdminDashboardView } from './components/AdminDashboardView';

const defaultFilters: FilterOptions = {
  keyword: '',
  city: '',
  species: 'all',
  age: 'all',
  gender: 'all',
  size: 'all',
  goodWithKids: false,
  isHouseTrained: false,
  isUrgent: false,
  isSpecialNeeds: false,
  sortBy: 'relevance',
};

export default function App() {
  const [activeRole, setActiveRole] = useState<AppRole>('adopter');
  const [pets, setPets] = useState<Pet[]>(INITIAL_PETS);
  const [shelters] = useState<Shelter[]>(INITIAL_SHELTERS);
  const [stories] = useState<SuccessStory[]>(INITIAL_STORIES);
  const [applications, setApplications] = useState<AdoptionApplication[]>(INITIAL_APPLICATIONS);
  const [savedPetIds, setSavedPetIds] = useState<string[]>(['pet-luna', 'pet-oliver']);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [guides] = useState<PetCareGuide[]>(PET_CARE_GUIDES);

  // Modals state
  const [filters, setFilters] = useState<FilterOptions>(defaultFilters);
  const [selectedPetForModal, setSelectedPetForModal] = useState<Pet | null>(null);
  const [selectedPetForApp, setSelectedPetForApp] = useState<Pet | null>(null);
  const [selectedGuide, setSelectedGuide] = useState<PetCareGuide | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatTargetShelter, setChatTargetShelter] = useState('Austin Pets Alive!');
  const [isAddPetOpen, setIsAddPetOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Filter and search logic
  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
      // Keyword search
      if (filters.keyword.trim()) {
        const query = filters.keyword.toLowerCase().trim();
        const matchesName = pet.name.toLowerCase().includes(query);
        const matchesBreed = pet.breed.toLowerCase().includes(query);
        const matchesTags = pet.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesBreed && !matchesTags) return false;
      }

      // City search
      if (filters.city.trim()) {
        const cityQuery = filters.city.toLowerCase().trim();
        if (!pet.city.toLowerCase().includes(cityQuery)) return false;
      }

      // Species
      if (filters.species !== 'all' && pet.species !== filters.species) {
        return false;
      }

      // Age Group
      if (filters.age !== 'all' && pet.ageGroup !== filters.age) {
        return false;
      }

      // Gender
      if (filters.gender !== 'all' && pet.gender !== filters.gender) {
        return false;
      }

      // Size
      if (filters.size !== 'all' && pet.size !== filters.size) {
        return false;
      }

      // Quick chips
      if (filters.goodWithKids && !pet.goodWithKids) return false;
      if (filters.isHouseTrained && !pet.isHouseTrained) return false;
      if (filters.isUrgent && !pet.isUrgent) return false;
      if (filters.isSpecialNeeds && !pet.isSpecialNeeds) return false;

      return true;
    });
  }, [pets, filters]);

  // Favorite toggle
  const handleToggleFavorite = (pet: Pet) => {
    if (savedPetIds.includes(pet.id)) {
      setSavedPetIds((prev) => prev.filter((id) => id !== pet.id));
      showToast(`Removed ${pet.name} from saved favorites.`);
    } else {
      setSavedPetIds((prev) => [...prev, pet.id]);
      showToast(`Saved ${pet.name} to your favorites!`);
    }
  };

  // Applications
  const handleApplicationSubmit = (newApp: AdoptionApplication) => {
    setApplications((prev) => [newApp, ...prev]);
    showToast(`Adoption application for ${newApp.petName} submitted successfully!`);
  };

  const handleUpdateAppStatus = (appId: string, status: AdoptionApplication['status']) => {
    setApplications((prev) =>
      prev.map((a) => (a.id === appId ? { ...a, status } : a))
    );
    showToast(`Application status updated to: "${status}".`);
  };

  // Add pet by shelter coordinator
  const handleAddPet = (newPet: Pet) => {
    setPets((prev) => [newPet, ...prev]);
    showToast(`New pet listing "${newPet.name}" published to Austin Pets Alive!`);
  };

  const handleTogglePetUrgent = (petId: string) => {
    setPets((prev) =>
      prev.map((p) => {
        if (p.id === petId) {
          const nextUrgent = !p.isUrgent;
          showToast(`${p.name} urgent flag set to ${nextUrgent ? 'ACTIVE' : 'OFF'}.`);
          return { ...p, isUrgent: nextUrgent };
        }
        return p;
      })
    );
  };

  // Chat message sending
  const handleSendMessage = (text: string) => {
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      senderName: 'Sarah Anderson',
      senderInitials: 'SA',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);

    // Simulated reply from shelter
    setTimeout(() => {
      let replyText = 'Thanks for your message! Our adoption team will follow up shortly.';
      if (text.toLowerCase().includes('cat')) {
        replyText = 'Luna and Milo have both passed gentle cat-testing evaluations with high marks!';
      } else if (text.toLowerCase().includes('hour') || text.toLowerCase().includes('visit')) {
        replyText = 'Our shelter visiting hours are Tuesday through Sunday, 11:00 AM to 6:00 PM.';
      } else if (text.toLowerCase().includes('fee') || text.toLowerCase().includes('cost')) {
        replyText = 'All adoption fees cover complete vaccinations, spay/neuter, microchipping, and are 100% tax-deductible.';
      }

      const coordinatorReply: ChatMessage = {
        id: `msg-reply-${Date.now()}`,
        sender: 'shelter',
        senderName: `${chatTargetShelter} Coordinator`,
        senderInitials: 'AP',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, coordinatorReply]);
    }, 1500);
  };

  const handleOpenChatWith = (shelterName: string) => {
    setChatTargetShelter(shelterName);
    setIsChatOpen(true);
  };

  const savedPetsList = useMemo(() => {
    return pets.filter((p) => savedPetIds.includes(p.id));
  }, [pets, savedPetIds]);

  return (
    <div className="min-h-screen bg-[#f4fbf6] text-[#161d1a] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#161d1a] text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-[13px] font-bold animate-in fade-in slide-in-from-top-4 duration-200 border border-white/20">
          <span className="material-symbols-outlined text-[18px] text-[#fdae2f]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation Header */}
      <Header
        activeRole={activeRole}
        setActiveRole={setActiveRole}
        savedPetsCount={savedPetIds.length}
        onOpenFavorites={() => setActiveRole('user-dash')}
        onSearchClick={() => {
          setActiveRole('adopter');
          setTimeout(() => {
            const el = document.getElementById('pet-search');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }}
        onAdoptClick={() => {
          setActiveRole('adopter');
          setTimeout(() => {
            const el = document.getElementById('pet-search');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }}
      />

      {/* Interactive Role Switcher */}
      <RoleSwitcher
        activeRole={activeRole}
        setActiveRole={setActiveRole}
        applicationsCount={applications.length}
        onToggleChat={() => setIsChatOpen(!isChatOpen)}
        isChatOpen={isChatOpen}
      />

      {/* Main View Area */}
      <main className="flex-grow pt-2">
        {activeRole === 'adopter' && (
          <>
            {/* Hero Banner Section */}
            <HeroSection
              onExploreClick={() => {
                const el = document.getElementById('pet-search');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onHowItWorksClick={() => {
                const el = document.getElementById('adoption-process');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onMeetLuna={() => {
                const luna = pets.find((p) => p.name === 'Luna') || pets[0];
                setSelectedPetForModal(luna);
              }}
            />

            {/* Adopt & Browse Section with Filter Bar and Pets Grid */}
            <section id="pet-search" className="py-14 max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-[12px] font-bold text-[#a83301] uppercase tracking-wider">
                    Adoptable Companions
                  </span>
                  <h2 className="text-[32px] sm:text-[38px] font-black text-[#161d1a] tracking-tight mt-1">
                    Meet Your New Best Friend
                  </h2>
                  <p className="text-[15px] text-[#59413a] mt-1.5 max-w-xl">
                    Search through rescued dogs, cats, and small animals. Every profile is backed by verified medical and behavioral health records.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[13px] text-[#59413a] font-medium bg-white px-4 py-2 rounded-full border border-[#dde4df] shadow-xs self-start md:self-end">
                  <span>Showing:</span>
                  <span className="font-bold text-[#161d1a]">
                    {filteredPets.length} of {pets.length} Companions
                  </span>
                </div>
              </div>

              {/* Comprehensive Search & Filter Controls */}
              <div className="mb-10">
                <PetFilterBar
                  filters={filters}
                  setFilters={setFilters}
                  totalMatching={filteredPets.length}
                  onReset={() => setFilters(defaultFilters)}
                />
              </div>

              {/* Pets Grid */}
              <div id="pets-grid">
                {filteredPets.length === 0 ? (
                  <div className="bg-white rounded-3xl p-12 text-center border border-[#dde4df] shadow-xs">
                    <span className="material-symbols-outlined text-[48px] text-[#8d7168]">
                      search_off
                    </span>
                    <h3 className="text-[20px] font-bold text-[#161d1a] mt-3">
                      No pets match your current criteria
                    </h3>
                    <p className="text-[14px] text-[#59413a] max-w-md mx-auto mt-1">
                      Try adjusting or clearing your filters to see more wonderful companions waiting for a home.
                    </p>
                    <button
                      onClick={() => setFilters(defaultFilters)}
                      className="mt-5 px-6 py-2.5 rounded-full bg-[#a83301] text-white font-bold text-[13px] hover:bg-[#ca4a1c] transition-colors shadow-xs cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredPets.map((pet) => (
                      <PetCard
                        key={pet.id}
                        pet={pet}
                        isSaved={savedPetIds.includes(pet.id)}
                        onToggleSave={handleToggleFavorite}
                        onViewProfile={(p) => setSelectedPetForModal(p)}
                        onAdopt={(p) => setSelectedPetForApp(p)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* How It Works Section */}
            <AdoptionProcessSection />

            {/* Happy Tails & Transformation Stories */}
            <SuccessStoriesSection stories={stories} />

            {/* Verified Shelter Network */}
            <SheltersSection
              shelters={shelters}
              onContactShelter={handleOpenChatWith}
            />

            {/* Educational Pet Care Guides */}
            <GuidesSection
              guides={guides}
              onSelectGuide={(g) => setSelectedGuide(g)}
            />

            {/* Why PawConnect Ethics Section */}
            <WhyPawConnectSection />
          </>
        )}

        {/* Perspective: User Dashboard ("My Adoptions") */}
        {activeRole === 'user-dash' && (
          <UserDashboardView
            applications={applications}
            savedPets={savedPetsList}
            onRemoveFavorite={handleToggleFavorite}
            onViewPet={(pet) => setSelectedPetForModal(pet)}
            onBrowsePets={() => {
              setActiveRole('adopter');
              setTimeout(() => {
                const el = document.getElementById('pet-search');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            onOpenChat={handleOpenChatWith}
          />
        )}

        {/* Perspective: Shelter Coordinator Desk */}
        {activeRole === 'shelter-dash' && (
          <ShelterDashboardView
            shelter={shelters[0]}
            pets={pets}
            applications={applications}
            onOpenAddPet={() => setIsAddPetOpen(true)}
            onUpdateAppStatus={handleUpdateAppStatus}
            onTogglePetUrgent={handleTogglePetUrgent}
            onOpenChat={handleOpenChatWith}
          />
        )}

        {/* Perspective: Admin Hub */}
        {activeRole === 'admin-dash' && (
          <AdminDashboardView shelters={shelters} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigateHome={() => {
          setActiveRole('adopter');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Pet Detail Modal */}
      <PetModal
        pet={selectedPetForModal}
        isOpen={!!selectedPetForModal}
        onClose={() => setSelectedPetForModal(null)}
        onApply={(pet) => {
          setSelectedPetForModal(null);
          setSelectedPetForApp(pet);
        }}
        isSaved={selectedPetForModal ? savedPetIds.includes(selectedPetForModal.id) : false}
        onToggleSave={handleToggleFavorite}
        onOpenChatWithShelter={handleOpenChatWith}
      />

      {/* 5-Step Universal Adoption Application Wizard Modal */}
      <ApplicationModal
        pet={selectedPetForApp}
        isOpen={!!selectedPetForApp}
        onClose={() => setSelectedPetForApp(null)}
        onSubmitSuccess={handleApplicationSubmit}
      />

      {/* Pet Care Guide Reader Modal */}
      <ArticleModal
        guide={selectedGuide}
        isOpen={!!selectedGuide}
        onClose={() => setSelectedGuide(null)}
      />

      {/* Shelter Add Rescued Pet Modal */}
      <AddPetModal
        isOpen={isAddPetOpen}
        onClose={() => setIsAddPetOpen(false)}
        onAddPet={handleAddPet}
      />

      {/* Floating Shelter Chat Drawer */}
      <ChatDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        messages={messages}
        onSendMessage={handleSendMessage}
        targetShelterName={chatTargetShelter}
      />
    </div>
  );
}

import React from 'react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onHowItWorksClick: () => void;
  onMeetLuna: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onHowItWorksClick,
  onMeetLuna,
}) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-[#f4fbf6] to-[#e3eae5]/40">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Mission & Headline */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbd0] text-[#a83301] text-[13px] font-bold shadow-2xs">
            <span className="material-symbols-outlined text-[16px]">pets</span>
            <span>Austin & Global Rescue Network</span>
          </div>

          <h1 className="text-[38px] sm:text-[48px] lg:text-[56px] font-black tracking-tight text-[#161d1a] leading-[1.1]">
            Every Paw Deserves <br className="hidden sm:inline" />
            a <span className="text-[#a83301]">Loving Home</span>
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[#59413a] max-w-xl leading-relaxed">
            Connecting compassionate people with shelter pets waiting for a second chance. Verified non-profit shelters, transparent medical histories, and dedicated post-adoption guidance.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onExploreClick}
              className="px-7 py-3.5 rounded-full bg-[#a83301] text-white font-bold text-[15px] hover:bg-[#ca4a1c] transition-all shadow-md hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
              <span>Meet Adoptable Pets</span>
            </button>

            <button
              onClick={onHowItWorksClick}
              className="px-6 py-3.5 rounded-full bg-white text-[#161d1a] hover:bg-[#eef5f0] font-semibold text-[15px] transition-all border border-[#dde4df] shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] text-[#2a674c]">
                play_circle
              </span>
              <span>How Adoption Works</span>
            </button>
          </div>

          {/* Live Impact Counters */}
          <div className="pt-6 border-t border-[#dde4df]/60 grid grid-cols-3 gap-4">
            <div>
              <div className="text-[24px] sm:text-[28px] font-black text-[#161d1a] leading-none">
                2,400+
              </div>
              <div className="text-[12px] sm:text-[13px] text-[#59413a] font-medium mt-1">
                Pets Placed Safely
              </div>
            </div>
            <div>
              <div className="text-[24px] sm:text-[28px] font-black text-[#2a674c] leading-none">
                98.6%
              </div>
              <div className="text-[12px] sm:text-[13px] text-[#59413a] font-medium mt-1">
                Happy Forever Homes
              </div>
            </div>
            <div>
              <div className="text-[24px] sm:text-[28px] font-black text-[#6b4500] leading-none">
                38
              </div>
              <div className="text-[12px] sm:text-[13px] text-[#59413a] font-medium mt-1">
                Verified Shelters
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Featured Pet Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#dde4df] group">
            {/* Luna Hero Image */}
            <div className="relative aspect-[4/3] bg-[#e8f0ea] overflow-hidden">
              <img
                alt="Luna, Golden Retriever"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAog3-POjA3qwrhinbQlvt75NHftb5TJbijPldiMcg151zMxRn8RDMk0NrGQNRRHCW6zkJf3nqWojbd2mLJkilhOtuPCfGfAB0fNkHhlCMuw2HrpvMNdEmRmyN9S0xgE3WdnXy6z6MaOlabiiZYp9RfRMOkXEznYjKzvfgETf1r1xMVUBtXpE0ACdlW5P3EL08G8yvS8Jr7CQuZRcPWtpmtcjrgEt9xFD4-0oUnk1GL-tvecYyw0xk_AQ"
              />
              <span className="absolute top-4 left-4 bg-[#b1f0ce] text-[#0e5138] font-bold text-[12px] px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">verified</span> Featured Companion
              </span>
              <button
                onClick={onMeetLuna}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#a83301] flex items-center justify-center shadow-xs hover:scale-110 transition-transform cursor-pointer"
                title="View Luna's Profile"
              >
                <span className="material-symbols-outlined text-[20px] fill-1">favorite</span>
              </button>
            </div>

            {/* Featured Pet Info */}
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="text-[20px] font-bold text-[#161d1a]">Meet Luna</h3>
                <p className="text-[13px] text-[#59413a] mt-0.5">
                  Golden Retriever • 2 Years • Austin Pets Alive!
                </p>
              </div>
              <button
                onClick={onMeetLuna}
                className="px-4 py-2 rounded-full bg-[#a83301] text-white text-[13px] font-bold hover:bg-[#ca4a1c] transition-colors shadow-xs cursor-pointer"
              >
                View Profile
              </button>
            </div>
          </div>

          {/* Floating Impact Card */}
          <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-[#dde4df] flex items-center gap-3 max-w-[260px]">
            <div className="w-10 h-10 rounded-full bg-[#ffdbd0] text-[#a83301] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">favorite</span>
            </div>
            <div>
              <div className="text-[12px] font-bold text-[#161d1a] leading-tight">
                150+ Adoptions
              </div>
              <div className="text-[11px] text-[#59413a] leading-tight mt-0.5">
                completed this month through verified partners!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

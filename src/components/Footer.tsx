import React from 'react';

interface FooterProps {
  onNavigateHome: () => void;
  onOpenChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHome, onOpenChat }) => {
  return (
    <footer className="bg-[#161d1a] text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="PawConnect Brand Logo"
                className="h-9 w-auto brightness-200"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9DvLzCc8OamTjZA8FS8z4he3U8N3SucXtUmVg3LLwlaZrvAkhUCx0QGFCz9TDASDQT2gW67tHI9Ufh5cfV7wKYj_mDwzUTy0DbmMB739PmOouLoXA2r5CNRLM6ufWP7sOt9T47QWIuGI8fWOSnslF7NjboZU_Iy84dsc72RXOBOrYeTx-sf2iYXGxNntzyUwXadex7wX9hsfxJKR2NDToPlxkqJGUNZhZD8Kr-WmDdTVMHCdAhtV0jQ"
              />
              <span className="font-bold text-[20px] text-white tracking-tight">
                PawConnect
              </span>
            </div>
            <p className="text-[13px] text-white/70 max-w-sm leading-relaxed">
              Every paw deserves a loving home. We partner directly with vetted 501(c)(3) animal welfare non-profits to eliminate adoption hurdles and ensure humane companionship.
            </p>
            <div className="pt-2 flex items-center gap-3 text-white/80">
              <span className="text-[12px]">Emergency Rescue Coordination:</span>
              <span className="font-bold text-[13px] text-[#fdae2f]">1-800-PAW-HELP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[14px] text-white uppercase tracking-wider mb-3">
              Adoption
            </h4>
            <ul className="space-y-2 text-[13px] text-white/70">
              <li>
                <a href="#pet-search" className="hover:text-white transition-colors">
                  Find Adoptable Dogs
                </a>
              </li>
              <li>
                <a href="#pet-search" className="hover:text-white transition-colors">
                  Adoptable Cats & Kittens
                </a>
              </li>
              <li>
                <a href="#pet-search" className="hover:text-white transition-colors">
                  Urgent Foster Animals
                </a>
              </li>
              <li>
                <a href="#pet-search" className="hover:text-white transition-colors">
                  Special Needs Pets
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-[14px] text-white uppercase tracking-wider mb-3">
              Pet Parents
            </h4>
            <ul className="space-y-2 text-[13px] text-white/70">
              <li>
                <a href="#pet-guides" className="hover:text-white transition-colors">
                  New Pet Checklist
                </a>
              </li>
              <li>
                <a href="#pet-guides" className="hover:text-white transition-colors">
                  The 3-3-3 Rule Explained
                </a>
              </li>
              <li>
                <a href="#pet-guides" className="hover:text-white transition-colors">
                  Nutrition Guidelines
                </a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-white transition-colors">
                  Read Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Shelter Partners */}
          <div>
            <h4 className="font-bold text-[14px] text-white uppercase tracking-wider mb-3">
              Shelter Partners
            </h4>
            <ul className="space-y-2 text-[13px] text-white/70">
              <li>
                <button
                  onClick={onOpenChat}
                  className="hover:text-white transition-colors text-left"
                >
                  Rescue Desk Portal
                </button>
              </li>
              <li>
                <a href="#shelters-network" className="hover:text-white transition-colors">
                  Verified Directory
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenChat}
                  className="hover:text-white transition-colors text-left"
                >
                  Apply as Shelter Partner
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/60">
          <p>© {new Date().getFullYear()} PawConnect Animal Welfare Network. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Adoption</span>
            <span className="hover:text-white cursor-pointer">Shelter Verification Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

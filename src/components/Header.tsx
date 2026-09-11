import React, { useState } from 'react';
import { AppRole, Pet } from '../types';

interface HeaderProps {
  activeRole: AppRole;
  setActiveRole: (role: AppRole) => void;
  savedPetsCount: number;
  onOpenFavorites: () => void;
  onSearchClick: () => void;
  onAdoptClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeRole,
  setActiveRole,
  savedPetsCount,
  onOpenFavorites,
  onSearchClick,
  onAdoptClick,
}) => {
  const [activeNav, setActiveNav] = useState('Home');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    { id: 1, title: 'Application Approved!', body: 'Austin Pets Alive! approved your application for Oliver.', time: '1h ago', unread: true },
    { id: 2, title: 'New Pet Alert', body: 'A 2-year old Golden Retriever matching your preference was listed in Austin.', time: '4h ago', unread: true },
    { id: 3, title: 'Vaccine Reminder', body: '30-day post adoption booster check scheduled.', time: '1d ago', unread: false },
  ]);

  const navItems = [
    { label: 'Home', path: '#', targetRole: 'adopter' as AppRole },
    { label: 'Adopt & Browse', path: '#pet-search', targetRole: 'adopter' as AppRole },
    { label: 'How It Works', path: '#adoption-process', targetRole: 'adopter' as AppRole },
    { label: 'Success Stories', path: '#success-stories', targetRole: 'adopter' as AppRole },
    { label: 'Shelters', path: '#shelters-network', targetRole: 'adopter' as AppRole },
    { label: 'Pet Resources', path: '#pet-guides', targetRole: 'adopter' as AppRole },
    { label: 'About Us', path: '#why-pawconnect', targetRole: 'adopter' as AppRole },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setActiveNav(item.label);
    if (activeRole !== 'adopter') {
      setActiveRole('adopter');
    }
    if (item.path.startsWith('#') && item.path.length > 1) {
      setTimeout(() => {
        const el = document.querySelector(item.path);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-40 bg-[#f4fbf6]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(30,37,34,0.04)] border-b border-[#dde4df]/50">
      <div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setActiveRole('adopter');
              setActiveNav('Home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            aria-label="PawConnect Home"
          >
            <img
              alt="PawConnect Brand Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9DvLzCc8OamTjZA8FS8z4he3U8N3SucXtUmVg3LLwlaZrvAkhUCx0QGFCz9TDASDQT2gW67tHI9Ufh5cfV7wKYj_mDwzUTy0DbmMB739PmOouLoXA2r5CNRLM6ufWP7sOt9T47QWIuGI8fWOSnslF7NjboZU_Iy84dsc72RXOBOrYeTx-sf2iYXGxNntzyUwXadex7wX9hsfxJKR2NDToPlxkqJGUNZhZD8Kr-WmDdTVMHCdAhtV0jQ"
            />
            <div className="flex flex-col">
              <span className="font-bold text-[18px] text-[#161d1a] tracking-tight leading-none group-hover:text-[#a83301] transition-colors">
                PawConnect
              </span>
              <span className="text-[12px] text-[#59413a] hidden sm:inline-block leading-tight font-medium mt-0.5">
                Every paw deserves a loving home
              </span>
            </div>
          </button>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeNav === item.label && activeRole === 'adopter';
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`text-[14px] font-semibold px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#ca4a1c] text-[#fffbff] shadow-[0_2px_8px_rgba(202,74,28,0.25)]'
                    : 'text-[#59413a] hover:text-[#161d1a] hover:bg-[#e3eae5]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Navigation Actions */}
        <div className="flex items-center gap-2">
          {/* Quick Search Button */}
          <button
            onClick={onSearchClick}
            aria-label="Search pets"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#59413a] hover:text-[#161d1a] hover:bg-[#e8f0ea] transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>

          {/* Notifications Button */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="Notifications"
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#59413a] hover:text-[#161d1a] hover:bg-[#e8f0ea] transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#a83301] text-white text-[10px] flex items-center justify-center font-bold shadow-xs">
                3
              </span>
            </button>

            {/* Notifications Popover */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-[#dde4df] p-3 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#dde4df] px-1">
                  <span className="font-bold text-[14px] text-[#161d1a]">Notifications</span>
                  <span className="text-[11px] text-[#2a674c] font-semibold cursor-pointer hover:underline">Mark all read</span>
                </div>
                <div className="space-y-2 mt-2 max-h-64 overflow-y-auto">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-2.5 rounded-xl text-left transition-colors ${
                        n.unread ? 'bg-[#f4fbf6] border border-[#b1f0ce]' : 'hover:bg-[#eef5f0]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[12px] text-[#161d1a]">{n.title}</span>
                        <span className="text-[10px] text-[#59413a]">{n.time}</span>
                      </div>
                      <p className="text-[11px] text-[#59413a] mt-0.5 leading-snug">{n.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Saved Favorites Button */}
          <button
            onClick={onOpenFavorites}
            aria-label="Saved Favorites"
            className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#59413a] hover:text-[#161d1a] hover:bg-[#e8f0ea] transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">favorite</span>
            <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#fdae2f] text-[#6b4500] text-[10px] flex items-center justify-center font-bold shadow-xs">
              {savedPetsCount}
            </span>
          </button>

          <div className="h-6 w-[1px] bg-[#dde4df] hidden sm:block"></div>

          {/* Log In Link */}
          <button
            onClick={() => setActiveRole('user-dash')}
            className="hidden sm:inline-flex text-[14px] font-semibold text-[#59413a] hover:text-[#161d1a] px-3 py-1.5 rounded-full transition-colors cursor-pointer"
          >
            Log In
          </button>

          {/* Adopt a Pet Button */}
          <button
            onClick={onAdoptClick}
            className="hidden md:inline-flex items-center gap-1.5 bg-[#a83301] text-white text-[14px] font-semibold px-5 py-2 rounded-full shadow-[0_4px_14px_rgba(202,74,28,0.3)] hover:bg-[#ca4a1c] transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">pets</span>
            <span>Adopt a Pet</span>
          </button>

          {/* User Profile Avatar */}
          <button
            onClick={() => setActiveRole('user-dash')}
            className="flex items-center gap-1 cursor-pointer focus:outline-none"
            title="View Sarah's Profile & Adoptions"
          >
            <img
              alt="Sarah's Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#a83301]/20 hover:ring-[#a83301] transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIuH3W0lSfvniBii3r_reJnvQeHEhBnc7v02OeIQ8u9cw1faOckfrxsXzJFX2XXE95eXqUTcAh3-ELOsDQ159GbaQVP0dFHo8USXA90zdm-4v7wWT4dskZ230wL5tdXyApaG5gPyWJi3O2dRwEeg4Kk6-PNW31EpBWizJwLl4Bz7pZO427etQja0uoyp_kI7J_HCq8ftCmLWOVsnVxzPxJJqvl6Hl5mKE3EIRZhCHv5mvVEwIQHmheNQ"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

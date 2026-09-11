import React from 'react';
import { AppRole } from '../types';

interface RoleSwitcherProps {
  activeRole: AppRole;
  setActiveRole: (role: AppRole) => void;
  applicationsCount: number;
  onToggleChat: () => void;
  isChatOpen: boolean;
}

export const RoleSwitcher: React.FC<RoleSwitcherProps> = ({
  activeRole,
  setActiveRole,
  applicationsCount,
  onToggleChat,
  isChatOpen,
}) => {
  return (
    <section className="w-full bg-[#e3eae5] py-2 sticky top-20 z-30 shadow-xs backdrop-blur-md bg-opacity-95 border-b border-[#dde4df]">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-2 text-[12px] font-semibold">
        <div className="flex items-center gap-1.5 text-[#59413a]">
          <span className="material-symbols-outlined text-[18px] text-[#a83301]">view_quilt</span>
          <span className="font-bold text-[#161d1a]">Interactive View:</span>
          <span className="text-[11px] font-normal hidden md:inline text-[#59413a]">
            Test multi-role perspectives & workflows
          </span>
        </div>

        {/* Role Pill Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#f4fbf6] rounded-full shadow-inner overflow-x-auto max-w-full">
          <button
            onClick={() => {
              setActiveRole('adopter');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              activeRole === 'adopter'
                ? 'bg-[#a83301] text-white shadow-xs font-bold'
                : 'text-[#59413a] hover:text-[#161d1a] hover:bg-[#e8f0ea]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">favorite</span>
            <span>Adopter Portal</span>
          </button>

          <button
            onClick={() => {
              setActiveRole('user-dash');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              activeRole === 'user-dash'
                ? 'bg-[#a83301] text-white shadow-xs font-bold'
                : 'text-[#59413a] hover:text-[#161d1a] hover:bg-[#e8f0ea]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">dashboard</span>
            <span>
              My Adoptions{' '}
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-1 ${
                  activeRole === 'user-dash'
                    ? 'bg-white text-[#a83301]'
                    : 'bg-[#ffdbd0] text-[#390b00]'
                }`}
              >
                {applicationsCount}
              </span>
            </span>
          </button>

          <button
            onClick={() => {
              setActiveRole('shelter-dash');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              activeRole === 'shelter-dash'
                ? 'bg-[#a83301] text-white shadow-xs font-bold'
                : 'text-[#59413a] hover:text-[#161d1a] hover:bg-[#e8f0ea]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">home_work</span>
            <span>Shelter Desk</span>
          </button>

          <button
            onClick={() => {
              setActiveRole('admin-dash');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              activeRole === 'admin-dash'
                ? 'bg-[#a83301] text-white shadow-xs font-bold'
                : 'text-[#59413a] hover:text-[#161d1a] hover:bg-[#e8f0ea]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
            <span>Admin Hub</span>
          </button>
        </div>

        {/* Chat Drawer Toggle Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleChat}
            className={`relative px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 shadow-xs cursor-pointer ${
              isChatOpen
                ? 'bg-[#2a674c] text-white'
                : 'bg-[#f4fbf6] text-[#59413a] hover:text-[#a83301] hover:bg-[#eef5f0]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] text-[#2a674c] group-hover:text-[#a83301]">
              forum
            </span>
            <span className="hidden sm:inline font-semibold">Shelter Chat</span>
            <span className="w-2 h-2 rounded-full bg-[#a83301] animate-ping ml-0.5"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

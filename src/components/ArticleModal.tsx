import React from 'react';
import { PetCareGuide } from '../types';

interface ArticleModalProps {
  guide: PetCareGuide | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ guide, isOpen, onClose }) => {
  if (!isOpen || !guide) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#2b322f]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col relative animate-in fade-in zoom-in-95 duration-200 border border-[#dde4df]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close guide"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/85 backdrop-blur-md text-[#161d1a] flex items-center justify-center hover:bg-white transition-colors shadow-sm cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Article Image Banner */}
        <div className="relative w-full h-56 bg-[#e8f0ea] overflow-hidden">
          <img
            alt={guide.title}
            className="w-full h-full object-cover"
            src={guide.image}
          />
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <span className="bg-[#a83301] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
              {guide.category}
            </span>
            <span className="bg-white/90 backdrop-blur-md text-[#161d1a] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
              {guide.readTime}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-4">
          <h2 className="font-bold text-[24px] text-[#161d1a] leading-tight">
            {guide.title}
          </h2>
          <p className="text-[14px] text-[#2a674c] font-medium italic border-l-2 border-[#2a674c] pl-3 py-0.5">
            {guide.summary}
          </p>

          <div className="space-y-3.5 text-[14px] text-[#59413a] leading-relaxed pt-2">
            {guide.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Key Takeaways Card */}
          <div className="bg-[#eef5f0] p-4 rounded-2xl border border-[#dde4df] mt-2">
            <div className="flex items-center gap-2 text-[#2a674c] font-bold text-[13px] mb-1">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>PawConnect Foster Counselor Advice</span>
            </div>
            <p className="text-[12px] text-[#161d1a] leading-relaxed">
              Every companion is unique. When in doubt, consult your shelter case coordinator or schedule a complimentary 1-on-1 virtual call with our certified animal behaviorists.
            </p>
          </div>

          <div className="pt-3 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-[#a83301] text-white font-semibold text-[13px] hover:bg-[#ca4a1c] transition-colors cursor-pointer"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

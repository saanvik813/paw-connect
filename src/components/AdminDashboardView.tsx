import React, { useState } from 'react';
import { Shelter } from '../types';

interface AdminDashboardViewProps {
  shelters: Shelter[];
  onVerifyShelter?: (shelterId: string) => void;
}

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({ shelters }) => {
  const [shelterList, setShelterList] = useState(shelters);
  const [pendingVerifications, setPendingVerifications] = useState([
    {
      id: 'req-1',
      name: 'Heartland Animal Sanctuary',
      city: 'Chicago, IL',
      einTaxId: '36-4198201',
      submittedDate: 'Yesterday',
      inspected: true,
    },
    {
      id: 'req-2',
      name: 'Paws of Hope Rescue',
      city: 'Portland, OR',
      einTaxId: '93-1823940',
      submittedDate: '3 days ago',
      inspected: true,
    },
  ]);

  const handleApproveVerification = (reqId: string, name: string, city: string) => {
    setPendingVerifications((prev) => prev.filter((p) => p.id !== reqId));
    setShelterList((prev) => [
      ...prev,
      {
        id: `shelter-${Date.now()}`,
        name,
        location: city,
        type: '501(c)(3) Rescue Network',
        rating: 5.0,
        adoptionsCount: 12,
        activePetsCount: 8,
        verified: true,
        avatarIcon: 'pets',
        avatarColor: 'bg-primary-fixed text-primary',
        phone: '(555) 019-2831',
        email: 'info@rescue.org',
        capacityRate: 65,
      },
    ]);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Admin Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#dde4df] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#a83301]">admin_panel_settings</span>
            <span className="text-[12px] font-bold text-[#a83301] uppercase tracking-wider">
              System Administration
            </span>
          </div>
          <h1 className="text-[24px] font-bold text-[#161d1a] mt-1">
            PawConnect Platform Operations
          </h1>
          <p className="text-[13px] text-[#59413a]">
            Global rescue network auditing, shelter verification compliance, and adoption telemetry.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#b1f0ce] text-[#0e5138] text-[12px] font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0e5138] animate-pulse"></span>
            Live Telemetry Online
          </span>
        </div>
      </div>

      {/* Network Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-[#dde4df] shadow-xs">
          <div className="text-[12px] font-semibold text-[#59413a]">Total Platform Adoptions</div>
          <div className="text-[30px] font-black text-[#a83301] mt-2 leading-none">
            2,410+
          </div>
          <p className="text-[11px] text-[#2a674c] mt-2 font-medium">
            +142 completions this month
          </p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#dde4df] shadow-xs">
          <div className="text-[12px] font-semibold text-[#59413a]">Verified Shelter Partners</div>
          <div className="text-[30px] font-black text-[#161d1a] mt-2 leading-none">
            {shelterList.length + 35}
          </div>
          <p className="text-[11px] text-[#59413a] mt-2 font-medium">
            Across 18 metropolitan areas
          </p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#dde4df] shadow-xs">
          <div className="text-[12px] font-semibold text-[#59413a]">Avg. Placement Duration</div>
          <div className="text-[30px] font-black text-[#2a674c] mt-2 leading-none">
            12.4 Days
          </div>
          <p className="text-[11px] text-[#2a674c] mt-2 font-medium">
            -4.2 days vs. national average
          </p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#dde4df] shadow-xs">
          <div className="text-[12px] font-semibold text-[#59413a]">Retention Success Rate</div>
          <div className="text-[30px] font-black text-[#6b4500] mt-2 leading-none">
            99.1%
          </div>
          <p className="text-[11px] text-[#6b4500] mt-2 font-medium">
            Supported by 3-3-3 counseling
          </p>
        </div>
      </div>

      {/* Pending Shelter Verifications Queue */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#dde4df]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-[20px] font-bold text-[#161d1a]">Shelter Verification Compliance</h2>
            <p className="text-[13px] text-[#59413a]">
              Review official 501(c)(3) filings and veterinary license credentials before granting verified partner badges
            </p>
          </div>
          <span className="text-[12px] font-bold text-[#a83301]">
            {pendingVerifications.length} Pending Approvals
          </span>
        </div>

        {pendingVerifications.length === 0 ? (
          <div className="p-6 bg-[#f4fbf6] rounded-2xl text-center text-[#2a674c] font-semibold text-[13px]">
            All rescue shelter verification requests have been successfully audited!
          </div>
        ) : (
          <div className="space-y-3">
            {pendingVerifications.map((req) => (
              <div
                key={req.id}
                className="p-4 rounded-2xl bg-[#f4fbf6] border border-[#dde4df] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[15px] text-[#161d1a]">{req.name}</span>
                    <span className="text-[12px] text-[#59413a]">({req.city})</span>
                  </div>
                  <div className="text-[12px] text-[#59413a] mt-0.5">
                    IRS EIN: <span className="font-mono">{req.einTaxId}</span> • Submitted {req.submittedDate}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleApproveVerification(req.id, req.name, req.city)}
                    className="px-4 py-1.5 rounded-full bg-[#2a674c] text-white hover:bg-[#1e4835] font-semibold text-[12px] transition-colors shadow-xs cursor-pointer flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[15px]">verified</span>
                    <span>Grant Verified Badge</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Network Shelters Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#dde4df]">
        <h2 className="text-[20px] font-bold text-[#161d1a] mb-4">
          Active Shelter & Sanctuary Directory
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {shelterList.map((s) => (
            <div
              key={s.id}
              className="p-4 rounded-2xl border border-[#dde4df] bg-[#f4fbf6] flex flex-col justify-between gap-2"
            >
              <div>
                <div className="font-bold text-[15px] text-[#161d1a] flex items-center gap-1">
                  {s.name}
                  <span className="material-symbols-outlined text-[#2a674c] text-[16px] fill-1">
                    verified
                  </span>
                </div>
                <div className="text-[12px] text-[#59413a]">{s.location}</div>
                <div className="text-[11px] text-[#59413a] mt-1">{s.type}</div>
              </div>
              <div className="pt-2 border-t border-[#dde4df]/60 flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#2a674c]">{s.adoptionsCount} Adoptions</span>
                <span className="text-[#59413a]">{s.activePetsCount} in sanctuary</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

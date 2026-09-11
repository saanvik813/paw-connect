import React from 'react';
import { Pet, AdoptionApplication, Shelter } from '../types';

interface ShelterDashboardViewProps {
  shelter: Shelter;
  pets: Pet[];
  applications: AdoptionApplication[];
  onOpenAddPet: () => void;
  onUpdateAppStatus: (appId: string, status: AdoptionApplication['status']) => void;
  onTogglePetUrgent: (petId: string) => void;
  onOpenChat: (shelterName: string) => void;
}

export const ShelterDashboardView: React.FC<ShelterDashboardViewProps> = ({
  shelter,
  pets,
  applications,
  onOpenAddPet,
  onUpdateAppStatus,
  onTogglePetUrgent,
  onOpenChat,
}) => {
  const shelterPets = pets.filter((p) => p.shelterName === shelter.name);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Shelter Header & Actions */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#dde4df] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#ffdbd0] text-[#a83301] flex items-center justify-center font-black text-[22px] shadow-inner">
            APA
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-[22px] font-bold text-[#161d1a]">{shelter.name}</h1>
              <span className="bg-[#b1f0ce] text-[#0e5138] text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">verified</span> Verified Partner
              </span>
            </div>
            <p className="text-[13px] text-[#59413a] mt-0.5">
              {shelter.location} • {shelter.type} • {shelter.phone}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenChat(shelter.name)}
            className="px-5 py-2.5 rounded-2xl bg-[#eef5f0] text-[#161d1a] hover:bg-[#e8f0ea] font-bold text-[13px] transition-colors border border-[#dde4df] flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px] text-[#2a674c]">forum</span>
            <span>Live Shelter Chat</span>
          </button>
          <button
            onClick={onOpenAddPet}
            className="px-6 py-2.5 rounded-2xl bg-[#a83301] text-white hover:bg-[#ca4a1c] font-bold text-[13px] transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>Add Rescued Pet</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-[#dde4df] shadow-xs">
          <div className="flex items-center justify-between text-[#59413a]">
            <span className="text-[13px] font-semibold">Active Animals in Care</span>
            <span className="material-symbols-outlined text-[#a83301]">pets</span>
          </div>
          <div className="text-[28px] font-black text-[#161d1a] mt-2 leading-none">
            {shelterPets.length}
          </div>
          <p className="text-[11px] text-[#2a674c] mt-2 font-medium flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 4 intake admissions this week
          </p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#dde4df] shadow-xs">
          <div className="flex items-center justify-between text-[#59413a]">
            <span className="text-[13px] font-semibold">Pending Applications</span>
            <span className="material-symbols-outlined text-[#6b4500]">pending_actions</span>
          </div>
          <div className="text-[28px] font-black text-[#161d1a] mt-2 leading-none">
            {applications.length}
          </div>
          <p className="text-[11px] text-[#6b4500] mt-2 font-medium">
            Average review turnaround: 1.8 hrs
          </p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#dde4df] shadow-xs">
          <div className="flex items-center justify-between text-[#59413a]">
            <span className="text-[13px] font-semibold">Adoptions This Month</span>
            <span className="material-symbols-outlined text-[#2a674c]">volunteer_activism</span>
          </div>
          <div className="text-[28px] font-black text-[#161d1a] mt-2 leading-none">
            28
          </div>
          <p className="text-[11px] text-[#2a674c] mt-2 font-medium">
            98.4% retention success rate
          </p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#dde4df] shadow-xs">
          <div className="flex items-center justify-between text-[#59413a]">
            <span className="text-[13px] font-semibold">Shelter Capacity</span>
            <span className="material-symbols-outlined text-[#a83301]">domain</span>
          </div>
          <div className="text-[28px] font-black text-[#161d1a] mt-2 leading-none">
            84%
          </div>
          <div className="w-full bg-[#dde4df] h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-[#fdae2f] h-full rounded-full" style={{ width: '84%' }}></div>
          </div>
        </div>
      </div>

      {/* Applications Review Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#dde4df]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[20px] font-bold text-[#161d1a]">Adoption Applications Queue</h2>
            <p className="text-[13px] text-[#59413a]">
              Review applicant housing, pet history, and approve meet & greets
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-[#dde4df] text-[#59413a] uppercase tracking-wider text-[11px]">
                <th className="pb-3 font-bold">Applicant</th>
                <th className="pb-3 font-bold">Target Pet</th>
                <th className="pb-3 font-bold">Home / Yard</th>
                <th className="pb-3 font-bold">Status</th>
                <th className="pb-3 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dde4df]/60">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-[#f4fbf6] transition-colors">
                  <td className="py-4">
                    <div className="font-bold text-[#161d1a]">{app.applicantName}</div>
                    <div className="text-[11px] text-[#59413a]">{app.applicantEmail}</div>
                    <div className="text-[11px] text-[#59413a]">{app.applicantPhone}</div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <img
                        alt={app.petName}
                        className="w-9 h-9 rounded-lg object-cover"
                        src={app.petImage}
                      />
                      <div>
                        <div className="font-semibold text-[#161d1a]">{app.petName}</div>
                        <div className="text-[11px] text-[#59413a]">{app.petBreed}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="text-[#161d1a]">{app.housingType}</div>
                    <div className="text-[11px] text-[#2a674c]">
                      {app.hasYard ? '✓ Fenced Yard' : 'No Private Yard'}
                    </div>
                  </td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full font-bold text-[11px] inline-block ${
                        app.status.includes('Approved')
                          ? 'bg-[#b1f0ce] text-[#0e5138]'
                          : 'bg-[#ffddb4] text-[#291800]'
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => onUpdateAppStatus(app.id, 'Application Approved!')}
                        className="px-3 py-1 bg-[#2a674c] hover:bg-[#1e4835] text-white rounded-lg font-semibold text-[11px] transition-colors cursor-pointer"
                        title="Approve for Meet & Greet"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => onUpdateAppStatus(app.id, 'Home Audit Scheduled')}
                        className="px-3 py-1 bg-[#e8f0ea] hover:bg-[#dde4df] text-[#161d1a] rounded-lg font-semibold text-[11px] transition-colors cursor-pointer"
                      >
                        Schedule Audit
                      </button>
                      <button
                        onClick={() => onUpdateAppStatus(app.id, 'Under Shelter Review')}
                        className="px-2 py-1 text-[#a83301] hover:bg-[#ffdad6] rounded-lg font-semibold text-[11px] transition-colors cursor-pointer"
                        title="Flag for Review"
                      >
                        Hold
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Adoptable Pet Roster */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#dde4df]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[20px] font-bold text-[#161d1a]">Current Adoptable Animals</h2>
            <p className="text-[13px] text-[#59413a]">
              Manage live visibility, medical records, and urgent foster callouts
            </p>
          </div>
          <span className="text-[12px] font-semibold text-[#2a674c]">
            {shelterPets.length} Listed Pets
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shelterPets.map((pet) => (
            <div
              key={pet.id}
              className="bg-[#f4fbf6] p-4 rounded-2xl border border-[#dde4df] flex flex-col justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  alt={pet.name}
                  className="w-14 h-14 rounded-xl object-cover"
                  src={pet.image}
                />
                <div>
                  <h4 className="font-bold text-[16px] text-[#161d1a]">{pet.name}</h4>
                  <p className="text-[12px] text-[#59413a]">{pet.breed} • {pet.ageExact}</p>
                  <p className="text-[11px] text-[#2a674c] font-medium">
                    In shelter {pet.shelterStayDays || 1} days
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#dde4df]/60">
                <button
                  onClick={() => onTogglePetUrgent(pet.id)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                    pet.isUrgent
                      ? 'bg-[#fdae2f] text-[#6b4500]'
                      : 'bg-[#e8f0ea] text-[#59413a] hover:bg-[#dde4df]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[13px]">
                    {pet.isUrgent ? 'warning' : 'timer'}
                  </span>
                  {pet.isUrgent ? 'Urgent Need Active' : 'Mark as Urgent'}
                </button>

                <span className="text-[11px] text-[#2a674c] font-semibold flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[13px]">check</span> Public
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

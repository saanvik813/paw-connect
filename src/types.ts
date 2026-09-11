export type SpeciesType = 'Dogs' | 'Cats' | 'Rabbits' | 'Birds' | 'Small Pets' | 'Special Needs' | 'all';
export type AgeType = 'Puppy/Kitten' | 'Young' | 'Adult' | 'Senior' | 'all';
export type GenderType = 'Female' | 'Male' | 'all';
export type SizeType = 'Small' | 'Medium' | 'Large' | 'all';

export interface Pet {
  id: string;
  name: string;
  species: 'Dogs' | 'Cats' | 'Rabbits' | 'Birds' | 'Small Pets';
  breed: string;
  ageGroup: 'Puppy/Kitten' | 'Young' | 'Adult' | 'Senior';
  ageExact: string;
  gender: 'Female' | 'Male';
  size: 'Small' | 'Medium' | 'Large';
  city: string;
  shelterName: string;
  image: string;
  isUrgent: boolean;
  isSpecialNeeds: boolean;
  specialNeedsDescription?: string;
  goodWithKids: boolean;
  goodWithDogs: boolean;
  goodWithCats: boolean;
  isHouseTrained: boolean;
  shelterStayDays?: number;
  tags: string[];
  bio: string;
  medicalInfo: {
    vaccinated: boolean;
    spayedNeutered: boolean;
    microchipped: boolean;
    dewormed: boolean;
    notes?: string;
  };
}

export interface Shelter {
  id: string;
  name: string;
  location: string;
  type: string;
  rating: number;
  adoptionsCount: number;
  activePetsCount: number;
  verified: boolean;
  avatarIcon: string;
  avatarColor: string;
  phone: string;
  email: string;
  capacityRate: number;
}

export interface SuccessStory {
  id: string;
  title: string;
  description: string;
  adopterName: string;
  adopterInitials: string;
  petName: string;
  timeline: string;
  beforeImage: string;
  afterImage: string;
  rating: number;
}

export interface AdoptionApplication {
  id: string;
  petId: string;
  petName: string;
  petBreed: string;
  petImage: string;
  shelterName: string;
  submittedAt: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  applicantCityZip: string;
  housingType: string;
  hasYard: boolean;
  petExperience: string;
  currentPets: string;
  hoursAlone: string;
  preferredVet: string;
  status: 'Under Shelter Review' | 'Application Approved!' | 'Meet & Greet Scheduled' | 'Docs Requested' | 'Home Trial';
  notes?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'shelter';
  senderName: string;
  senderInitials: string;
  text: string;
  timestamp: string;
}

export interface PetCareGuide {
  id: string;
  title: string;
  category: 'Checklist' | 'Transition' | 'Health' | 'Behavior';
  readTime: string;
  summary: string;
  image: string;
  content: string[];
}

export type AppRole = 'adopter' | 'user-dash' | 'shelter-dash' | 'admin-dash';

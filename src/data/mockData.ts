import { Pet, Shelter, SuccessStory, AdoptionApplication, ChatMessage, PetCareGuide } from '../types';

export const INITIAL_PETS: Pet[] = [
  {
    id: 'pet-luna',
    name: 'Luna',
    species: 'Dogs',
    breed: 'Golden Retriever',
    ageGroup: 'Young',
    ageExact: '2 Years',
    gender: 'Female',
    size: 'Large',
    city: 'Austin, TX',
    shelterName: 'Austin Pets Alive!',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAog3-POjA3qwrhinbQlvt75NHftb5TJbijPldiMcg151zMxRn8RDMk0NrGQNRRHCW6zkJf3nqWojbd2mLJkilhOtuPCfGfAB0fNkHhlCMuw2HrpvMNdEmRmyN9S0xgE3WdnXy6z6MaOlabiiZYp9RfRMOkXEznYjKzvfgETf1r1xMVUBtXpE0ACdlW5P3EL08G8yvS8Jr7CQuZRcPWtpmtcjrgEt9xFD4-0oUnk1GL-tvecYyw0xk_AQ',
    isUrgent: false,
    isSpecialNeeds: false,
    goodWithKids: true,
    goodWithDogs: true,
    goodWithCats: true,
    isHouseTrained: true,
    shelterStayDays: 14,
    tags: ['Friendly', 'Playful', 'Good with Kids', 'House Trained'],
    bio: 'Luna is a bright, warm-hearted companion who thrives on human companionship. She loves fetch sessions in the backyard, gentle afternoon walks, and snoozing with her head on your lap while you work from home. She has lived harmoniously with both older kids and other gentle dogs.',
    medicalInfo: {
      vaccinated: true,
      spayedNeutered: true,
      microchipped: true,
      dewormed: true,
      notes: 'Up to date on DHPP, Rabies, and monthly heartworm prevention.'
    }
  },
  {
    id: 'pet-milo',
    name: 'Milo',
    species: 'Cats',
    breed: 'Domestic Shorthair Tabby',
    ageGroup: 'Young',
    ageExact: '1 Year',
    gender: 'Male',
    size: 'Small',
    city: 'Seattle, WA',
    shelterName: 'Seattle Humane Haven',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsRiEInB8SKpAgjVNYb54qsB1mnRZcy8t4W11Ax0Q4K86zqzKjElEILLzHmOX8jC-k67bc3zZfCF9s_3maJjhmMYr010QloMHIPG5GOcrz4GYj8w4yF432epy86az6tVDqICnph8fOgTLKfriaC3QQDgHYK4PaRlmGC0h75gwqrZSgpJ3Jm15HhSjxCCXHC62WQRxV_QqrgIRazPIbDYgWjLifltGCCzbn9TFqb2oTFguHYPJcCzXRbQ',
    isUrgent: false,
    isSpecialNeeds: false,
    goodWithKids: true,
    goodWithDogs: true,
    goodWithCats: true,
    isHouseTrained: true,
    shelterStayDays: 22,
    tags: ['Affectionate', 'Cuddle Bug', 'Good with Pets'],
    bio: 'Milo is the ultimate snuggle bug. He purrs the instant you enter the room, loves gentle feather wand sessions, and is completely litter trained and polite with fellow felines.',
    medicalInfo: {
      vaccinated: true,
      spayedNeutered: true,
      microchipped: true,
      dewormed: true,
      notes: 'Tested negative for FIV/FeLV. Healthy baseline bloodwork.'
    }
  },
  {
    id: 'pet-bella',
    name: 'Bella',
    species: 'Dogs',
    breed: 'German Shepherd Mix',
    ageGroup: 'Adult',
    ageExact: '3 Years',
    gender: 'Female',
    size: 'Large',
    city: 'Denver, CO',
    shelterName: 'Rocky Mountain Canine Rescue',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5wkaKll4VVrln0x95OV5fKfGh8GzFwSpXJ0mGbCvzZX1CJfVJJifftE9pl6COW7YYEm39Be0P9rDNwypvPhCPQ-kPvXWZM8xGUUiBvjvVmfkeMdswvlu2HBqkNcfbvJQMKfIYaFrpFnKrdssVCrdG9otCtjyQMcIyKYNG6Jvrk8Y6InvkfrixEcoCDfojkIV_Afljiy2cgazf1ahcfDtUb518Qk901poIHq_UC-192B2Zpf2TPn7SRA',
    isUrgent: false,
    isSpecialNeeds: false,
    goodWithKids: true,
    goodWithDogs: true,
    goodWithCats: false,
    isHouseTrained: true,
    shelterStayDays: 45,
    tags: ['Energetic', 'Loyal', 'Trained'],
    bio: 'Bella is an intelligent, athletic shepherd mix with a heart of gold. She knows basic commands (sit, down, stay, paw) and loves outdoor adventures, trail runs, and puzzle toys.',
    medicalInfo: {
      vaccinated: true,
      spayedNeutered: true,
      microchipped: true,
      dewormed: true,
      notes: 'Excellent joint health, fully vetted and screened.'
    }
  },
  {
    id: 'pet-oliver',
    name: 'Oliver',
    species: 'Dogs',
    breed: 'French Bulldog',
    ageGroup: 'Adult',
    ageExact: '4 Years',
    gender: 'Male',
    size: 'Small',
    city: 'Austin, TX',
    shelterName: 'Austin Pets Alive!',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNA969iodJSJcReivPxF9aF0dYkNpcL9ImFaUYvRau6T6LSZBGGW2KFY6iD2ZyvBN86r7bopP06qL_gIatjwdzR_BIwiSvvTpeta5t_0SeTnjAaMNkLxL_lkKRxJLPc0sIB0T52-wri7UkTb3293ZrztbZBlP6s-H2P0r53UmbF_TdaV7kq8SRzIRYWOtR6wd7NsIsUcS6gdtWxrwwbjVyejWbM8og3gNb5wdC1Rbe2XoNGgK60F1WXw',
    isUrgent: false,
    isSpecialNeeds: false,
    goodWithKids: true,
    goodWithDogs: true,
    goodWithCats: true,
    isHouseTrained: true,
    shelterStayDays: 8,
    tags: ['Calm', 'Apartment Friendly', 'Gentle'],
    bio: 'Oliver is a mellow gentleman who loves low-key strolls, soft dog beds, and sitting politely at your feet during dinner. He is calm, friendly, and great in apartments.',
    medicalInfo: {
      vaccinated: true,
      spayedNeutered: true,
      microchipped: true,
      dewormed: true,
      notes: 'BOAS airway check cleared; ears and skin evaluated clean.'
    }
  },
  {
    id: 'pet-daisy',
    name: 'Daisy',
    species: 'Rabbits',
    breed: 'Holland Lop Rabbit',
    ageGroup: 'Puppy/Kitten',
    ageExact: '10 Mos',
    gender: 'Female',
    size: 'Small',
    city: 'Delhi, IN',
    shelterName: 'Friendicoes SECA',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCofLQBzi-yOML-R614AG8Gq78k5E9Ra5SnoPUY8yFwxSzC0RdmP2VLHtlyzId9Q-Q9BLPcYy7AoufME4pG9TlKzH16gWpC3z_BBTXvvFrX6KcK5cykQWEk18l6XfVnJtWSrY6D2Tgww7-47ljKDYRuVmFMvvCAUs4abAqDmMWCH4jKjuGMzz3Tow-UgweNe4tTR1xauPO6scKhKdZd3ZSHBRUpJTA75HqVdGOC9FcHFQHk4hsfyETgLw',
    isUrgent: false,
    isSpecialNeeds: false,
    goodWithKids: true,
    goodWithDogs: false,
    goodWithCats: true,
    isHouseTrained: true,
    shelterStayDays: 18,
    tags: ['Quiet', 'Loves Greens', 'Indoor Only'],
    bio: 'Daisy is a gentle indoor Holland Lop rabbit who enjoys fresh parsley sprigs, Timothy hay tunnels, and quiet afternoon grooming. She does well in peaceful homes.',
    medicalInfo: {
      vaccinated: true,
      spayedNeutered: true,
      microchipped: true,
      dewormed: true,
      notes: 'Spayed by specialized exotic veterinarian; dental health excellent.'
    }
  },
  {
    id: 'pet-rocky',
    name: 'Rocky',
    species: 'Dogs',
    breed: 'Labrador Mix',
    ageGroup: 'Adult',
    ageExact: '5 Years',
    gender: 'Male',
    size: 'Large',
    city: 'Seattle, WA',
    shelterName: 'Seattle Humane Haven',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc-dIcHQW3YgQx9wY2Ijrgp3laEc-tHfSuZtmofqea3sMxVkGZtMaH_rWDOZWvykGsLDsgx4-2kepX2ovhby5k9WmhW-8FahNkULNKRZfnnoPlbm-j4SNYBErsfnu8vy47nETAddY6sd7NrkYBHmkU-weRnuhTUhroWVEIACGiqJb1qtqOCzen0ovnAJf2h2DirjHqWwUI_pwFGII2tggUlvKVQ1Xc5iwc78Pd14JGs3LjRM9zJquizg',
    isUrgent: true,
    isSpecialNeeds: true,
    specialNeedsDescription: 'Tripod (3-legged) - fully adapted and mobile',
    goodWithKids: false,
    goodWithDogs: true,
    goodWithCats: false,
    isHouseTrained: true,
    shelterStayDays: 110,
    tags: ['Tripod Pet', 'Shelter Stay: 110d', 'Affectionate', 'Eager to Please'],
    bio: 'Rocky has overcome immense obstacles with an unshakable smile. Missing his hind leg hasn’t slowed his joyful spirit at all! He loves quiet yards, chew bones, gentle car rides, and deserves a patient forever family.',
    medicalInfo: {
      vaccinated: true,
      spayedNeutered: true,
      microchipped: true,
      dewormed: true,
      notes: 'Amputation site healed 3 years ago; arthritis preventative joint supplement included.'
    }
  },
  {
    id: 'pet-cooper',
    name: 'Cooper',
    species: 'Dogs',
    breed: 'Australian Shepherd',
    ageGroup: 'Adult',
    ageExact: '3 Years',
    gender: 'Male',
    size: 'Medium',
    city: 'Austin, TX',
    shelterName: 'Austin Pets Alive!',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCERQzJIp5ZFvMGrJcTWDsr2YjcZ3dIGghTOkTBc9ENLjCkhYJi9Pdn8rEJKiE1dL04YBxGIAZkkxhrrmbq7kgjX21co7FzwTlTBbFVd4Xv2yXdtCrRvFe5MIyV_RyNJH9ZxWOJ0mnVFAM0gdINPfovuftFRu6S_IwIuq2joEN_hYN-7LsKTStHHNxJOClMy5u1lP0Cu7rhOr1nAkthra4yzWx1URwGEw82a8FhWiKgQ6obBR3rPWW9w',
    isUrgent: true,
    isSpecialNeeds: false,
    goodWithKids: true,
    goodWithDogs: true,
    goodWithCats: true,
    isHouseTrained: true,
    shelterStayDays: 60,
    tags: ['Agile', 'Smart', 'Urgent Foster'],
    bio: 'Cooper is eager to find an active guardian who appreciates smart herding breeds. He loves agility courses, frisbee sessions, and knows dozens of tricks.',
    medicalInfo: {
      vaccinated: true,
      spayedNeutered: true,
      microchipped: true,
      dewormed: true,
      notes: 'Vigorous physical checkup passed with flying colors.'
    }
  },
  {
    id: 'pet-charlie',
    name: 'Charlie',
    species: 'Cats',
    breed: 'Calico Shorthair',
    ageGroup: 'Senior',
    ageExact: '9 Years',
    gender: 'Female',
    size: 'Small',
    city: 'Delhi, IN',
    shelterName: 'Friendicoes SECA',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxttQ9hlK29cRrj6qTcWFTr9vzDx0Vv5c4vn7rSgHTmzGRpbaPnNfIEQwBOzF6guJRADwRAtCmFkINkNhVOOvwTSv_ORFzi3bpQCJI17Ap1FXdKiy6i_CnYkFv0yKhfFDUAYDXQKiNDj1CkCLueT5oGsOyN_jJeCvITq_Vc37TXmwoh4bWyNG1md8PpAoKnRfAfpdJrG4SBJsGKSm2YrMTm987jKrDR7hlSjeXmANv1C01N2k27UKjNA',
    isUrgent: true,
    isSpecialNeeds: true,
    specialNeedsDescription: 'Senior cat needing mild thyroid pill daily',
    goodWithKids: true,
    goodWithDogs: true,
    goodWithCats: true,
    isHouseTrained: true,
    shelterStayDays: 95,
    tags: ['Senior Sweetheart', 'Low Energy', 'Lap Warmer'],
    bio: 'Charlie is a serene calico grandmother who spends her afternoons daydreaming on sunlit windowsills. She asks for nothing more than a quiet lap and a warm blanket.',
    medicalInfo: {
      vaccinated: true,
      spayedNeutered: true,
      microchipped: true,
      dewormed: true,
      notes: 'Blood pressure and renal panels stable; medication provided for 6 months.'
    }
  }
];

export const INITIAL_SHELTERS: Shelter[] = [
  {
    id: 'shelter-apa',
    name: 'Austin Pets Alive!',
    location: 'Austin, Texas',
    type: '501(c)(3) Rescue Network',
    rating: 4.9,
    adoptionsCount: 420,
    activePetsCount: 48,
    verified: true,
    avatarIcon: 'pets',
    avatarColor: 'bg-primary-fixed text-primary',
    phone: '(512) 961-6519',
    email: 'adopt@austinpetsalive.org',
    capacityRate: 84
  },
  {
    id: 'shelter-seca',
    name: 'Friendicoes SECA',
    location: 'New Delhi, India',
    type: 'Certified Animal Welfare Charity',
    rating: 4.8,
    adoptionsCount: 680,
    activePetsCount: 62,
    verified: true,
    avatarIcon: 'health_and_safety',
    avatarColor: 'bg-tertiary-fixed text-tertiary',
    phone: '+91 11 2432 0707',
    email: 'help@friendicoes.org',
    capacityRate: 92
  },
  {
    id: 'shelter-seattle',
    name: 'Seattle Humane Haven',
    location: 'Bellevue, WA',
    type: 'No-Kill Sanctuary & Foster Network',
    rating: 5.0,
    adoptionsCount: 310,
    activePetsCount: 35,
    verified: true,
    avatarIcon: 'volunteer_activism',
    avatarColor: 'bg-secondary-fixed text-secondary',
    phone: '(425) 641-0080',
    email: 'adoptions@seattlehumanehaven.org',
    capacityRate: 76
  }
];

export const INITIAL_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    title: '“Barnaby went from terrified shelter pup to king of the living room.”',
    description: "When we saw Barnaby on PawConnect, he had been waiting at the shelter for over four months. The adoption team walked us through his separation anxiety treatment plan. Nine months later, he's our constant hiking companion and neighborhood cuddle champion!",
    adopterName: 'Elena & Carlos R.',
    adopterInitials: 'EC',
    petName: 'Barnaby',
    timeline: 'Adopted Barnaby • 9 months ago',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkD9B9yI1CS_7y6Q_0LF2wk0CUzC8k5p7UKaJvceUCfVtBLilQ1HpRgruIR4z6oWKYYFTTe_9tnLAe6H1-HL4hEqUSukFs5uqfLjWKmXXejeqNTKDR469smNDPAYd59n_LQQHt8YDjmNOcqviy5Kk1xn6WgAEhm1O9i2YmCfxoMz8SVAhYut0tW1D70_LvhQUU-yKPY2YgBO-FucTwFEa_gJiXobxayzVvUvdWC0bxyCWa3KYK-hi5SQ',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFrkSROVCBDZhD1GlqqOTWGL_mFlwrqDfWA4oWzRSlD34RAtPeM-FgI0uGUIPSdjEkubnFdXchKufLDqXQDPQJ5CrE7zcCiJfVfCFmzlM7XuCcYs3KkKp7CjEI14hZVXGyyO52bIjgq39x4pjKz3CHHzu-WxI9DP9UV08mdkPs3gm_1Htt5m62RlD93TD6eY5qI0UoemFf4Ux_-OcgY-6ueAZHX9AuwMmivvcNktMloIDzLb6OPtKtLQ',
    rating: 5
  },
  {
    id: 'story-2',
    title: '“Mimi was found as a stray kitten, now she manages our home office.”',
    description: "We were anxious about how our senior rescue dog would adjust to a new kitten, but the PawConnect foster transition guide worked like magic. Mimi is gentle, chatty, and brings an absurd amount of warmth into our home every single morning.",
    adopterName: 'Kavita & Amit P.',
    adopterInitials: 'KP',
    petName: 'Mimi',
    timeline: 'Adopted Mimi • 1 year ago',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxttQ9hlK29cRrj6qTcWFTr9vzDx0Vv5c4vn7rSgHTmzGRpbaPnNfIEQwBOzF6guJRADwRAtCmFkINkNhVOOvwTSv_ORFzi3bpQCJI17Ap1FXdKiy6i_CnYkFv0yKhfFDUAYDXQKiNDj1CkCLueT5oGsOyN_jJeCvITq_Vc37TXmwoh4bWyNG1md8PpAoKnRfAfpdJrG4SBJsGKSm2YrMTm987jKrDR7hlSjeXmANv1C01N2k27UKjNA',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsRiEInB8SKpAgjVNYb54qsB1mnRZcy8t4W11Ax0Q4K86zqzKjElEILLzHmOX8jC-k67bc3zZfCF9s_3maJjhmMYr010QloMHIPG5GOcrz4GYj8w4yF432epy86az6tVDqICnph8fOgTLKfriaC3QQDgHYK4PaRlmGC0h75gwqrZSgpJ3Jm15HhSjxCCXHC62WQRxV_QqrgIRazPIbDYgWjLifltGCCzbn9TFqb2oTFguHYPJcCzXRbQ',
    rating: 5
  },
  {
    id: 'story-3',
    title: '“Adopting senior dog Buster gave us the gentlest friend we could imagine.”',
    description: "Everyone rushed to adopt small puppies, but 9-year-old Buster was already potty trained, loved naps, and just wanted someone to hold his paw during thunderstorms. Bringing him home was the single most rewarding decision our family made this year.",
    adopterName: 'Marcus & Liam G.',
    adopterInitials: 'ML',
    petName: 'Buster',
    timeline: 'Adopted Buster • 5 months ago',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc-dIcHQW3YgQx9wY2Ijrgp3laEc-tHfSuZtmofqea3sMxVkGZtMaH_rWDOZWvykGsLDsgx4-2kepX2ovhby5k9WmhW-8FahNkULNKRZfnnoPlbm-j4SNYBErsfnu8vy47nETAddY6sd7NrkYBHmkU-weRnuhTUhroWVEIACGiqJb1qtqOCzen0ovnAJf2h2DirjHqWwUI_pwFGII2tggUlvKVQ1Xc5iwc78Pd14JGs3LjRM9zJquizg',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5wkaKll4VVrln0x95OV5fKfGh8GzFwSpXJ0mGbCvzZX1CJfVJJifftE9pl6COW7YYEm39Be0P9rDNwypvPhCPQ-kPvXWZM8xGUUiBvjvVmfkeMdswvlu2HBqkNcfbvJQMKfIYaFrpFnKrdssVCrdG9otCtjyQMcIyKYNG6Jvrk8Y6InvkfrixEcoCDfojkIV_Afljiy2cgazf1ahcfDtUb518Qk901poIHq_UC-192B2Zpf2TPn7SRA',
    rating: 5
  }
];

export const INITIAL_APPLICATIONS: AdoptionApplication[] = [
  {
    id: 'app-1',
    petId: 'pet-luna',
    petName: 'Luna',
    petBreed: 'Golden Retriever',
    petImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABD_ozCrzaQp-IqdGVl2po6R4PC6O2BYIoWpLrKPCcdrDgjaBV_vtwjuH87Dcb9VjBTSRAQLSkY0ouT4jH4wRX_szCpWBz90LcdpV-CdfFpdSAof_ooGc24xEDSgLYrKc7IYuA8iIArzKsJAbOPuoHeT7sKDzfWTJ-oJt4p13WJTACWlmvU5Mt7yjGfChXhrtS7OyM13wjyTqGD7YvO4dVqULMXC6wVgRCJ-NzvTCNErxd0xzzyMJMOA',
    shelterName: 'Austin Pets Alive!',
    submittedAt: 'Yesterday, 4:15 PM',
    applicantName: 'Sarah Anderson',
    applicantEmail: 'sarah.anderson@example.com',
    applicantPhone: '(512) 555-0198',
    applicantCityZip: 'Austin, TX 78704',
    housingType: 'Single Family House (Owned)',
    hasYard: true,
    petExperience: 'Lifelong pet owner, 1 dog previously',
    currentPets: 'None currently',
    hoursAlone: '0 - 2 hours (Remote work)',
    preferredVet: 'South Congress Veterinary Clinic',
    status: 'Under Shelter Review',
    notes: 'Applicant has private fenced yard and flexible remote work schedule.'
  },
  {
    id: 'app-2',
    petId: 'pet-oliver',
    petName: 'Oliver',
    petBreed: 'French Bulldog',
    petImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY-4NOowg0lRIk62PfiL3ia3KzrSTdA853BJXXvKhNFrLK7TqcH5lT8vB2UIy-LJB6UyTIvJEn5bB5hUWhqVIAM2JCUHPOmQXtB00TIp1O6L36nIieP3naKweT4WMpkfF0jIjpIPzZNl801bvWzOcDV4MMaRXdKV5fApVn-K4QwhFV6KsNrCaH5hJQRI9aE9gGERVLivFy3ts_7HYVyblKzuXtgCb1jz9rOIAADgukSafg-V8YpTgAZw',
    shelterName: 'Austin Pets Alive!',
    submittedAt: '3 Days Ago',
    applicantName: 'Sarah Anderson',
    applicantEmail: 'sarah.anderson@example.com',
    applicantPhone: '(512) 555-0198',
    applicantCityZip: 'Austin, TX 78704',
    housingType: 'Single Family House (Owned)',
    hasYard: true,
    petExperience: 'Previous french bulldog guardian',
    currentPets: 'None',
    hoursAlone: '0 - 2 hours',
    preferredVet: 'South Congress Veterinary Clinic',
    status: 'Application Approved!',
    notes: 'Home audit passed with distinction! Meet and greet ready.'
  }
];

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    sender: 'shelter',
    senderName: 'Austin Pets Alive! Coordinator',
    senderInitials: 'AP',
    text: 'Hi Sarah! We received your inquiry regarding Luna. She is doing fantastic today and just had a sunny walk in our outdoor courtyard! Do you have any quick questions about her daily routine?',
    timestamp: '10:24 AM'
  }
];

export const PET_CARE_GUIDES: PetCareGuide[] = [
  {
    id: 'guide-checklist',
    title: 'New Pet Checklist',
    category: 'Checklist',
    readTime: '5 min read',
    summary: 'Essential household preparations, safety gates, and crate sizing guides before arrival.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGUvPxEb42Be47R8Cw-alsFBelhRujIkfGk0uijQ2vNnub0eWjuxKO5BwEboA1rj2rLe7en6e5ztOu4kVSRfav1GSp_FU3d2q7tVvV1uSc0LtWRUQB2O6-lsdCvrh4i6vQiH9DH0OrFY1CmP5KpZJRxo2WKYyMmtgZ6UUCYk-6rMqGrZxFKlOtD33dI7GZUtEiYOsT5CM-zP3_QY5icZzYgRHAsx4--nnO_lzQLOmR0GKPyEX0ysPW5w',
    content: [
      'Bringing home a rescue companion begins days before you walk through the shelter doors. Ensuring your living environment is prepped reduces stress for both you and your newly adopted pet.',
      'Key Essentials to Prepare: Heavy ceramic or stainless steel food & water bowls, appropriately sized crate or plush bedding, 6-foot fixed leash (avoid retractable leashes initially), identification collar with two contact numbers, and vet-approved starter food.',
      'Pet-Proofing Your Home: Secure loose electrical cords with cord covers, stow all human medications and chocolate well out of reach, and verify house plants are non-toxic to animals (watch out for lilies, sago palms, and philodendrons).',
      'Establishing a Quiet Zone: Designate a low-traffic sanctuary space with soft bedding, water, and comforting scents where your pet can retreat when overstimulated.'
    ]
  },
  {
    id: 'guide-transition',
    title: 'First Week With Your Pet',
    category: 'Transition',
    readTime: '7 min read',
    summary: 'The 3-3-3 rule explained: what to expect during the initial decompression phase.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxttQ9hlK29cRrj6qTcWFTr9vzDx0Vv5c4vn7rSgHTmzGRpbaPnNfIEQwBOzF6guJRADwRAtCmFkINkNhVOOvwTSv_ORFzi3bpQCJI17Ap1FXdKiy6i_CnYkFv0yKhfFDUAYDXQKiNDj1CkCLueT5oGsOyN_jJeCvITq_Vc37TXmwoh4bWyNG1md8PpAoKnRfAfpdJrG4SBJsGKSm2YrMTm987jKrDR7hlSjeXmANv1C01N2k27UKjNA',
    content: [
      'The "3-3-3 Rule" is a widely recognized framework designed by behavioral shelter experts to illustrate the stages an animal undergoes when transitioning from a shelter kennel to a home.',
      'First 3 Days (Decompression): Your pet may feel overwhelmed, test boundaries, sleep excessively, or hide. Do not host welcome parties or overwhelm them with neighbors. Keep lights low and adhere strictly to quiet predictable feeding schedules.',
      'First 3 Weeks (Settling In): Your pet starts to feel secure and exhibits their true temperament. Basic house training solidifies, eating habits regularize, and you can begin gentle 5-minute positive reinforcement training cues.',
      'First 3 Months (Building Trust): Full trust and emotional attachment are bonded. Your companion knows they are safe, understands household routines, and recognizes their forever family.'
    ]
  },
  {
    id: 'guide-nutrition',
    title: 'Pet Nutrition Guide',
    category: 'Health',
    readTime: '4 min read',
    summary: 'Balanced dietary requirements, portion control, and harmful foods to strictly avoid.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQNG0cqctr5EN0LBddtOYojaftpLimGB80PI25TnYARsteCx7b1d6A3G1gHTiwKeAN4lgHElEoTpJFr3uvW5KMKgz-UyhAjwTYoII_i16Db367MedY3KE4XOL892xfeMn-O72A8vF85L-My26AkNoMyHLnqkMwejymEkMW3Kyl_UGR4RHK8hbrE44REj1klPjeBbWehzElibXKUobT3O7sVQ8iLV65w_VZFHv8QlR8VPkb8I2_lyv88Q',
    content: [
      'Transitioning food abruptly is the #1 cause of digestive upset in newly adopted animals. Always ask the shelter what brand and formulation the pet was receiving, and mix it 50/50 for at least 7 days before switching.',
      'Macronutrient Balance: Canines require protein-dense diets supplemented with clean fats and digestible fibers. Cats are obligate carnivores requiring high taurine content.',
      'Strictly Toxic Foods: Never feed grapes, raisins, onions, garlic, xylitol (artificial sweetener found in sugar-free peanut butter), chocolate, or cooked poultry bones that can splinter internally.',
      'Hydration: Ensure multiple fresh water sources are available daily, especially for cats prone to urinary tract issues.'
    ]
  },
  {
    id: 'guide-training',
    title: 'Training Basics',
    category: 'Behavior',
    readTime: '6 min read',
    summary: 'Positive reinforcement mechanics, recall cues, and crate comfort techniques.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGjeKCFSXTS2HJEUNqMT5GZm_9XgMeLdJoAtBcoLQ7FDeRURLJslrdZ6LMUwBmPwkr23J9ES3OLgy2HivShcShoWbpMIB-0IDAlhByRRq7-ie40j6hlk9v8NKYfEJjp3DOFr9L7XgAUCCd8Dcc-4b_07e4jHUaCg_yW70PhEzwPAxFFY-XsOV-9CRaQUGHgOit9lBJIEi3uydZJR0Hdujf698Tvhz4Bl2opy9IhmUh_7eVECPLWyfd8g',
    content: [
      'Positive reinforcement forms the foundation of humane, lasting communication between pets and guardians. Rewarding desired behaviors with high-value treats or praise creates enthusiastic cooperation.',
      'Timing is Crucial: Deliver rewards within 1.5 seconds of the desired action. Use a verbal bridge like "Yes!" or a clicker to capture the exact moment.',
      'Short, Frequent Sessions: Conduct two to three 5-minute training sessions daily rather than one exhausting 30-minute block. Keep training playful and always conclude on a successful note.',
      'Patience with Potty Training: Take newly adopted dogs outside immediately upon waking, 15 minutes after meals, and right before bed. Celebrate every outdoor success with enthusiastic praise.'
    ]
  }
];

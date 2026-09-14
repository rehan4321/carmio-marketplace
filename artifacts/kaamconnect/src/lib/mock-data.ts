export type Mode = 'customer' | 'worker';

export const categories = [
  'Car / Bike Repair', 'Electrician', 'Plumber', 'Carpenter', 'Cleaning', 'Painting', 'Moving', 'Appliance Repair', 'Gardening',
  'Graphic Design', 'Video Editing', 'Photo Editing', 'Website / App Development', 'Logo Design', 'Drawing', 'Animation', 'Writing',
  'Data Entry', 'Tutoring', 'Study / Homework Help', 'Other',
];

export type Worker = {
  id: string; name: string; initials: string; service: string; rating: number; reviews: number; jobs: number; distance: string;
  price: string; skills: string[]; experience: string; availability: string; radius: string; verified: boolean; remote: boolean;
  color: string; photo: string; bio: string;
};

export const workers: Worker[] = [
  { id: 'w1', name: 'Meera Joshi', initials: 'MJ', service: 'Video Editing', rating: 4.9, reviews: 38, jobs: 64, distance: '3.2 km away', price: '₹1,800 / project', skills: ['Reels', 'Color grade', 'Subtitles'], experience: '6 years', availability: 'Available this week', radius: 'Remote + worldwide', verified: true, remote: true, color: 'bg-[hsl(var(--secondary))]', photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=320&q=80', bio: 'Story-first editor helping small brands make work that feels as good as it looks.' },
  { id: 'w2', name: 'Arjun Rao', initials: 'AR', service: 'Electrician', rating: 4.8, reviews: 72, jobs: 182, distance: '1.8 km away', price: '₹450 / visit', skills: ['Wiring', 'Fixtures', 'Inverter'], experience: '11 years', availability: 'Today after 4 pm', radius: 'Within 8 km', verified: true, remote: false, color: 'bg-[hsl(var(--primary))]', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=320&q=80', bio: 'On-time electrical work for homes, shops, and the odd mysterious switch.' },
  { id: 'w3', name: 'Kabir Khan', initials: 'KK', service: 'Website Development', rating: 4.7, reviews: 24, jobs: 31, distance: 'Remote', price: '₹2,500 / day', skills: ['React', 'Shopify', 'SEO'], experience: '4 years', availability: 'Available from 18 Jun', radius: 'Remote', verified: true, remote: true, color: 'bg-[hsl(var(--muted))]', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=320&q=80', bio: 'Builds quick, thoughtful websites for founders who need to ship.' },
  { id: 'w4', name: 'Sana Patel', initials: 'SP', service: 'Home Cleaning', rating: 4.9, reviews: 56, jobs: 120, distance: '4.5 km away', price: '₹700 / session', skills: ['Deep clean', 'Move-out', 'Kitchen'], experience: '8 years', availability: 'Tomorrow morning', radius: 'Within 10 km', verified: true, remote: false, color: 'bg-[hsl(var(--secondary)/.72)]', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=320&q=80', bio: 'Careful, reliable home care with a checklist for the places everyone forgets.' },
  { id: 'w5', name: 'Devika Menon', initials: 'DM', service: 'Math Tutoring', rating: 4.8, reviews: 19, jobs: 42, distance: '2.1 km away', price: '₹600 / hour', skills: ['Algebra', 'Calculus', 'SAT'], experience: '7 years', availability: 'Weekday evenings', radius: 'Local + online', verified: true, remote: true, color: 'bg-[hsl(var(--primary)/.42)]', photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=320&q=80', bio: 'Patient, exam-focused tutoring that makes the next problem feel possible.' },
];

export type Job = {
  id: string; title: string; category: string; location: string; budget: string; date: string; posted: string;
  description: string; applicants: number; remote: boolean; status: string; customer: string; requirements: string[];
};

export const jobs: Job[] = [
  { id: 'j1', title: 'Fix leaking kitchen tap + check pressure', category: 'Plumber', location: 'Indiranagar, Bengaluru', budget: '₹700 – ₹1,200', date: 'Sat, 15 Jun', posted: '18 min ago', description: 'The kitchen tap has started dripping and the water pressure is low on one side. Looking for someone who can diagnose and fix it cleanly.', applicants: 3, remote: false, status: 'Open', customer: 'Nisha S.', requirements: ['Bring basic tools', 'Share an estimate before replacing parts', 'Clean up after the job'] },
  { id: 'j2', title: 'Edit 8 short videos for a café launch', category: 'Video Editing', location: 'Remote', budget: '₹8,000 – ₹12,000', date: 'By 28 Jun', posted: '2 hr ago', description: 'We have phone footage from our new café and need punchy vertical edits for Instagram. Warm, energetic, not over-produced.', applicants: 7, remote: true, status: 'Open', customer: 'Fika House', requirements: ['Portfolio with short-form work', 'Turnaround within 2 weeks', 'Include captions and music options'] },
  { id: 'j3', title: 'Build a simple landing page for a new clinic', category: 'Website / App Development', location: 'Remote', budget: '₹18,000 – ₹28,000', date: 'Start 20 Jun', posted: 'Yesterday', description: 'One-page responsive site with services, doctor bios, appointment CTA, and a friendly but credible visual system.', applicants: 11, remote: true, status: 'Open', customer: 'Mitra Clinic', requirements: ['React or Webflow', 'Mobile-first implementation', 'Basic SEO setup'] },
  { id: 'j4', title: 'Move 1BHK apartment, careful with books', category: 'Moving', location: 'Kalyan Nagar, Bengaluru', budget: '₹3,500 – ₹5,000', date: 'Sun, 23 Jun', posted: 'Yesterday', description: 'Moving a compact 1BHK across town. Around 20 boxes, a bed, desk, and a few plants. Need two people and a small vehicle.', applicants: 5, remote: false, status: 'Open', customer: 'Rahul P.', requirements: ['Two movers', 'Protect furniture', 'Available before noon'] },
  { id: 'j5', title: 'Weekly algebra tutoring for grade 10', category: 'Tutoring', location: 'Online or HSR Layout', budget: '₹500 – ₹800 / hour', date: 'From 17 Jun', posted: '2 days ago', description: 'Looking for a calm tutor for weekly algebra and geometry support. The goal is confidence and clear working, not shortcuts.', applicants: 4, remote: true, status: 'Open', customer: 'Ananya R.', requirements: ['Grade 10 experience', 'One hour weekly', 'Practice-led teaching'] },
];

export const messages = [
  { id: 'm1', name: 'Fika House', initials: 'FH', subject: 'Video editing brief', preview: 'Could you share a sample with captions?', time: '10:42 am', unread: true, job: 'Edit 8 short videos for a café launch', color: 'bg-[hsl(var(--primary))]' },
  { id: 'm2', name: 'Arjun Rao', initials: 'AR', subject: 'Kitchen tap repair', preview: 'I can come by after 4 pm today.', time: 'Yesterday', unread: false, job: 'Fix leaking kitchen tap + check pressure', color: 'bg-[hsl(var(--muted))]' },
  { id: 'm3', name: 'Mitra Clinic', initials: 'MC', subject: 'Landing page', preview: 'The doctor bios are ready to share.', time: 'Mon', unread: false, job: 'Build a simple landing page for a new clinic', color: 'bg-[hsl(var(--secondary)/.72)]' },
];
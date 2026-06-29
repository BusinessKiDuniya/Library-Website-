// ============================================================
// ATHENAEUM STUDY HALL — Central Data File
// All content and copy lives here for easy editing.
// ============================================================

export const SITE = {
  name: "Athenaeum Study Hall",
  tagline: "Your Perfect Study Space Starts Here.",
  description:
    "A premium, silent, and modern study library designed for students, professionals, and lifelong learners who demand the best environment for deep work.",
  phone: "+91-98765-43210",
  whatsapp: "+919876543210",
  email: "hello@atheneumstudy.com",
  address: "14-B, Knowledge Park, Sector 62, Noida, Uttar Pradesh 201309",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1!2d77.3!3d28.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzEyLjAiTiA3N8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin",
  hours: {
    weekday: "6:00 AM – 11:00 PM",
    weekend: "6:00 AM – 10:00 PM",
  },
  social: {
    instagram: "https://instagram.com/atheneumstudy",
    facebook: "https://facebook.com/atheneumstudy",
    twitter: "https://twitter.com/atheneumstudy",
    youtube: "https://youtube.com/@atheneumstudy",
  },
  founded: "2019",
};

// ── STATS ───────────────────────────────────────────────────
export const STATS = [
  { value: 4800, suffix: "+", label: "Happy Members" },
  { value: 120, suffix: "+", label: "Study Seats" },
  { value: 6, suffix: "+", label: "Years of Excellence" },
  { value: 15000, suffix: "+", label: "Books & Resources" },
];

// ── FEATURES / WHY CHOOSE US ────────────────────────────────
export const FEATURES = [
  {
    icon: "VolumeX",
    title: "Silent Environment",
    description:
      "Strict no-noise policy enforced. Every seat is a distraction-free zone built for deep focus.",
    color: "emerald",
  },
  {
    icon: "Wind",
    title: "24/7 Air Conditioning",
    description:
      "Climate-controlled halls keep you comfortable throughout every session, year-round.",
    color: "blue",
  },
  {
    icon: "Wifi",
    title: "High-Speed Wi-Fi",
    description:
      "Dedicated 1Gbps leased line internet with no throttling. Study or research at full speed.",
    color: "purple",
  },
  {
    icon: "Zap",
    title: "Power Backup",
    description:
      "Zero downtime with industrial-grade inverter backup. Your session is never interrupted.",
    color: "gold",
  },
  {
    icon: "Battery",
    title: "Charging Points",
    description:
      "Every seat comes with dedicated power sockets and USB-C fast-charging ports.",
    color: "teal",
  },
  {
    icon: "Droplets",
    title: "RO Water Station",
    description:
      "Purified chilled and hot water stations on every floor, available all day long.",
    color: "cyan",
  },
  {
    icon: "Camera",
    title: "24/7 CCTV Security",
    description:
      "100+ HD cameras monitored round the clock. Your safety and belongings are always protected.",
    color: "red",
  },
  {
    icon: "LayoutDashboard",
    title: "Individual Cabins",
    description:
      "Private, enclosed study cabins available for members who need complete isolation.",
    color: "indigo",
  },
  {
    icon: "Lock",
    title: "Personal Lockers",
    description:
      "Secure digital-lock lockers to store your books, laptop, and valuables worry-free.",
    color: "amber",
  },
  {
    icon: "Car",
    title: "Free Parking",
    description:
      "Dedicated two-wheeler and four-wheeler parking with CCTV coverage, free for all members.",
    color: "slate",
  },
  {
    icon: "Coffee",
    title: "Refreshment Zone",
    description:
      "A quiet refreshment area with tea, coffee, and healthy snacks to keep your energy up.",
    color: "orange",
  },
  {
    icon: "Printer",
    title: "Printing & Scanning",
    description:
      "High-speed printing, scanning, and photocopying services at minimal cost per page.",
    color: "violet",
  },
];

// ── MEMBERSHIP PLANS ────────────────────────────────────────
export const PLANS = [
  {
    id: "monthly",
    name: "Monthly",
    price: 1499,
    duration: "month",
    popular: false,
    description: "Perfect for short-term exam preparation",
    features: [
      "120 seats access (6 AM – 11 PM)",
      "High-speed Wi-Fi",
      "Power backup",
      "RO water access",
      "CCTV security",
      "Charging at every seat",
      "Free parking",
      "1 locker (shared)",
    ],
    cta: "Get Started",
    color: "slate",
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: 3999,
    duration: "3 months",
    popular: false,
    description: "Great for semester exam cycles",
    features: [
      "Everything in Monthly",
      "Priority seat selection",
      "1 free cabin session/week",
      "1 dedicated locker",
      "Study progress tracking",
      "Monthly mentorship call",
    ],
    cta: "Get Started",
    color: "blue",
  },
  {
    id: "half-yearly",
    name: "Half-Yearly",
    price: 6999,
    duration: "6 months",
    popular: true,
    description: "Our most loved plan — best value",
    features: [
      "Everything in Quarterly",
      "Dedicated cabin access (1/day)",
      "Premium dedicated locker",
      "Guest pass (2/month)",
      "Priority support",
      "Free printing (100 pages)",
      "Study group room access",
    ],
    cta: "Most Popular",
    color: "emerald",
  },
  {
    id: "yearly",
    name: "Yearly",
    price: 11999,
    duration: "year",
    popular: false,
    description: "The ultimate membership for serious learners",
    features: [
      "Everything in Half-Yearly",
      "Unlimited cabin access",
      "Reserved seat guarantee",
      "Unlimited printing",
      "Guest passes (5/month)",
      "Personal study coach",
      "Library network access",
      "Invites to exclusive events",
    ],
    cta: "Go Premium",
    color: "gold",
  },
];

// ── FACILITIES SHOWCASE ──────────────────────────────────────
export const FACILITIES = [
  {
    id: "study-hall",
    title: "Grand Study Hall",
    subtitle: "Where focus meets comfort",
    description:
      "Our flagship 80-seat main study hall features ergonomic chairs, wide desks, warm task lighting, and soundproof partitions between seats. Designed after studying how the world's most productive people work, every detail serves your concentration.",
    imageAlt: "Spacious and well-lit main study hall with rows of study desks",
    tag: "Main Hall",
    image: "/home/library-hall.jpg",
  },
  {
    id: "reading-area",
    title: "Reading Lounge",
    subtitle: "Curated for deep reading",
    description:
      "A thoughtfully designed reading lounge with over 15,000 books, journals, and periodicals. Plush seating, soft ambient lighting, and a quiet atmosphere make this the perfect escape for readers and researchers.",
    image: "/home/reading-area.jpg",
    imageAlt: "Cozy reading lounge with bookshelves and comfortable seating",
    tag: "Library",
  },
  {
    id: "cabins",
    title: "Private Study Cabins",
    subtitle: "Your personal command center",
    description:
      "20 fully enclosed, air-conditioned private cabins with dedicated power, USB-C ports, and adjustable lighting. Ideal for those who need absolute privacy for competitive exam prep, online classes, or professional work.",
    image: "/home/cabin.jpg",
    imageAlt: "Private study cabin with enclosed desk and focused lighting",
    tag: "Premium",
  },
  {
    id: "reception",
    title: "Premium Reception",
    subtitle: "Warm welcome, every time",
    description:
      "A modern, welcoming reception area staffed by friendly professionals. From membership queries to seat bookings, our team ensures your experience starts perfectly from the moment you arrive.",
    image: "/home/reception.jpg",
    imageAlt: "Modern library reception desk with helpful staff",
    tag: "Services",
  },
  {
    id: "waiting-area",
    title: "Comfort Waiting Zone",
    subtitle: "Relax before you focus",
    description:
      "A tastefully designed waiting and refreshment area where you can decompress, have a beverage, and gear up for your study session. Lounge seating, greenery, and calming music create a transitional space between the outside world and your study zone.",
    image: "/home/waiting.jpg",
    imageAlt: "Comfortable waiting area with lounge chairs and indoor plants",
    tag: "Lounge",
  },
  {
    id: "parking",
    title: "Secure Parking",
    subtitle: "Zero parking worries",
    description:
      "Spacious, well-lit, and CCTV-monitored dedicated parking for both two-wheelers and four-wheelers. Free for all active members. Come from anywhere and leave your vehicle stress-free.",
    image: "/home/parking.jpg",
    imageAlt: "Secure and well-lit parking area for library members",
    tag: "Convenience",
  },
];

// ── TESTIMONIALS ────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "UPSC Aspirant",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
    text: "Athenaeum completely transformed my study routine. The silence is unreal — I cleared Prelims after joining the half-yearly plan. The cabins are worth every rupee.",
  },
  {
    id: 2,
    name: "Rohan Mehta",
    role: "CA Final Student",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
    text: "I've tried 4 different study halls in Noida. Nothing comes close to the ambience, cleanliness, and infrastructure here. The internet is blazing fast and it never cuts out.",
  },
  {
    id: 3,
    name: "Ananya Singh",
    role: "IIT-JEE Aspirant",
    avatar: "/images/avatar-3.jpg",
    rating: 5,
    text: "The environment is unlike anything I've experienced. Staff is super helpful, the lockers are solid, and the monthly plan pricing is the most competitive I found.",
  },
  {
    id: 4,
    name: "Vikram Patel",
    role: "Bank PO Preparation",
    avatar: "/images/avatar-4.jpg",
    rating: 5,
    text: "I study here 10+ hours a day and never feel uncomfortable. Ergonomic chairs, great lighting, clean washrooms — this is a professional setup. Highly recommended.",
  },
  {
    id: 5,
    name: "Meghna Kapoor",
    role: "Law Entrance Aspirant",
    avatar: "/images/avatar-5.jpg",
    rating: 5,
    text: "The reading lounge alone is worth the membership. 15,000 books, comfortable seating, and the quietest environment I've ever studied in. My scores improved dramatically.",
  },
  {
    id: 6,
    name: "Arjun Verma",
    role: "MBA Candidate",
    avatar: "/images/avatar-6.jpg",
    rating: 5,
    text: "As a working professional, I needed a place to study evenings. Athenaeum's 11 PM closing time and excellent Wi-Fi make it perfect. The yearly plan is an investment that pays back.",
  },
];

// ── FAQ ──────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    question: "How do I book a seat?",
    answer:
      "You can book a seat directly through our website using the 'Book a Seat' form, call us at +91-98765-43210, or visit us in person. Online bookings receive a confirmation email within 30 minutes.",
  },
  {
    question: "What are your working hours?",
    answer:
      "We are open Monday to Saturday from 6:00 AM to 11:00 PM, and on Sundays from 6:00 AM to 10:00 PM. We are closed on major national holidays.",
  },
  {
    question: "Can I try the library before purchasing a membership?",
    answer:
      "Yes! We offer a free 3-hour trial session for first-time visitors. Simply visit us with a valid ID and our team will set you up with a day pass to experience the space.",
  },
  {
    question: "Is there a student discount?",
    answer:
      "Yes, we offer a 10% discount for students with a valid college ID card. Additional discounts apply for group registrations of 3 or more students.",
  },
  {
    question: "What ID proof is required for membership?",
    answer:
      "Any government-issued photo ID such as Aadhaar Card, PAN Card, Voter ID, Passport, or Student ID is accepted for registration.",
  },
  {
    question: "Can I access my locker 24/7?",
    answer:
      "Lockers are accessible during our working hours. We do not offer after-hours access at this time. Your locker is secured with a personal digital code that only you control.",
  },
  {
    question: "Do you have a referral program?",
    answer:
      "Absolutely! Refer a friend and both of you get ₹200 off your next renewal. There's no limit on referrals — the more you refer, the more you save.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 3-day no-questions-asked refund from the date of membership purchase. After 3 days, pro-rated refunds are available for unused days upon submission of a written request. Please review our full Refund Policy page for details.",
  },
  {
    question: "Is there a quiet zone vs. a general study area?",
    answer:
      "The entire library operates as a silent zone — talking is restricted everywhere except the Refreshment Zone and Reception. This policy is strictly enforced for the benefit of all members.",
  },
  {
    question: "Can I bring my own food?",
    answer:
      "Light, non-aromatic snacks are permitted in the Refreshment Zone only. Hot meals and strongly scented food are not allowed inside the study halls to maintain a comfortable environment for all members.",
  },
];

// ── BLOG POSTS ───────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    id: 1,
    slug: "how-to-build-deep-focus",
    title: "The Science of Deep Focus: How Top Performers Study",
    excerpt:
      "Cal Newport's deep work principles and how a structured environment dramatically amplifies your ability to produce high-quality work in less time.",
    category: "Productivity",
    readTime: "6 min read",
    date: "June 20, 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
    featured: true,
  },
  {
    id: 2,
    slug: "upsc-study-schedule",
    title: "The Ultimate UPSC Study Schedule That Actually Works",
    excerpt:
      "A battle-tested 16-hour daily study plan used by successful candidates, with time slots, subject rotation, and revision cycles explained.",
    category: "UPSC",
    readTime: "8 min read",
    date: "June 15, 2026",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    id: 3,
    slug: "pomodoro-technique-study",
    title: "Pomodoro Technique for Competitive Exam Students",
    excerpt:
      "How 25-minute focused sprints with 5-minute breaks can double your retention rate and prevent burnout during intense study periods.",
    category: "Productivity",
    readTime: "5 min read",
    date: "June 10, 2026",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    id: 4,
    slug: "environment-and-performance",
    title: "Why Your Study Environment is Your Secret Weapon",
    excerpt:
      "Research shows that the right physical environment can improve cognitive performance by up to 40%. Here's how to design yours.",
    category: "Study Tips",
    readTime: "4 min read",
    date: "June 5, 2026",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    id: 5,
    slug: "ca-final-preparation",
    title: "CA Final Preparation: A Month-by-Month Game Plan",
    excerpt:
      "A chartered accountant shares the exact strategy, resources, and time management techniques used to clear CA Final in the first attempt.",
    category: "CA Prep",
    readTime: "10 min read",
    date: "May 28, 2026",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    id: 6,
    slug: "digital-minimalism-study",
    title: "Digital Minimalism: Studying Without Smartphone Distractions",
    excerpt:
      "Practical strategies to reclaim your focus in a hyperconnected world — phone-free study sessions and the remarkable results they produce.",
    category: "Study Tips",
    readTime: "5 min read",
    date: "May 20, 2026",
    image:
      "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
];
// ── TEAM MEMBERS ────────────────────────────────────────────
export const TEAM = [
  {
    name: "Rajesh Kumar",
    role: "Founder & Director",
    image: "/images/team-1.jpg",
    bio: "A former UPSC candidate who built Athenaeum after experiencing how a premium environment transforms learning outcomes.",
  },
  {
    name: "Sunita Verma",
    role: "Head of Operations",
    image: "/images/team-2.jpg",
    bio: "15 years in facility management, ensuring every operational detail is handled to the highest standard, every single day.",
  },
  {
    name: "Amit Sharma",
    role: "Community Manager",
    image: "/images/team-3.jpg",
    bio: "Dedicated to creating a thriving community of learners, organizing workshops, and supporting members in their journeys.",
  },
];

// ── GALLERY CATEGORIES ──────────────────────────────────────
export const GALLERY_CATEGORIES = [
  "All",
  "Study Halls",
  "Cabins",
  "Reading Lounge",
  "Facilities",
  "Events",
];

// ── RULES ───────────────────────────────────────────────────
export const RULES = [
  {
    category: "Silence & Conduct",
    items: [
      "Maintain strict silence inside all study halls and reading areas.",
      "Talking is permitted only in the Refreshment Zone and Reception area.",
      "Mobile phones must be on silent mode at all times.",
      "Do not play audio without headphones. Even headphone audio at high volume is discouraged.",
      "Be respectful and courteous to all staff and fellow members.",
    ],
  },
  {
    category: "Entry & Exit",
    items: [
      "Carry your membership card or valid ID on every visit.",
      "Members must sign in at reception on entry and sign out on departure.",
      "Entry is restricted to registered members and authorized guests only.",
      "Day pass visitors must complete the registration process before entering.",
    ],
  },
  {
    category: "Food & Beverages",
    items: [
      "Food is strictly prohibited inside the study halls and reading areas.",
      "Water bottles are permitted at all seats.",
      "Tea, coffee, and snacks are allowed only in the designated Refreshment Zone.",
      "Hot meals and strongly aromatic food are not permitted on the premises.",
    ],
  },
  {
    category: "Seat & Locker Policy",
    items: [
      "Seats cannot be reserved by leaving belongings unattended for more than 30 minutes.",
      "Lockers must be vacated on membership expiry. The library is not responsible for unclaimed items.",
      "Do not occupy multiple seats simultaneously.",
      "Report any damaged furniture or equipment to reception immediately.",
    ],
  },
  {
    category: "Safety & Security",
    items: [
      "The library is under 24/7 CCTV surveillance. Suspicious activity will be reported.",
      "In case of emergency, follow staff instructions and exit via the nearest fire escape.",
      "The library is not responsible for loss of personal belongings left unattended.",
      "Any form of theft, harassment, or misconduct will result in immediate membership cancellation without refund.",
    ],
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

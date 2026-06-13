import type {
  NavLink,
  ServiceTime,
  Ministry,
  ChurchEvent,
  Sermon,
  Testimonial,
  Stat,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  // { label: "Ministries", href: "/#ministries" },
  { label: "Sermons", href: "/#sermons" },
  { label: "Events", href: "/#events" },
  { label: "Prayer", href: "/#prayer" },
];

export const STATS: Stat[] = [
  { value: 23, suffix: "", label: "Years of Ministry" },
  { value: 600, suffix: "+", label: "Active Members" },
  { value: 14, suffix: "", label: "Ministries" },
  { value: 20, suffix: "K+", label: "Lives Touched" },
];

export const SERVICES: ServiceTime[] = [
  {
    icon: "clock",
    title: "Sunday Worship",
    day: "Every Sunday",
    time: "8:00 & 10:30 AM",
    description: "Celebration services of praise, the Word, and communion.",
  },
  {
    icon: "book",
    title: "Midweek Service",
    day: "Every Tuesday",
    time: "6:00 PM",
    description:
      "Bible study and teaching to deepen your walk during the week.",
  },
  {
    icon: "flame",
    title: "Prayer Meeting",
    day: "Every Thursday",
    time: "6:00 PM",
    description:
      "An intercessory gathering for the church, families, and prayer teams.",
  },
  {
    icon: "star",
    title: "Special Programs",
    day: "Quarterly & Seasonal",
    time: "Vigils & Revivals",
    description: "Anointing services, conventions, and seasons of refreshing.",
  },
];

export const MINISTRIES: Ministry[] = [
  {
    icon: "children",
    title: "Children's Ministry",
    description:
      "Bible-based fun where little ones learn to love Jesus in a safe, joyful space.",
    href: "#",
    gradient: "linear-gradient(150deg, #0a1c52, #1545b8)",
    details:
      "Our Children's Ministry (ages 0–12) is a vibrant, nurturing environment where every child is known by name. Through age-appropriate Bible lessons, worship, creative arts, and games, we help children build a lasting foundation in faith. We run Sunday School during both services and a midweek after-school club. All our volunteers are trained and vetted in child-safeguarding best practices — every child is safe and cherished here.",
    // leader: "Sis. [Name]",
    meetingTime: "Sundays · Both Services",
  },
  {
    icon: "youth",
    title: "Youth Ministry",
    description:
      "Raising a bold generation rooted in Christ through worship and discipleship.",
    href: "#",
    gradient: "linear-gradient(150deg, #0d2264, #1e3fa0)",
    details:
      "Our Youth Ministry (ages 13–25) exists to raise a bold generation deeply rooted in Christ and prepared to impact the world. Through weekly meetings, discipleship groups, youth camps, and community outreach, we challenge young people to live out their faith with courage. We also run a university fellowship arm that connects students across campuses in Abuja.",
    // leader: "Bro. [Name]",
    meetingTime: "Wednesday · 6:00 PM",
  },
  {
    icon: "women",
    title: "Women's Ministry",
    description:
      "Sisterhood, prayer, and purpose — women growing strong in faith together.",
    href: "#",
    gradient: "linear-gradient(150deg, #1a0a52, #3d1f90)",
    details:
      "The Women's Ministry — Daughters of Zion — is a sisterhood of faith where women of all ages connect, grow, and serve together. Through Bible studies, prayer retreats, mentoring, and skill-development workshops, we equip women to thrive in every role God has called them to. Monthly meetings are held on the first Saturday of each month, with quarterly retreats.",
    // leader: "Sis. [Name]",
    meetingTime: "Friday 4pm · Weekly",
  },
  {
    icon: "men",
    title: "Men's Ministry",
    description:
      "Men of integrity, leading homes and community in the fear of God.",
    href: "#",
    gradient: "linear-gradient(150deg, #06122e, #0e2256)",
    details:
      "The Men's Ministry — Valiant Men — is committed to raising men of integrity who lead their families, workplaces, and community in the fear of God. We meet monthly for fellowship, prayer, and the Word. Our annual Men's Conference draws men from across the district, and our weekly accountability groups provide ongoing support for men at every stage of life. Iron sharpens iron here.",
    // leader: "Bro. [Name]",
    meetingTime: "After Sunday Service · Weekly",
  },
  {
    icon: "worship",
    title: "Worship Ministry (Band & Choir)",
    description:
      "Lifting holy hands and voices, ushering the presence of God into every service.",
    href: "#",
    gradient: "linear-gradient(150deg, #0c1a52, #8a6020)",
    details:
      "Our Worship Ministry serves as ushers of God's presence through music in every service, leading the congregation in heartfelt, spirit-filled praise. The ministry includes the choir, band, media and sound team, and ushers — all working together to create an atmosphere where God is glorified and hearts are transformed. New member auditions and onboarding are held every quarter.",
    // leader: "Bro. [Name]",
    meetingTime:
      "Rehearsals ·Choir: Saturdays 5:00 PM  || Band: Tuesdays 6:00 PM",
  },
  {
    icon: "outreach",
    title: "Outreach & Missions",
    description:
      "Winning all — taking the Gospel and compassion beyond our walls.",
    href: "#",
    gradient: "linear-gradient(150deg, #082840, #10446e)",
    details:
      "The Outreach & Missions Ministry is the hands and feet of the church in the wider community and beyond. From medical outreaches and food distribution to evangelism campaigns and prison ministry, we take the Gospel and God's love outside our walls. We also support missionaries and church-planting efforts across Nigeria through the broader ECWA network.",
    // leader: "Bro. [Name]",
    meetingTime: "Community days · Monthly",
  },
];

export const FEATURED_EVENT: ChurchEvent = {
  day: "14",
  month: "JUN",
  title: "Annual Convention 2026",
  meta: "",
  featured: true,
  metaItems: ["Main Auditorium", "9:00 AM Daily", "Jun 14–18"],
};

export const EVENTS: ChurchEvent[] = [
  {
    day: "21",
    month: "JUN",
    title: "Youth Praise Night",
    meta: "Friday · 6:00 PM · Youth Hall",
  },
  {
    day: "29",
    month: "JUN",
    title: "Community Medical Outreach",
    meta: "Sunday · 12:00 PM · Pyakasa",
  },
  {
    day: "05",
    month: "JUL",
    title: "Marriage & Family Seminar",
    meta: "Saturday · 10:00 AM · Annex",
  },
  {
    day: "12",
    month: "JUL",
    title: "Children's Bible Camp",
    meta: "Saturday · 9:00 AM · Children's Wing",
  },
];

export const SERMONS: Sermon[] = [
  {
    series: "Series · Kingdom Living",
    title: "The Sufficiency of Grace",
    speaker: "Rev. [Pastor's Name]",
    date: "June 1, 2026",
    duration: "42:18",
    url: "https://www.facebook.com/share/r/1BBXovbW5o/",
  },
  {
    series: "Series · Faith That Wins",
    title: "Winning All for Christ",
    speaker: "Pastor [Name]",
    date: "May 25, 2026",
    duration: "38:05",
    url: "https://www.facebook.com/share/r/1LiG7PuvRM/",
  },
  {
    series: "Series · The Spirit-Filled Life",
    title: "Walking in the Power of God",
    speaker: "Rev. [Pastor's Name]",
    date: "May 18, 2026",
    duration: "51:30",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Every heart with Christ is a Missionary for Christ, Every heart without Christ is a Mission field that needs Christ.",
    name: "Bro Makadi.",
    role: "Senior Pastor, EGCC Pyakasa",
  },
  {
    quote:
      "Faith is a living, daring confidence in God's grace, so sure and certain that a man could stake his life on it a thousand times.",
    name: "Martin Luther.",
    role: "Outreach Volunteer",
  },
  {
    quote:
      "Through hard work, perseverance and a faith in God, you can live your dreams.",
    name: "Ben Carson.",
    role: "Since 2021 ",
  },
];

export const GIVING_ACCOUNT = {
  bankName: "First Bank of Nigeria",
  accountName: "ECWA Gospel Community Church Pyakasa (EGCCP)",
  accountNumber: "2042842222",
};

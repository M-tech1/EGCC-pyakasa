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
  { label: "About", href: "#welcome" },
  { label: "Services", href: "#services" },
  // { label: "Ministries", href: "#ministries" },
  { label: "Sermons", href: "#sermons" },
  { label: "Events", href: "#events" },
  { label: "Prayer", href: "#prayer" },
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
  },
  {
    icon: "youth",
    title: "Youth Ministry",
    description:
      "Raising a bold generation rooted in Christ through worship and discipleship.",
    href: "#",
  },
  {
    icon: "women",
    title: "Women's Ministry",
    description:
      "Sisterhood, prayer, and purpose — women growing strong in faith together.",
    href: "#",
  },
  {
    icon: "men",
    title: "Men's Ministry",
    description:
      "Men of integrity, leading homes and community in the fear of God.",
    href: "#",
  },
  {
    icon: "worship",
    title: "Worship Ministry",
    description:
      "Lifting holy hands and voices, ushering the presence of God into every service.",
    href: "#",
  },
  {
    icon: "outreach",
    title: "Outreach & Missions",
    description:
      "Winning all — taking the Gospel and compassion beyond our walls.",
    href: "#",
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
  },
  {
    series: "Series · Faith That Wins",
    title: "Winning All for Christ",
    speaker: "Pastor [Name]",
    date: "May 25, 2026",
    duration: "38:05",
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
      "I walked in broken and unsure, and I found a family that prayed with me until my breakthrough came. This church gave me back my hope.",
    name: "Grace A.",
    role: "Member since 2019",
  },
  {
    quote:
      "My children love coming here. The teaching is sound, the worship is alive, and you can feel the presence of God the moment you walk in.",
    name: "Daniel & Esther O.",
    role: "Members since 2021",
  },
  {
    quote:
      "Through the outreach ministry I found purpose. We are truly winning all — I've seen my own community changed by the love of Christ here.",
    name: "Joseph M.",
    role: "Outreach Volunteer",
  },
];

export const GIVING_ACCOUNT = {
  bankName: "Guaranty Trust Bank (GTBank)",
  accountName: "ECWA Gospel Church Pyakasa",
  accountNumber: "0123456789",
};

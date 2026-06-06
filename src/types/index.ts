export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceTime {
  icon: string;
  title: string;
  day: string;
  time: string;
  description: string;
}

export interface Ministry {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface ChurchEvent {
  day: string;
  month: string;
  title: string;
  meta: string;
  featured?: boolean;
  metaItems?: string[];
}

export interface Sermon {
  series: string;
  title: string;
  speaker: string;
  date: string;
  duration: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface PrayerRequest {
  name?: string;
  contact?: string;
  request: string;
  isPrivate: boolean;
}

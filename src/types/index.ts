/* ==========================================================================
 * TypeScript type definitions for the entire application.
 * All types are centralized here for easy reference and reuse.
 * ========================================================================== */

/** Supported languages */
export type Language = 'vi' | 'en'

/** Theme modes */
export type ThemeMode = 'light' | 'dark' | 'system'

/** Navigation item */
export interface NavItem {
  key: string
  path: string
  icon?: string
}

/** Personal information */
export interface PersonalInfo {
  name: string
  title: string
  gender: string
  dateOfBirth: string
  partyStatus: string
  phone: string
  email: string
  address: string
}

/** Education entry */
export interface Education {
  id: string
  institution: string
  major: string
  period: string
  achievements: string[]
  image?: string
}

/** Skill category */
export interface SkillCategory {
  id: string
  category: string
  items: string[]
  icon: string
}

/** Achievement */
export interface Achievement {
  id: string
  title: string
  description: string
  year: string
  category: AchievementCategory
  image?: string
  certificate?: string
}

/** Achievement categories */
export type AchievementCategory =
  | 'academic'
  | 'competition'
  | 'leadership'
  | 'community'
  | 'startup'
  | 'award'

/** Research project */
export interface Research {
  id: string
  title: string
  summary: string
  objectives: string[]
  technology: string[]
  contribution: string
  results: string
  award: string
  coverImage?: string
  gallery?: string[]
  pdf?: string
}

/** Project */
export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  techStack: string[]
  features: string[]
  results: string
  thumbnail?: string
  gallery?: string[]
  githubUrl?: string
  demoUrl?: string
}

/** Project categories */
export type ProjectCategory =
  | 'ai'
  | 'edtech'
  | 'programming'
  | 'tech-solutions'
  | 'teaching-innovation'

/** Activity */
export interface Activity {
  id: string
  organization: string
  role: string
  description: string
  achievements: string[]
  period: string
  image?: string
  gallery?: string[]
}

/** Library resource */
export interface LibraryResource {
  id: string
  title: string
  description: string
  category: ResourceCategory
  downloadUrl?: string
  thumbnail?: string
}

/** Resource categories */
export type ResourceCategory =
  | 'book'
  | 'teaching-material'
  | 'slide'
  | 'document'
  | 'pdf'

/** Blog post */
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  publishDate: string
  readingTime: number
  coverImage?: string
}

/** Gallery item */
export interface GalleryItem {
  id: string
  title: string
  category: GalleryCategory
  image: string
  alt: string
}

/** Gallery categories */
export type GalleryCategory =
  | 'teaching'
  | 'research'
  | 'events'
  | 'community'
  | 'certificates'

/** Contact info */
export interface ContactInfo {
  email: string
  phone: string
  address: string
  social: SocialLink[]
}

/** Social link */
export interface SocialLink {
  platform: string
  url: string
  icon: string
}

/** Contact form data */
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

/** Statistics item */
export interface StatItem {
  label: string
  value: number
  suffix?: string
  icon: string
}

/** Timeline item */
export interface TimelineItem {
  id: string
  date: string
  title: string
  description: string
  icon?: string
  image?: string
  category?: string
}

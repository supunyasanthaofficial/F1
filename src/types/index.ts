export interface Chapter {
  progress: number;
  line1: string;
  line2?: string;
  side?: 'left' | 'right';
}

export interface StatItem {
  value: string;
  label: string;
}

export interface VideoScrubProps {
  src: string;
  scrollHeight?: string;
  chapters: Chapter[];
}

export interface AutoPlayVideoProps {
  src: string;
  tag?: string;
  title?: string;
  subtitle?: string;
}

export interface RevealTextProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  align?: 'left' | 'center' | 'right';
  highlightWords?: string[];
  highlightColor?: string;
}

export interface BodyTextProps {
  text: string;
  align?: 'left' | 'right' | 'center';
}

export interface StatProps {
  value: string;
  label: string;
  accent?: boolean;
}

export interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
}

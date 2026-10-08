import { Chapter, StatItem } from '../types';

export const HERO_CHAPTERS: Chapter[] = [
  { progress: 0.00, line1: 'Built to', line2: 'fly.', side: 'left' },
  { progress: 0.20, line1: 'Every edge', line2: 'has a reason.', side: 'left' },
  { progress: 0.42, line1: '1,050', line2: 'horsepower.', side: 'right' },
  { progress: 0.64, line1: 'DRS', line2: 'open.', side: 'right' },
  { progress: 0.82, line1: '354', line2: 'km/h.', side: 'left' },
];

export const TRACK_CHAPTERS: Chapter[] = [
  { progress: 0.00, line1: 'Into', line2: 'the braking zone.', side: 'left' },
  { progress: 0.25, line1: 'Hold', line2: 'the apex.', side: 'right' },
  { progress: 0.52, line1: 'Full', line2: 'throttle.', side: 'left' },
  { progress: 0.78, line1: 'Flat out.', side: 'right' },
];

export const STATS_DATA: StatItem[] = [
  { value: '1.6L', label: 'Turbocharged V6' },
  { value: '15K', label: 'RPM redline' },
  { value: '52%', label: 'Thermal efficiency' },
  { value: '2.1s', label: '0 – 100 km/h' },
];

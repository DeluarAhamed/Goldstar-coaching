import type { MetadataRoute } from 'next';

const base = 'https://goldstar-coachingcom.vercel.app';
const routes = [
  '', 'career-coaching', 'expat-coaching', 'job-search-coaching', 'linkedin-coaching',
  'coaching-approach', 'about', 'resources', 'testimonials', 'book', 'contact', 'privacy-policy',
  'resources/career-no-longer-feels-like-yours', 'resources/explore-a-new-career-direction',
  'resources/rebuild-confidence-after-moving-abroad', 'resources/create-a-calmer-job-search-rhythm',
  'resources/linkedin-headline-is-not-your-job-title', 'resources/quiet-confidence-at-work',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: `${base}/${route}`, changeFrequency: route.startsWith('resources/') ? 'monthly' : 'weekly', priority: route === '' ? 1 : route === 'book' ? .9 : .7 }));
}

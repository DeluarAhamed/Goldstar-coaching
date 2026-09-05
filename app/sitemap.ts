import type { MetadataRoute } from 'next';

const base = 'https://goldstar-coachingcom.vercel.app';
const routes = [
  '', 'career-coaching', 'expat-coaching', 'job-search-coaching', 'linkedin-coaching',
  'coaching-approach', 'about', 'resources', 'testimonials', 'book', 'contact', 'privacy-policy',
  'resources/career-no-longer-feels-like-yours', 'resources/explore-a-new-career-direction',
  'resources/rebuild-confidence-after-moving-abroad', 'resources/create-a-calmer-job-search-rhythm',
  'resources/linkedin-headline-is-not-your-job-title', 'resources/quiet-confidence-at-work',
  'resources/what-do-you-want-more-of-at-work', 'resources/values-that-belong-in-career-decisions',
  'resources/clarity-without-perfect-plan', 'resources/career-change-small-experiments',
  'resources/tell-people-you-are-considering-change', 'resources/when-a-good-role-no-longer-fits',
  'resources/professional-identity-in-a-new-country', 'resources/network-from-zero-abroad',
  'resources/expat-partner-career-question', 'resources/choose-target-roles',
  'resources/networking-without-asking-for-job', 'resources/recover-from-job-search-rejection',
  'resources/write-a-linkedin-about-section', 'resources/linkedin-profile-for-career-change',
  'resources/linkedin-networking-rhythm', 'resources/speak-about-your-value',
  'resources/confidence-after-career-pause', 'resources/uncertainty-is-not-incompetence',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: `${base}/${route}`, changeFrequency: route.startsWith('resources/') ? 'monthly' : 'weekly', priority: route === '' ? 1 : route === 'book' ? .9 : .7 }));
}

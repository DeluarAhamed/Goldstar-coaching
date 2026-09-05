'use client';

import { useEffect } from 'react';

const heroTreatments: Record<string, { src: string; mode: string }> = {
  '/career-coaching': { src: '/nina-headshot-soft.png', mode: 'career' },
  '/expat-coaching': { src: '/nina-headshot.png', mode: 'expat' },
  '/job-search-coaching': { src: '/nina-cutout.png', mode: 'job-search' },
  '/linkedin-coaching': { src: '/nina-headshot-soft.png', mode: 'linkedin' },
  '/coaching-approach': { src: '/nina-cutout.png', mode: 'approach' },
  '/about': { src: '/nina-cutout.png', mode: 'about' },
};

export default function PagePolish() {
  useEffect(() => {
    const treatment = heroTreatments[location.pathname];
    const aside = document.querySelector<HTMLElement>('.service-page-hero > aside');
    const image = aside?.querySelector<HTMLImageElement>('img');
    if (treatment && aside && image) {
      image.src = treatment.src;
      aside.dataset.mode = treatment.mode;
    }
  }, []);
  return null;
}

'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Animations() {
  useEffect(() => {
    const details = [...document.querySelectorAll<HTMLDetailsElement>('.faqs details')];
    const closeOthers = (event: Event) => {
      const current = event.currentTarget as HTMLDetailsElement;
      if (current.open) details.forEach(item => { if (item !== current) item.open = false; });
    };
    details.forEach(item => item.addEventListener('toggle', closeOthers));

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return () => details.forEach(item => item.removeEventListener('toggle', closeOthers));

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from('.gs-header', { y: -22, opacity: 0, duration: .7, ease: 'power3.out' });
      gsap.from('.home-hero .kicker,.home-hero h1,.home-hero .hero-lead,.home-hero .hero-actions,.home-hero .hero-proof,.page-hero>div>*', { y: 32, opacity: 0, duration: .8, stagger: .08, ease: 'power3.out' });
      gsap.from('.hero-visual,.service-page-hero>aside', { clipPath: 'inset(0 0 100% 0)', scale: 1.035, duration: 1.05, ease: 'expo.out' });
      gsap.utils.toArray<HTMLElement>('.section-head,.problem-grid article,.service-card,.steps article,.quote-track blockquote,.faqs details,.signature-story article,.support-editorial article,.resources-editorial a,.proof-spotlight>*,.client-values span').forEach((element, index) => {
        gsap.from(element, { scrollTrigger: { trigger: element, start: 'top 90%', once: true }, y: 34, opacity: 0, duration: .75, delay: Math.min(index % 4, 3) * .035, ease: 'power3.out' });
      });
    });

    return () => { ctx.revert(); details.forEach(item => item.removeEventListener('toggle', closeOthers)); };
  }, []);
  return null;
}

'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

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

    if (location.pathname !== '/' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const section = document.querySelector<HTMLElement>('.home-hero ~ .testimonials');
    const track = section?.querySelector<HTMLElement>('.quote-track');
    const heading = section?.querySelector<HTMLElement>('.section-head');
    if (!track || !heading) return;

    const originals = [...track.children] as HTMLElement[];
    originals.forEach((card) => track.appendChild(card.cloneNode(true)));

    const controls = document.createElement('div');
    controls.className = 'slider-controls';
    controls.innerHTML = '<button type="button" aria-label="Previous testimonial">&#8592;</button><button type="button" aria-label="Next testimonial">&#8594;</button>';
    heading.appendChild(controls);

    const gap = parseFloat(getComputedStyle(track).gap) || 20;
    const getDistance = () => originals.reduce((total, card) => total + card.getBoundingClientRect().width + gap, 0);
    let distance = getDistance();
    let tween = gsap.fromTo(track, { x: 0 }, { x: -distance, duration: 40, repeat: -1, ease: 'none' });

    const restartLoop = (x: number) => {
      tween.kill();
      distance = getDistance();
      const normalized = ((x % distance) + distance) % distance;
      gsap.set(track, { x: -normalized });
      tween = gsap.to(track, { x: -(normalized + distance), duration: 40, repeat: -1, ease: 'none' });
    };

    const move = (direction: number) => {
      tween.pause();
      const step = (originals[0]?.getBoundingClientRect().width || 500) + gap;
      const current = Number(gsap.getProperty(track, 'x')) || 0;
      let next = current + direction * step;
      if (next > 0) next -= distance;
      if (next <= -distance) next += distance;
      gsap.to(track, { x: next, duration: 0.65, ease: 'power3.inOut', onComplete: () => restartLoop(Math.abs(next)) });
    };

    const previous = () => move(1);
    const next = () => move(-1);
    const pause = () => tween.pause();
    const play = () => tween.resume();
    const resize = () => restartLoop(Math.abs(Number(gsap.getProperty(track, 'x')) || 0));
    controls.children[0].addEventListener('click', previous);
    controls.children[1].addEventListener('click', next);
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', play);
    track.addEventListener('focusin', pause);
    track.addEventListener('focusout', play);
    window.addEventListener('resize', resize);

    return () => {
      tween.kill();
      controls.children[0]?.removeEventListener('click', previous);
      controls.children[1]?.removeEventListener('click', next);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', play);
      track.removeEventListener('focusin', pause);
      track.removeEventListener('focusout', play);
      window.removeEventListener('resize', resize);
      controls.remove();
      originals.forEach(() => track.lastElementChild?.remove());
    };
  }, []);

  return null;
}

'use client';
import {useEffect} from 'react';
import gsap from 'gsap';

const heroTreatments:Record<string,{src:string,mode:string}>={
  '/career-coaching':{src:'/nina-headshot-soft.png',mode:'career'},
  '/expat-coaching':{src:'/nina-headshot.png',mode:'expat'},
  '/job-search-coaching':{src:'/nina-cutout.png',mode:'job-search'},
  '/linkedin-coaching':{src:'/nina-headshot-soft.png',mode:'linkedin'},
  '/coaching-approach':{src:'/nina-cutout.png',mode:'approach'},
  '/about':{src:'/nina-cutout.png',mode:'about'}
};

export default function PagePolish(){useEffect(()=>{const treatment=heroTreatments[location.pathname];const aside=document.querySelector<HTMLElement>('.service-page-hero>aside');const image=aside?.querySelector<HTMLImageElement>('img');if(treatment&&aside&&image){image.src=treatment.src;aside.dataset.mode=treatment.mode}
const isHome=location.pathname==='/';const track=isHome?document.querySelector<HTMLElement>('.testimonials .quote-track'):null;if(!track||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const originals=[...track.children];originals.forEach(card=>track.appendChild(card.cloneNode(true)));const tween=gsap.to(track,{xPercent:-50,duration:38,repeat:-1,ease:'none'});const pause=()=>tween.pause(),play=()=>tween.play();track.addEventListener('mouseenter',pause);track.addEventListener('mouseleave',play);track.addEventListener('focusin',pause);track.addEventListener('focusout',play);return()=>{tween.kill();track.removeEventListener('mouseenter',pause);track.removeEventListener('mouseleave',play);track.removeEventListener('focusin',pause);track.removeEventListener('focusout',play);originals.forEach(()=>track.lastElementChild?.remove())}},[]);return null}

'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Cards() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-1',
        pin: false,
        start: 'top top',
        end: 'bottom center',
        scrub: 0.5,
      },
    });

    // add animations and labels to the timeline
    tl.addLabel('start')
      .from('#main-title', {
        rotation: -90,
        x: '16px',
        y: '75px',
        ease: 'power2.out',
      })
      .addLabel('end');
  });

  return (
    <h1
      id='main-title'
      className='text-[125px] text-[#222] font-bold relative z-10 origin-left text-left ml-16'
    >
      HUGO MIRANDA
    </h1>
  );
}

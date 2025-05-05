'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cards from './components/Cards';
import MainTitle from './components/MainTitle';
import Spheres from './components/Spheres';

export default function Home() {
  useGSAP(() => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    const commonSnap = {
      snapTo: 'labels',
      duration: { min: 0.2, max: 0.5 },
      delay: 0.1,
      ease: 'power2.inOut',
    } as any;

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-1',
        pin: false,
        start: 'top top',
        end: 'bottom center',
        scrub: 0.5,
        snap: commonSnap,
      },
    });

    tl1
      .addLabel('main_start')
      .to('#main-title', {
        rotation: 0,
        x: 0,
        y: 0,
        ease: 'power2.out',
      })
      .addLabel('main_end');

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-2',
        pin: false,
        start: 'top center',
        end: 'bottom bottom',
        scrub: 0.5,
        snap: commonSnap,
      },
    });

    tl2
      .addLabel('cards_start')
      .from('#card-1', { x: '500%', ease: 'powerOut' }, 0)
      .from('#card-2', { x: '500%', ease: 'powerOut' }, '<0.1')
      .from('#card-3', { x: '500%', ease: 'powerOut' }, '<0.1')
      .from('#card-4', { x: '500%', ease: 'powerOut' }, '<0.1')
      .addLabel('cards_end');

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-2',
        pin: false,
        start: 'bottom center',
        end: 'bottom top',
        scrub: 0.5,
        snap: commonSnap,
      },
    });

    tl3
      .addLabel('cards_out_start')
      .to('#card-1', { y: '100%', ease: 'expo' }, 0)
      .to('#card-2', { y: '100%', ease: 'expo' }, '<0.1')
      .to('#card-3', { y: '100%', ease: 'expo' }, '<0.1')
      .to('#card-4', { y: '100%', ease: 'expo' }, '<0.1')
      .addLabel('cards_out_end');
  });

  return (
    // <main className='bg-linear-to-br from-gray-100 to-[#F8F8F8] flex flex-col'>
    <main className='bg-[#C5C1C0] flex flex-col'>
      <section
        id='section-1'
        className='min-h-[100vh] relative flex justify-start items-end overflow-hidden'
      >
        <MainTitle />
        <Spheres />
      </section>
      <section
        id='section-2'
        className='h-[66vh] w-full flex flex-col justify-center border-t-10 border-amber-600'
      >
        <div className='flex flex-col items-center justify-center bg-[#222] p-16 h-full overflow-hidden border-b-10 border-[#222]'>
          <Cards />
        </div>
      </section>
      <section className='min-h-[100vh]'>Testing</section>
    </main>
  );
}

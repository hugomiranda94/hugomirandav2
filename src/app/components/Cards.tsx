'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Cards() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#section-2', // trigger the animation when the container is in view
          pin: false, // pin the trigger element while active
          start: 'top bottom', // when the top of the trigger hits the top of the viewport
          end: 'bottom bottom', // end after scrolling 500px beyond the start
          scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          //   snap: {
          //     snapTo: 'labels', // snap to the closest label in the timeline
          //     duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          //     ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
          //   },
        },
      });

      // add animations and labels to the timeline
      tl.addLabel('start')
        .from('#card-1', { rotation: 45, y: '-100px', x: '200px' })
        .from('#card-2', { rotation: 33, y: '-200px', x: '-200px' }, '<0.2')
        .from('#card-3', { rotation: 91, y: '100px', x: '200px' }, '<0.1')
        .from('#card-4', { rotation: 171, y: '250px', x: '30px' }, 0)
        .addLabel('end');
    }
    // { scope: container }
  );

  return (
    <div ref={container} className='container grid grid-cols-4 gap-4 h-full'>
      <div
        id='card-1'
        className='box border-3 rounded-xl p-4 bg-[#f8f8f8] h-full'
      >
        Box
      </div>
      <div
        id='card-2'
        className='box border-3 rounded-xl p-4 bg-[#f8f8f8] h-full'
      >
        Box
      </div>
      <div
        id='card-3'
        className='box border-3 rounded-xl p-4 bg-[#f8f8f8] h-full'
      >
        Box
      </div>
      <div
        id='card-4'
        className='box border-3 rounded-xl p-4 bg-[#f8f8f8] h-full'
      >
        Box
      </div>
    </div>
  );
}

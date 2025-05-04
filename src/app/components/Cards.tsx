'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const randomSymbol = () => {
  return Math.random() < 0.5 ? -1 : 1;
};

const generateRandomPosition = () => {
  const randomX = Math.floor(Math.random() * 300) * randomSymbol();
  const randomY = Math.floor(Math.random() * 300) * randomSymbol();
  const randomRotation = Math.floor(Math.random() * 120) * randomSymbol();
  return { rotation: randomRotation, y: `${randomY}px`, x: `${randomX}px` };
};

const randomPositions = {
  card1: generateRandomPosition(),
  card2: generateRandomPosition(),
  card3: generateRandomPosition(),
  card4: generateRandomPosition(),
};

console.log('Random positions:', randomPositions);

export default function Cards() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-2',
        pin: false,
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    // add animations and labels to the timeline
    tl.addLabel('start')
      .from('#card-1', randomPositions.card1, 0)
      .from('#card-2', randomPositions.card2, '<0.2')
      .from('#card-3', randomPositions.card3, '<0.1')
      .from('#card-4', randomPositions.card4, 0)
      .addLabel('end');
  });

  return (
    <div ref={container} className='container grid grid-cols-4 gap-4 h-full'>
      <Card id='card-1'>
        <h2 className='text-2xl font-bold uppercase text-right w-full'>
          Experience
        </h2>
        <p className='text-sm'>Fishtank (2024 - Now)</p>
        <p className='text-sm'>Signifly (2021 - 2024)</p>
        <p className='text-sm'>Accenture (2018 - 2021)</p>
        <p className='text-sm'>Epicor (2017 - 2018)</p>
      </Card>
      <Card id='card-2'>
        <h2 className='text-2xl font-bold uppercase text-right w-full'>
          Education
        </h2>
        <p className='text-sm'>University of Texas (2024 - Now)</p>
        <p className='text-sm'>
          Universidad Autonoma de Nuevo Leon (2012 - 2019)
        </p>
      </Card>
      <Card id='card-3'>
        <h2 className='text-2xl font-bold uppercase text-right w-full'>
          Skills
        </h2>
        <p className='text-sm'>
          javascript, vue, angular, react, html, css, shopify, scrum, gsap
        </p>
      </Card>
      <Card id='card-4'>
        <h2 className='text-2xl font-bold uppercase text-right w-full'>
          Other
        </h2>
        <p className='text-sm'>Languages: English, french & Spanish</p>
        <p className='text-sm'>Location: Calgary, AB</p>
      </Card>
    </div>
  );
}

const Card: React.FC<{ id: string; children: React.ReactNode }> = ({
  id,
  children,
}) => {
  return (
    <div
      id={id}
      className='flex flex-col gap-4 box border-3 border-[#222] rounded-xl p-4 h-full bg-[#222] text-[#f8f8f8] transition-all'
    >
      {children}
    </div>
  );
};

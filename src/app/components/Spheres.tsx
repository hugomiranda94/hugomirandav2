'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function Octahedrons() {
  const items = useRef<(THREE.Mesh | null)[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  const speed = 0.75;
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // Set up positions
  useEffect(() => {
    if (!items.current.length) return;
    items.current.forEach((item) => {
      if (item) {
        item.position.x = 0;
        item.position.y = -3;
        item.position.z = 0;
      }
    });
  }, []);

  // Handle mouse movement
  useEffect(() => {
    if (isMobile) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMouseMove = (e: { movementX: any; movementY: any }) => {
      const dx = e.movementX;
      const dy = e.movementY;
      if (items.current[0]) items.current[0].rotation.x += dx / 750;
      if (items.current[0]) items.current[0].rotation.y += dy / 750;
      if (items.current[1]) items.current[1].rotation.x -= dx / 1000;
      if (items.current[1]) items.current[1].rotation.y -= dy / 1000;
      if (items.current[2]) items.current[2].rotation.x += dx / 1000;
      if (items.current[2]) items.current[2].rotation.y += dy / 1000;
      if (items.current[3]) items.current[3].rotation.x -= dx / 500;
      if (items.current[3]) items.current[3].rotation.y -= dy / 500;
      if (items.current[4]) items.current[4].rotation.x += dx / 250;
      if (items.current[4]) items.current[4].rotation.y += dy / 250;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll handler
  useEffect(() => {
    const onScroll = () => {
      const scroll = Math.min(window.scrollY, window.innerHeight);
      setScrollY(scroll);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Animation loop
  useFrame(() => {
    // const cameraZ = scrollY / -500;
    // camera.position.z = cameraZ;
    // camera.position.x = scrollY / -2000;
    // camera.position.y = scrollY / -1500;

    // Animate items

    items.current.forEach((item, i) => {
      if (item) {
        const symbol = i % 2 === 0 ? 1 : -1;
        const relativeSpeed = speed / 100;
        const coefficient = 1 / ((i + 1) * 0.5);
        const finalRotation = coefficient * relativeSpeed * symbol;
        item.rotation.x += finalRotation;
        item.rotation.y += finalRotation;
      }
    });
  });

  return (
    <>
      <pointLight
        position={[5, 5, 5]}
        intensity={1000}
        distance={10}
        color={0xffff00}
      />
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (items.current[i] = el)}
          geometry={new THREE.OctahedronGeometry((i + 1) * 3, 2)}
          material={new THREE.MeshDepthMaterial({ wireframe: true })}
        />
      ))}
    </>
  );
}

export default function Spheres() {
  return (
    <div
      className='hero__3d opacity-20 absolute top-0 left-0 translate-x-[10%]'
      style={{ width: '120vw', height: '120vh' }}
    >
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 18] }}
        gl={{ alpha: true }}
      >
        <Octahedrons />
      </Canvas>
    </div>
  );
}

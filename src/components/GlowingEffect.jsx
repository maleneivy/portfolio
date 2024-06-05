'use client';
import React, { useEffect } from 'react';

const GlowingEffect = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const glow = document.getElementById('glow');
      glow.style.left = `${clientX}px`;
      glow.style.top = `${clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div id="glow" className="glow"></div>;
};

export default GlowingEffect;

'use client';
import { useState, useEffect } from 'react';
import { Icon } from '@/ui/icons/Icons';

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 transform">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="rounded-full bg-blueGreen-200 p-2 text-darkBlue shadow-lg hover:bg-blueGreen-100"
        >
          <Icon name="arrowUp" className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default GoToTopButton;

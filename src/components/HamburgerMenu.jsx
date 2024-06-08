'use client';
import { Icon } from '@/ui/icons/Icons';
import Link from 'next/link';
import { smoothScroll } from '@/utils/smoothScroll';
import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative sm:hidden">
      <button
        onClick={toggleMenu}
        className="fixed right-4 top-4 z-50 text-3xl"
      >
        {isOpen ? (
          <Icon name="close" className="text-4xl text-blueGreen-200" />
        ) : (
          <Icon name="hamburger" className="text-4xl text-blueGreen-200" />
        )}
      </button>
      <div
        className={`fixed right-0 top-0 z-40 h-full w-full bg-darkBlue transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 transform' : 'translate-x-full transform'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <Link href="#about">
            <span
              className="link my-2"
              onClick={(e) => {
                smoothScroll(e, 'about');
                toggleMenu();
              }}
            >
              About
            </span>
          </Link>
          <Link href="#skills">
            <span
              className="link my-2"
              onClick={(e) => {
                smoothScroll(e, 'skills');
                toggleMenu();
              }}
            >
              Skills
            </span>
          </Link>
          <Link href="#school-projects">
            <span
              className="link my-2 w-28 text-center"
              onClick={(e) => {
                smoothScroll(e, 'school-projects');
                toggleMenu();
              }}
            >
              School projects
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

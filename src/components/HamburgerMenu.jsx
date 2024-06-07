'use client';
import { Icon } from '@/ui/icons/Icons';
import Link from 'next/link';
import { smoothScroll } from '@/utils/smoothScroll';

const { useState } = require('react');

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative sm:hidden">
      <button onClick={toggleMenu} className="text-3xl">
        {isOpen ? (
          <Icon name="close" className="mt-4 text-4xl text-blueGreen-200" />
        ) : (
          <Icon name="hamburger" className="mt-4 text-4xl text-blueGreen-200" />
        )}
      </button>
      {isOpen && (
        <div className="top-15 absolute right-0 z-50 flex flex-col items-baseline gap-4 rounded bg-darkBlue px-20 py-20 shadow-lg">
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
      )}
    </div>
  );
};

export default HamburgerMenu;

'use client';
import personInfo from '@/data/personInfo';
import { Icon } from '@/ui/icons/Icons';
import Link from 'next/link';
import { smoothScroll } from '@/utils/smoothScroll';
import Image from 'next/image';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header className="mx-auto flex max-w-custom flex-col items-center sm:items-baseline">
      <div className="flex w-10/12 items-center justify-between">
        <div>
          <HamburgerMenu />
        </div>
      </div>
      <div className="mt-8 flex w-10/12 flex-col-reverse items-center justify-between sm:mx-10 sm:mt-20 sm:flex-row sm:items-start">
        <div className="sm:w-1/2">
          <h1 className="gradient-text mt-2 inline-block animate-gradient bg-gradient-to-r font-bold text-transparent sm:mt-10">
            {personInfo.name}
          </h1>
          <h3 className="mt-2">{personInfo.occupation}</h3>
          <div className="mt-4 flex flex-col">
            <div className="flex items-center">
              <Icon name="location" className="text-xl text-blueGreen-200" />
              <p className="ml-3">Oslo, Norway</p>
            </div>
            <div className="flex items-center">
              <Icon name="graduate" className="text-xl text-blueGreen-200" />
              <p className="ml-3">June - 2024</p>
            </div>
            <div className="flex items-center">
              <Icon name="work" className="text-xl text-blueGreen-200" />
              <p className="ml-3">Open for work/projects</p>
            </div>
            <div className="mt-6 flex gap-6">
              <Link
                href={personInfo.contact.gitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-link">
                  <Icon
                    name="gitHub"
                    className="text-4xl hover:text-blueGreen-200"
                  />
                </span>
              </Link>
              <Link
                href={personInfo.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-link">
                  <Icon
                    name="linkedin"
                    className="text-4xl hover:text-blueGreen-200"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-2 mt-20 flex justify-center sm:mb-0 sm:mt-2 sm:w-1/2 sm:justify-end">
          <Image
            src="/profile.png"
            width={400}
            height={400}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
            alt="Profile image"
            priority={true}
          />
        </div>
      </div>
      <div className="mt-10 hidden px-8 sm:flex sm:items-end sm:justify-between sm:px-0">
        <div className="sm:flex-2 sm:flex sm:gap-6">
          <Link href="#about">
            <span className="link" onClick={(e) => smoothScroll(e, 'about')}>
              About
            </span>
          </Link>
          <Link href="#skills">
            <span className="link" onClick={(e) => smoothScroll(e, 'skills')}>
              Skills
            </span>
          </Link>
          <Link href="#school-projects">
            <span
              className="link"
              onClick={(e) => smoothScroll(e, 'school-projects')}
            >
              School projects
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

'use client';
import personInfo from '@/data/personInfo';
import { Icon } from '@/ui/icons/Icons';
import Link from 'next/link';
import { smoothScroll } from '@/utils/smoothScroll';

const Header = () => {
  return (
    <header className="mx-auto flex max-w-custom flex-col items-baseline">
      <p className="mt-2">Portfolio.</p>
      <div className="mx-8 mt-20 sm:mx-10 sm:mt-36">
        <h1 className="gradient-text inline-block animate-gradient bg-gradient-to-r font-bold text-transparent">
          {personInfo.name}
        </h1>
        <h3 className="mt-2 sm:mt-4">{personInfo.occupation}</h3>
      </div>
      <div className="flex w-webkit items-end justify-between">
        <div className="sm:flex-2 hidden gap-6 sm:flex">
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
        <div className="flex-2 mr-10 mt-10 flex gap-6 pr-10">
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
    </header>
  );
};

export default Header;

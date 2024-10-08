'use client';
import { useState, useEffect } from 'react';
import personInfo from '@/data/personInfo';
import { Icon } from '@/ui/icons/Icons';
import Link from 'next/link';
import { smoothScroll } from '@/utils/smoothScroll';
import Image from 'next/image';
import HamburgerMenu from './HamburgerMenu';
import LanguageChanger from './LanguageChanger/LanguageChanger';
import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="mx-auto flex max-w-custom flex-col items-center sm:items-baseline">
      <div className="flex w-10/12 items-center justify-between">
        <div>
          <div className="cursor-pointer items-center self-start pr-4 pt-4">
            <div className="flex gap-4">
              <div
                onClick={toggleDarkMode}
                className={`mr-4 flex h-8 w-14 rounded-full p-1 transition-colors duration-500 ease-in-out ${
                  isDarkMode
                    ? 'bg-blue shadow-sm'
                    : 'bg-lightBlueGray shadow-sm'
                }`}
              >
                <div
                  className={`flex h-6 w-6 transform items-center justify-center rounded-full shadow-md transition-transform duration-500 ease-in-out ${
                    isDarkMode ? 'translate-x-6 bg-dark' : 'text-light'
                  }`}
                >
                  <Icon
                    name={isDarkMode ? 'moon' : 'sun'}
                    className={`h-4 w-4 transition-transform duration-500 ease-in-out ${
                      isDarkMode ? 'text-light' : 'text-blueGreen-200'
                    }`}
                  />
                </div>
              </div>
              <div>
                <LanguageChanger isDarkMode={isDarkMode} />
              </div>
            </div>
          </div>
          <HamburgerMenu />
        </div>
      </div>

      <div className="mt-8 flex w-10/12 flex-col-reverse items-center justify-between sm:mx-10 sm:mt-20 sm:flex-row sm:items-start">
        <div className="sm:w-1/2">
          <h1 className="gradient-text mt-2 inline-block animate-gradient bg-gradient-to-r font-bold text-transparent sm:mt-10">
            {personInfo.name}
          </h1>
          <h3 className="mt-2">{t('profession')}</h3>
          <div className="mt-4 flex flex-col">
            <div className="flex items-center">
              <Icon name="location" className="text-xl text-blueGreen-200" />
              <p className="ml-3">{t('city')}</p>
            </div>
            <div className="flex items-center">
              <Icon name="graduate" className="text-xl text-blueGreen-200" />
              <p className="ml-3">{t('graduated')}</p>
            </div>
            <div className="flex items-center">
              <Icon name="work" className="text-xl text-blueGreen-200" />
              <p className="ml-3">{t('work')}</p>
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
                    className="text-4xl text-blueGreen-300 hover:text-blueGreen-200"
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
                    className="text-4xl text-blueGreen-300 hover:text-blueGreen-200"
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
              {t('about')}
            </span>
          </Link>
          <Link href="#skills">
            <span className="link" onClick={(e) => smoothScroll(e, 'skills')}>
              {t('skills')}
            </span>
          </Link>
          <Link href="#school-projects">
            <span
              className="link"
              onClick={(e) => smoothScroll(e, 'school-projects')}
            >
              {t('projects')}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

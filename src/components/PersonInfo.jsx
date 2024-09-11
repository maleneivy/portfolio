'use client';

import personInfo from '@/data/personInfo';
import { useTranslation } from 'react-i18next';

const PersonInfo = () => {
  const { t } = useTranslation('home');
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="mx-8 sm:mx-10">
      <div className="mt-4 sm:mt-20">
        <h2 id="about" className="mb-2">
          {t('about')}
        </h2>
        <hr className="border-3 mb-2 mt-0 border-blueGreen-200" />
        {t('greeting')
          .split('\n')
          .map((paragraph, index) => (
            <p key={index} className="mb-4 font-light">
              {paragraph.trim()}
            </p>
          ))}
        <h4 className="mb-2 mt-6 sm:mt-10">{t('education')}</h4>
        <p className="mb-2 font-light">- {t('noroff')}</p>
        <p className="mb-2 font-light">- {t('oslomet')}</p>
        <p className="mb-2 font-light">- {t('uia')}</p>
        <h4 className="mb-2 mt-6 sm:mt-10">{t('keywords')}</h4>
        <div className="flex flex-wrap gap-6">
          {t('skills-set')
            .split(',')
            .map((skill, index) => (
              <p key={index} className="keywords">
                {capitalizeFirstLetter(skill.trim())}
              </p>
            ))}
        </div>
      </div>
      <div className="sm:mt-15 mt-10">
        <h2 id="skills">{t('skills')}</h2>
        <hr className="border-3 mb-2 mt-0 border-blueGreen-200" />
        <div className="mt-4">
          <h4 className="mb-2">{t('web-tech')}</h4>
          <div className="flex flex-wrap gap-6">
            {personInfo.skills.webTech.map((language, index) => (
              <p key={index} className="keywords">
                {language}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-4 sm:mt-8">
          <h4 className="mb-2">{t('other')}</h4>
          <div className="flex flex-wrap gap-6">
            {personInfo.skills.other.map((skill, index) => (
              <p key={index} className="keywords">
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;

'use client';

import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('home');

  return (
    <div className="mx-auto mt-10 max-w-custom pb-6 sm:mt-10">
      <div className="mx-8 sm:mx-10">
        <hr className="mb-4 border-blueGreen-200" />
        <p>{t('footer-text-p1')}</p>
        <p>{t('footer-text-p2')}</p>
        <p className="mt-4 text-end">@MaleneIvy</p>
      </div>
    </div>
  );
};

export default Footer;

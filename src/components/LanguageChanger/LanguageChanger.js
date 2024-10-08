'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../../i18nConfig';

export default function LanguageChanger({ isDarkMode }) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    // sett cookies for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // viderekoble til ny språksti
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <select
      onChange={handleChange}
      value={currentLocale}
      className={`cursor-pointer rounded border border-gray-300 px-2 py-1 ${
        isDarkMode ? 'bg-darkBlue text-light' : 'bg-white text-black'
      }`}
    >
      <option value="en">English</option>
      <option value="no">Norsk</option>
    </select>
  );
}

import PersonInfo from '@/components/PersonInfo';
import ProjectsInfo from '@/components/ProjectsInfo';
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="sm:mt-15 mx-auto mt-10 max-w-custom">
        <PersonInfo />
        <ProjectsInfo />
      </main>
    </TranslationsProvider>
  );
}

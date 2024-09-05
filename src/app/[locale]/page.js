import PersonInfo from '@/components/PersonInfo';
import ProjectsInfo from '@/components/ProjectsInfo';
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <>
        <Header />
        <main className="sm:mt-15 mx-auto mt-10 max-w-custom">
          <PersonInfo />
          <ProjectsInfo />
        </main>
        <Footer />
      </>
    </TranslationsProvider>
  );
}

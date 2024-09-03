import { Nunito } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import GlowingEffect from '@/components/GlowingEffect';
import Footer from '@/components/Footer';
import GoToTopButton from '@/components/GoToTopBtn';

const noto = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio for Malene Ivy',
  description:
    'The portfolio for Malene Ivy, junior front-end developer located in Oslo.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <GlowingEffect />
        <Header />
        {children}
        <Footer />
        <GoToTopButton />
      </body>
    </html>
  );
}

import personInfo from '@/data/personInfo';
import { Icon } from '@/ui/icons/Icons';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="max-w-custom mx-auto flex flex-col items-baseline">
      <div className="mx-8 mt-20 sm:mx-10 sm:mt-36">
        <h1 className="animate-gradient gradient-text inline-block bg-gradient-to-r font-bold text-transparent">
          {personInfo.name}
        </h1>
        <h3>{personInfo.occupation}</h3>
      </div>
      <div className="flex items-end">
        <div className="flex gap-6">
          <Link href="">About</Link>
          <Link href="">Skills</Link>
          <Link href="">School projects</Link>
        </div>
        <div className="mr-10 mt-10 flex gap-6">
          <Icon name="gitHub" className="text-4xl" />
          <Icon name="linkedin" className="text-4xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;

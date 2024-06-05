import personInfo from '@/data/personInfo';

const Header = () => {
  return (
    <header className="max-w-custom mx-auto">
      <div className="mx-8 mt-20 sm:mx-10 sm:mt-36">
        <h1 className="animate-gradient gradient-text inline-block bg-gradient-to-r font-bold text-transparent">
          {personInfo.name}
        </h1>
        <h3>{personInfo.occupation}</h3>
      </div>
    </header>
  );
};

export default Header;

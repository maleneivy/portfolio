import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot, FaX } from 'react-icons/fa6';
import { GiGraduateCap } from 'react-icons/gi';
import { MdWorkOutline } from 'react-icons/md';
import { HiMenuAlt3 } from 'react-icons/hi';

export const Icon = ({ name, className }) => {
  const icons = {
    gitHub: FaGithub,
    linkedin: FaLinkedin,
    location: FaLocationDot,
    graduate: GiGraduateCap,
    work: MdWorkOutline,
    hamburger: HiMenuAlt3,
    close: FaX,
  };

  const Component = icons[name];
  return <Component className={className} aria-label={name} />;
};

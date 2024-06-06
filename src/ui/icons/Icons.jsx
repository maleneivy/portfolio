import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { GiGraduateCap } from 'react-icons/gi';
import { MdWorkOutline } from 'react-icons/md';

export const Icon = ({ name, className }) => {
  const icons = {
    gitHub: FaGithub,
    linkedin: FaLinkedin,
    location: FaLocationDot,
    graduate: GiGraduateCap,
    work: MdWorkOutline,
  };

  const Component = icons[name];
  return <Component className={className} aria-label={name} />;
};

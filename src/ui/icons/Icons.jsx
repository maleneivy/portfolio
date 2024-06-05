import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Icon = ({ name, className }) => {
  const icons = {
    gitHub: FaGithub,
    linkedin: FaLinkedin,
  };

  const Component = icons[name];
  return <Component className={className} aria-label={name} />;
};

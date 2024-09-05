'use client';

import projectsInfo from '@/data/projectsInfo';
import { Icon } from '@/ui/icons/Icons';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const ProjectsInfo = () => {
  const { t } = useTranslation('home');

  return (
    <div className="sm:mt-15 mx-8 mt-10 sm:mx-10">
      <h2 id="school-projects">{t('projects-noroff')}</h2>
      <hr className="border-3 mb-2 mt-0 border-blueGreen-200" />
      <div className="my-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsInfo.map((project, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg border border-blueGreen-200 bg-blueGreen-300 transition-all duration-300 dark:bg-darkBlue"
          >
            <div className="overflow-hidden rounded-t-lg">
              <Image
                src={project.img}
                width={400}
                height={400}
                alt="Image of the homepage of the website"
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="flex h-full flex-col p-4">
              <div className="flex-grow">
                <h4 className="font-bold text-white">{project.title}</h4>
                <p className="text-lightBlueGray">
                  {t(project.descriptionKey)}
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold text-lightBlueGray">
                    {t('built-with')}
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-4 text-blueGreen-100 dark:text-blueGreen-200">
                    {project.builtWith.map((tech, idx) => (
                      <li key={idx}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-2 flex justify-between">
                <Link
                  href={project.gitHubLink}
                  className="flex items-center hover:text-blueGreen-200"
                >
                  <Icon name="gitHub" className="mr-1 text-2xl" />
                  <span>{t('code-site')}</span>
                </Link>
                <Link
                  href={project.liveSiteLink}
                  className="flex items-center hover:text-blueGreen-200"
                >
                  <Icon name="www" className="mr-1 text-2xl" />
                  <span>{t('website')}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsInfo;

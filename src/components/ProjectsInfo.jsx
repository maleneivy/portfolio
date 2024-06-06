import projectsInfo from '@/data/projectsInfo';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsInfo = () => {
  return (
    <div className="mx-8 mt-6 sm:mx-10 sm:mt-10">
      <h2 id="school-projects">Projects at Noroff</h2>
      <hr className="border-3 mb-2 mt-0 border-blueGreen-200" />
      <div className="my-4">
        {projectsInfo.map((project, index) => (
          <div key={index} className="my-4 flex flex-col sm:flex-row">
            <Image
              src={project.img}
              width={300}
              height={300}
              alt="Image of the homepage of the website"
              className="object-contain"
            />
            <div className="my-4 max-w-96 p-4">
              <h4 className="font-bold">{project.title}</h4>
              <p>{project.description}</p>
              <div>
                <Link href={project.gitHubLink}>See on Github</Link>
                <Link href={project.liveSiteLink}>Visit live site</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsInfo;

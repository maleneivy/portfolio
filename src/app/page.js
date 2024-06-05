import PersonInfo from '@/components/PersonInfo';
import ProjectsInfo from '@/components/ProjectsInfo';

export default function Home() {
  return (
    <main className="mx-auto mt-20 max-w-custom sm:mt-36">
      <PersonInfo />
      <ProjectsInfo />
    </main>
  );
}

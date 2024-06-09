import PersonInfo from '@/components/PersonInfo';
import ProjectsInfo from '@/components/ProjectsInfo';

export default function Home() {
  return (
    <main className="sm:mt-15 mx-auto mt-10 max-w-custom">
      <PersonInfo />
      <ProjectsInfo />
    </main>
  );
}

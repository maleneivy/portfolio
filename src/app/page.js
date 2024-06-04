import PersonInfo from '@/components/PersonInfo';
import ProjectsInfo from '@/components/ProjectsInfo';

export default function Home() {
  return (
    <main className="max-w-custom mx-auto mt-20 sm:mt-36">
      <PersonInfo />
      <ProjectsInfo />
    </main>
  );
}

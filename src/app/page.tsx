import Hero from '@/components/Hero';
import Project from '@/components/Project';
import { ProjectTypes } from '@/types';
import { getProjects } from '../../sanity/lib/queries'
import BackToTop from '@/components/BackToTop';

export const revalidate = 60;

export default async function Home() {
  const projects = await getProjects() as ProjectTypes[];

  return (
    <main className='ruler'>
      <Hero />
      {projects.map((project) => (
        <Project key={project._id.toString()} project={project} />
      ))}
      <BackToTop />
    </main >
  );
}

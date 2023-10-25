import ComingSoon from '@/components/ComingSoon';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Project from '@/components/Project';
import type { ProjectType } from '@/types';
import { getProjects } from '../../sanity/sanity.query';

export default async function Home() {
  const project: ProjectType[] = await getProjects();
  return (
    <main>
      <Nav />
      <div className='ruler'>
        <Hero />
        {project && project.map((item, index) => (
          <div key={index} className='relative h-full wrap mt-8' >
            <div className='border-1 border absolute h-full left-[50%]' ></div>
            <Project item={item} />
          </div>
        ))}
      </div>
    </main >
  );
}

'use client';

import Hero from '@/components/Hero';
import Project from '@/components/Project';
import { getProjects } from '@/queries'
import { ProjectTypes } from '@/types';

export default async function Home() {
  const projects: ProjectTypes[] = await getProjects();
  return (
    <main>

      <div className='ruler'>
        <Hero />
        {projects && projects.map((item, index) => (
          <div key={index} className='relative h-full wrap mt-8' >
            <div className='border-1 border absolute h-full left-[50%]' ></div>
            <Project item={item} />
          </div>
        ))}
      </div>
    </main >
  );
}

import Hero from '@/components/Hero';
import Project from '@/components/Project';

export default async function Home() {

  return (
    <main className='ruler'>
      <div className='absolute rounded-full h-72 w-72 blur-3xl'></div>
      <Hero />
      <Project />
    </main >
  );
}

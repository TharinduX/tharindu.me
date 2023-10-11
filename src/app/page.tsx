import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Project from '@/components/Project';

export default function Home() {
  return (
    <main>
      <Nav />
      <div className='ruler'>
        <Hero />
        <Project />
        <Project />
      </div>
    </main>
  );
}

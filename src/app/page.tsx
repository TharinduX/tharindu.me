import ComingSoon from '@/components/ComingSoon';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Project from '@/components/Project';

export default function Home() {
  if (process.env.NODE_ENV === 'production') {
    return (
      <ComingSoon />
    );
  } else {
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
}

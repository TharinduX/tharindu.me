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
          <div className='relative h-full wrap overflow-hidden mt-8'>
            <div className='border-1 border absolute h-full left-[50%]' ></div>
            <Project />
            <Project />
            <Project />
          </div>

        </div>
      </main >
    );
  }
}

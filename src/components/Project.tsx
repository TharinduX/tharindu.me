import { Calendar as CalendarIcon, ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa6";
import Image from 'next/image'
import Link from 'next/link'
import React, { cache } from 'react';
import { getProjects } from '../../sanity/lib/queries'
import { ProjectTypes } from '@/types';

const Project = async () => {
  const projects = await getProjects() as ProjectTypes[];

  return (
    <div>
      {projects && projects.map((item, index) => (
        <div key={index} className='relative h-full wrap' >
          <div className='border-1 border absolute h-full left-[50%] last:h-0' ></div>
          <div className='items-center flex flex-col relative'>
            <div className='relative px-4 py-2 flex gap-3 text-muted-foreground border rounded-md text-md bg-background shadow-sm'>
              <CalendarIcon /> {new Date(item.projectDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className='rounded-2xl max-w-screen-xl mt-8 mb-8 md:w-[80%] lg:w-[65%] shadow-lg dark:shadow-glow dark:shadow-primary/20'>
              <div className='relative border w-full h-full flex flex-col bg-card rounded-2xl'>
                <div className='hidden dark:block absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0'></div>
                <div className='hidden dark:block absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0'></div>
                <div className='flex w-full bg-accent/50 p-5 border-b '>
                  <div className='w-[80%] flex mx-auto items-center rounded-lg h-10 bg-accent border shadow-inner p-2'>
                    <div className='md:flex text-muted-foreground items-center mx-auto cursor-pointer hidden'>
                      <FaGithub size={18} />
                      <span className='ml-2'>
                        <Link href={item.githubURL} rel="noopener noreferrer" target="_blank">
                          {item.githubURL.toString()}
                        </Link>
                      </span>
                    </div>
                    <div className='md:hidden text-muted-foreground items-center mx-auto cursor-pointer'>
                      <Link className='flex items-center gap-2' href={item.githubURL} rel="noopener noreferrer" target="_blank">
                        GitHub Repository
                        <ExternalLink size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-7 p-10 w-full'>
                  <div className="p-5 border-dashed border rounded-lg w-full relative">
                    <div className='px-3 absolute -top-4 left-5 right-0 z-10 text-muted-foreground text-md bg-card max-w-fit'>Screenshot</div>
                    <div className='h-full border rounded-lg bg-accent/50'>
                      <Image priority={true} className='object-cover rounded-lg h-full' src={item.projectImage?.image} width={800} height={900} alt="Screenshot of the application" />
                    </div>
                  </div>
                  <div className='flex flex-col gap-7 w-full'>
                    <div className="border-dashed border rounded-lg relative">
                      <div className='px-3 absolute -top-4 left-5 right-0 z-10 text-muted-foreground text-md bg-card max-w-fit capitalize'>{item.projectCategory}</div>
                      <div className='flex p-5'>
                        <div className='flex flex-col gap-5'>
                          <div className='flex gap-5 items-center'>
                            <div className='bg-accent/50 rounded-full'>
                              <Image className='object-cover rounded-full' src={item.projectIcon?.icon} width={100} height={100} alt="Screenshot of the application" />
                            </div>
                            <div className='flex flex-col gap-2'>
                              <div className='text-2xl'>{item.projectName}</div>
                            </div>
                          </div>
                          <div className='flex justify-start flex-wrap gap-2 max-w-lg'>
                            {item.techStack && item.techStack.map((tech: any, index: any) => (
                              <div key={index} className='border bg-accent/50 rounded-full px-3 py-1 text-muted-foreground text-md'>{tech.name}</div>
                            ))}
                          </div>
                          <div className='text-muted-foreground'>
                            {item.projectDescription}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-dashed border rounded-lg relative">
                      <div className='px-3 absolute -top-4 left-5 right-0 z-10 text-muted-foreground text-md bg-card max-w-fit'>Features</div>
                      <div className='p-5'>
                        {item.features && item.features.map((feature: any, index: any) => (
                          <div key={index} className='mt-5'>
                            <div className='text-lg'>{feature.title}</div>
                            <div className='text-muted-foreground mt-2'>{feature.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;

import { Calendar as CalendarIcon, ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa6";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { ProjectTypes } from '@/types';


type ProjectProps = {
  project: ProjectTypes;
};

const Project = ({ project }: ProjectProps) => {
  return (
    <div className='relative h-full wrap' >
      <div className='border-1 border absolute h-full left-[50%] last:h-0' ></div>
      <div className='items-center flex flex-col relative'>
        <div className='relative px-4 py-2 flex gap-3 text-muted-foreground border rounded-md text-md bg-background shadow-sm items-center'>
          <CalendarIcon size={18} /> {new Date(project.projectDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <div className='rounded-2xl max-w-screen-xl mt-8 mb-8 md:w-[80%] lg:w-[75%] shadow-lg dark:shadow-glow dark:shadow-primary/20 overflow-hidden'>
          <div className='relative border w-full h-full flex flex-col bg-card rounded-2xl'>
            <div className="absolute right-0 top-0 h-16 w-16">
              {project.projectStatus ? (
                <div
                  className="absolute transform rotate-45 bg-green-700 text-center text-white py-1 right-[-38px] top-[32px] w-[170px] text-sm shadow-lg">
                  Completed
                </div>
              ) : (
                <div
                  className="absolute transform rotate-45 bg-yellow-600 text-center text-white py-1 right-[-38px] top-[32px] w-[170px] text-sm shadow-lg">
                  In Progress
                </div>
              )}

            </div>
            <div className='hidden dark:block absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0'></div>
            <div className='hidden dark:block absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0'></div>
            <div className='flex w-full bg-accent/50 p-5 border-b rounded-t-lg'>
              <div className='w-[70%] md:w-[50%] flex mx-auto items-center rounded-lg h-10 bg-accent border shadow-inner p-2'>
                <div className='md:flex text-muted-foreground items-center mx-auto cursor-pointer hidden'>
                  <FaGithub size={18} />
                  <span className='ml-2 whitespace-nowrap'>
                    <Link href={project.githubURL} rel="noopener noreferrer" target="_blank">
                      {project.githubURL.toString()}
                    </Link>
                  </span>
                </div>
                <div className='md:hidden text-muted-foreground items-center mx-auto cursor-pointer'>
                  <Link className='flex items-center gap-2' href={project.githubURL} rel="noopener noreferrer" target="_blank">
                    GitHub Repository
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row-reverse gap-7 p-10 w-full'>
              <div className="p-5 border-dashed border rounded-lg w-full relative h-full">
                <div className='px-3 absolute -top-4 left-5 right-0 z-10 text-muted-foreground text-md bg-card max-w-fit'>Screenshot</div>
                <div className='max-h-fit border rounded-lg bg-accent/50'>
                  <Image priority className='object-contain rounded-lg max-h-fit' src={project.projectImage?.image} width={800} height={900} alt="Screenshot of the application" />
                </div>
              </div>
              <div className='flex flex-col gap-7 w-full'>
                <div className="border-dashed border rounded-lg relative">
                  <div className='px-3 absolute -top-4 left-5 right-0 z-10 text-muted-foreground text-md bg-card max-w-fit capitalize'>{project.projectCategory}</div>
                  <div className='flex p-5'>
                    <div className='flex flex-col gap-5'>
                      <div className='flex gap-5 items-center'>
                        <div className='bg-accent/50 rounded-full'>
                          <Image className='object-cover rounded-full' src={project.projectIcon?.icon} width={80} height={80} alt="Screenshot of the application" />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                          <div className='text-2xl'>{project.projectName}</div>
                          <div className='flex gap-3 text-sm items-center'>
                            {project.previewURL && (
                              <Link href={project.previewURL} className='text-muted-foreground items-center flex gap-1 max-w-fit hover:text-primary hover:underline' rel="noopener noreferrer" target="_blank">
                                Live Preview
                                <ExternalLink size={12} />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start flex-wrap gap-2 max-w-lg'>
                        {project.techStack && project.techStack.map((tech: any, index: any) => (
                          <div key={index} className='border bg-accent/50 rounded-full px-3 py-1 text-muted-foreground text-md flex items-center gap-2'>
                            {tech.icon && (
                              <Image className='dark:fill-white' src={tech.icon} width={20} height={20} alt='tech stack logo' />
                            )}
                            {tech.name}</div>
                        ))}
                      </div>
                      <div className='text-muted-foreground'>
                        {project.projectDescription}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-dashed border rounded-lg relative">
                  <div className='px-3 absolute -top-4 left-5 right-0 z-10 text-muted-foreground text-md bg-card max-w-fit'>Features</div>
                  <div className='p-5'>
                    {project.features && project.features.map((feature: any, index: any) => (
                      <div key={index} className='mt-5 first:mt-0'>
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
  );
};

export default Project;

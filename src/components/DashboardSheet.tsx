
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { KanbanSquare } from 'lucide-react';
import { SiWakatime } from 'react-icons/si';
import Link from 'next/link';

type Props = {
  stats: any;
}

const DashboardSheet = ({ stats }: Props) => {
  const wakadata = stats.data
  return (
    <Sheet>
      <SheetTrigger className='hidden border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 md:flex items-center justify-center rounded-md gap-2'><KanbanSquare size={20} /> Dashboard</SheetTrigger>
      <SheetTrigger className='md:hidden border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 flex items-center justify-center rounded-md'>
        <KanbanSquare size={20} />
      </SheetTrigger>
      <SheetContent side='bottom' className='h-[90%] md:h-fit md:max-h-max overflow-y-auto'>
        <div className='max-w-screen-xl w-full mx-auto'>
          <div className='md:flex justify-between text-center md:items-end'>
            <SheetHeader className='border-b-1 mt-5'>
              <SheetTitle className='text-3xl'>Dashboard</SheetTitle>
              <SheetDescription className='px-8 md:px-0'>
                A snapshot of my coding journey: total time invested, project highlights, best day, and top favorite languages.
              </SheetDescription>
            </SheetHeader>
            <div className='text-xs text-muted-foreground mt-5'>From 20th November, 2023</div>
          </div>
          <div className='mt-5 flex flex-col md:flex-row gap-3'>
            <div className='bg-card p-5 border rounded-lg text-center justify-center flex flex-col gap-1 w-full h-36'>
              <h1 className='text-xl font-semibold'>Total Coding Time</h1>
              <p className='text-muted-foreground text-sm '>Total coding activity</p>
              <h2 className='text-lg'>{wakadata.human_readable_total_including_other_language}</h2>
            </div>
            <div className='bg-card p-5 border rounded-lg text-center justify-center flex flex-col gap-1 w-full h-36'>
              <h1 className='text-xl font-semibold'>Best Day</h1>
              <p className='text-muted-foreground text-sm '>
                Most Coding Activity in a Day
              </p>
              <h2 className='text-sm'>{
                new Date(wakadata.best_day.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })
              } -  {wakadata.best_day.text}</h2>
            </div>
            <div className='bg-card p-5 border rounded-lg text-center justify-center flex flex-col gap-1 w-full h-36'>
              <h1 className='text-xl font-semibold'>Latest Projects</h1>
              <p className='text-muted-foreground text-sm '>
                Latest projects I have worked on
              </p>
              <h2 className='text-md flex flex-col'>{wakadata.projects[0].name}
                <span className='text-xs text-muted-foreground'>
                  {wakadata.projects[0].text}
                </span>
              </h2>
            </div>
            <div className='bg-card p-5 border rounded-lg text-center justify-center flex flex-col gap-1 w-full h-36'>
              <h1 className='text-xl font-semibold'>Top Languages</h1>
              <p className='text-muted-foreground text-sm'>Top programming languages</p>

              <div className='mt-2 flex flex-wrap text-center items-center justify-center gap-2'>
                {wakadata.languages.slice(0, 3).map((language: any, index: any) => (
                  <div key={index} className='text-muted-foreground bg-accent text-sm rounded-full px-3 py-1'>{language.name}</div>
                ))}
              </div>
            </div>
          </div>
          <div className='flex mt-5 text-center text-xs text-muted-foreground gap-2 items-center justify-center'>Powered by <span className='hover:text-primary'>
            <Link className='flex gap-2 items-center text-center' href='https://wakatime.com/'>
              <SiWakatime size={20} /> Wakatime
            </Link>
          </span>
          </div>
        </div>

      </SheetContent>
    </Sheet >
  )
}

export default DashboardSheet
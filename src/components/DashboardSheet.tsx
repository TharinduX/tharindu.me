
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
const DashboardSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className='hidden border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 md:flex items-center justify-center rounded-md gap-2'><KanbanSquare size={20} /> Dashboard</SheetTrigger>
      <SheetTrigger className='md:hidden border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 flex items-center justify-center rounded-md'>
        <KanbanSquare size={20} />
      </SheetTrigger>
      <SheetContent side='bottom' className='h-[90%] md:max-h-max overflow-y-auto'>
        <div className='max-w-screen-xl w-full mx-auto'>
          <SheetHeader className='border-b-1 mt-5'>
            <SheetTitle className='text-3xl'>Dashboard</SheetTitle>
            <SheetDescription className='px-8 md:px-0'>
              A snapshot of my coding journey: total time invested, project highlights, daily averages, and favorite languages.
            </SheetDescription>
          </SheetHeader>
          <div className='mt-5 flex flex-col md:flex-row gap-3'>
            <div className='bg-card p-5 border rounded-lg text-center justify-center flex flex-col gap-2 w-full h-36'>
              <h1 className='text-xl font-semibold'>Total Coding Time</h1>
              <p className='text-muted-foreground text-sm '>Total coding activity last 14 days</p>
              <h2 className='text-lg'>4h 25m</h2>
            </div>
            <div className='bg-card p-5 border rounded-lg text-center justify-center flex flex-col gap-2 w-full h-36'>
              <h1 className='text-xl font-semibold'>Daily Average</h1>
              <p className='text-muted-foreground text-sm '>Total coding activity last 14 days</p>
              <h2 className='text-lg'>4h 25m</h2>
            </div>
            <div className='bg-card p-5 border rounded-lg text-center justify-center flex flex-col gap-2 w-full h-36'>
              <h1 className='text-xl font-semibold'>Latest Projects</h1>
              <p className='text-muted-foreground text-sm '>Project within last 14 days</p>
              <h2 className='text-lg'>4h 25m</h2>
            </div>
            <div className='bg-card p-5 border rounded-lg text-center justify-center flex flex-col gap-1 w-full h-36'>
              <h1 className='text-xl font-semibold'>Top Languages</h1>
              <p className='text-muted-foreground text-sm'>Top languages last 14 days</p>
              <div className='mt-2 flex flex-wrap text-center items-center justify-center gap-2'>
                <div className='text-muted-foreground bg-accent text-sm rounded-full px-3 py-1'>React.js</div>
                <div className='text-muted-foreground bg-accent text-sm rounded-full px-3 py-1'>Typescript</div>
                <div className='text-muted-foreground bg-accent text-sm rounded-full px-3 py-1'>Python</div>
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
    </Sheet>
  )
}

export default DashboardSheet
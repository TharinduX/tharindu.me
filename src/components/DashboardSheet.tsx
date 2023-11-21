
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaRegWindowRestore } from 'react-icons/fa6';
import { Button } from './ui/button';

const DashboardSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className='hidden border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 md:flex items-center justify-center rounded-md gap-2'><FaRegWindowRestore /> Dashboard</SheetTrigger>
      <SheetTrigger className='md:hidden border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 flex items-center justify-center rounded-md'>
        <FaRegWindowRestore />
      </SheetTrigger>
      <SheetContent side='bottom' className='h-[80%] '>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default DashboardSheet
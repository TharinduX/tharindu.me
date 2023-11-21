
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

const DashboardSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className='hidden border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 md:flex items-center justify-center rounded-md gap-2'><KanbanSquare size={20} /> Dashboard</SheetTrigger>
      <SheetTrigger className='md:hidden border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 flex items-center justify-center rounded-md'>
        <KanbanSquare size={20} />
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
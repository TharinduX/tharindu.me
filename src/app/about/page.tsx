import React from 'react'

const page = () => {
  return (
    <div className='ruler h-screen'>
      <div className='pt-32 px-10 w-full'>
        <div className='max-w-screen-md flex flex-col mx-auto p-4'>
          <div className='text-3xl lg:text-4xl items-start flex font-semibold text-foreground'>
            Hello, I'm Tharindu
          </div>
          <div className='text-md text-muted-foreground mt-5'>A Fullstack developer based on Matara, Sri Lanka </div>
          <div className='bg-accent h-[250px] mt-5 rounded-lg'></div>
        </div>
      </div>
    </div>
  )
}

export default page
import React from 'react'

const page = () => {
  return (
    <div className='ruler'>
      <div className='pt-32 pb-20 px-10 w-full'>
        <div className='max-w-screen-md flex flex-col mx-auto p-4'>
          <div className='text-3xl lg:text-4xl items-start flex font-bold text-foreground'>
            Hello, I'm Tharindu 👋
          </div>
          <div className='text-md text-muted-foreground mt-5'>A Fullstack developer based on Matara, Sri Lanka  </div>
          <div className='h-[300px] mt-5 rounded-lg bg-gradient-to-b from-primary/20 to-primary border p-0.5'>
            <div className='bg-accent w-full h-full rounded-lg'></div>
          </div>
          <div className='text-sm mt-2 text-muted-foreground'>And this is how i look like :)</div>
          <div className='text-3xl lg:text-4xl font-bold mt-5 text-foreground'>
            About Me
          </div>
          <div className='text-muted-foreground mt-5 leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh est, hendrerit mattis ultricies non, porta sit amet enim. Nunc a dolor eget odio faucibus hendrerit a eget libero. Ut dapibus nisi nulla, et viverra diam ultrices quis. Nulla dignissim, magna id mollis mollis, velit dui molestie magna, vitae varius felis neque rutrum lectus. Curabitur efficitur blandit bibendum. Etiam aliquet id ipsum vel dignissim. Suspendisse ut mattis ligula. Vivamus sapien quam, ornare sed risus nec, tristique dictum neque. Vivamus a magna convallis, sodales est eget, tincidunt dolor. Nulla vel ornare justo, pretium feugiat nisi. Morbi varius nisl ac purus rutrum, vitae porttitor tellus malesuada. Etiam pellentesque dapibus nunc nec ultrices.
          </div>
          <div className='text-3xl lg:text-4xl font-bold mt-5 text-foreground'>
            Experience
          </div>
          <div className='text-muted-foreground mt-5 leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh est, hendrerit mattis ultricies non, porta sit amet enim. Nunc a dolor eget odio faucibus hendrerit a eget libero. Ut dapibus nisi nulla, et viverra diam ultrices quis. Nulla dignissim, magna id mollis mollis, velit dui molestie magna, vitae varius felis neque rutrum lectus.
          </div>
          <div className='text-3xl lg:text-4xl font-bold mt-5 text-foreground'>
            Contributing
          </div>
          <div className='text-muted-foreground mt-5 leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh est, hendrerit mattis ultricies non, porta sit amet enim. Nunc a dolor eget odio faucibus hendrerit a eget libero. Ut dapibus nisi nulla, et viverra diam ultrices quis. Nulla dignissim, magna id mollis mollis, velit dui molestie magna, vitae varius felis neque rutrum lectus.
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
'use client'
import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const BackToTop = () => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 400) {
        setShown(true);
      }
      if (window.scrollY <= 350) {
        setShown(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (

    <div>
      {shown &&
        <div className='fixed bottom-10 right-10 bg-accent border rounded-full p-2 animate-bounce cursor-pointer' onClick={handleclick}>
          <ArrowUp className='text-primary' size={25} />
        </div>
      }
    </div>
  )
}

export default BackToTop
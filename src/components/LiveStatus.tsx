'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import vscode from '../images/vs-code.svg';
import useSWR from 'swr';

let sessionStarted = '';
let sessionEnded = '';

const LiveStatus = () => {
  const [timer, setTimer] = useState('');
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data } = useSWR(`/api/telemetry`, fetcher, {
    refreshInterval: 5000,
  });
  const event = data?.event;
  if (event) {
    sessionStarted = event?.data?.sessionStarted?.time
    sessionEnded = event?.data?.sessionEnded?.valid
  }

  useEffect(() => {
    if (sessionStarted) {
      const interval = setInterval(() => {
        timeElapsed(sessionStarted);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [sessionStarted]);

  const timeElapsed = (start: any) => {
    const startTime = new Date(start);
    const endTime = new Date();
    const timeDiff = endTime.getTime() - startTime.getTime();
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    let formattedTime = '';
    if (hours > 0) {
      formattedTime += `${hours}:`;
    }
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    formattedTime += `${formattedMinutes}:${formattedSeconds}`;
    setTimer(formattedTime);
  };
  return (
    <>
      {!sessionEnded &&
        <>
          {event ? (
            <div>
              <div className='mt-5 text-sm text-muted-foreground'>Working on something cool:</div>
              <div className=' mt-2 bg-card items-center flex max-w-fit mx-auto px-4 py-2 rounded-full border flex-wrap'>
                <div className='flex items-center text-muted-foreground gap-1 text-sm divide-solid'>
                  <div className='flex items-center gap-2 '>
                    <div className='relative flex h-3 w-3 items-center justify-center'>
                      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                      <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
                    </div>
                    <div className='truncate w-28 md:w-full'>
                      Editing {event?.data?.activeFile?.name || 'a file'}
                    </div>
                  </div>
                  <span className='flex gap-1'>
                    on
                    <Image alt='vs code' src={vscode} />
                  </span>
                  <span className='ml-1 bg-accent border px-3 py-1 rounded-full'>{timer || '00:00'} elapsed</span>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      }
    </>
  );
};

export default LiveStatus;

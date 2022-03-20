/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface RecordProps {
  title: string;
  artist: string;
}

const Record = ({ title, artist }: RecordProps) => {
  return (
    <div className='mb-5'>
      <div className='aspect-h-7 aspect-w-10 group mb-2 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
        <img
          src='https://recordsale.de/assets/record_placeholder-f6f9c8ec7c95af894337c529945c4f77cfbe802ee073e672cd264c1186ad0238.svg'
          alt=''
          className='pointer-events-none object-cover group-hover:opacity-75'
        />
      </div>
      <div className='text-xs sm:text-lg'> {`"${title}"`}</div>
      <div className='text-xs sm:text-lg'> by {artist}</div>
    </div>
  );
};

export default Record;

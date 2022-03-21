import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Record from '@/components/Record';

import cdt from '../pages/api/christian.json';

const Christian = () => {
  return (
    <div className='w-1/2 text-[#134097]'>
      <div className='pb-5 text-4xl font-semibold name text-left px-1'>
        christian.
      </div>
      <div className='grid gap-4 grid-cols-2 sm:grid-cols-3'>
        {cdt.map((album) => (
          <Record key={uuidv4()} title={album.title} artist={album.artist} />
        ))}
      </div>
    </div>
  );
};

export default Christian;

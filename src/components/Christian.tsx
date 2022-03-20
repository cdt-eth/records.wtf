import React from 'react';
import { uuid as v4 } from 'uuidv4';

import Record from '@/components/Record';

import cdt from '../pages/api/christian.json';

const Christian = () => {
  return (
    <div className=' w-1/2 '>
      <div className='pb-5 text-lg font-semibold'>Christian</div>
      <div className='xs:grid-cols-2 grid gap-4 sm:grid-cols-3'>
        {cdt.map((album) => (
          <Record key={v4()} title={album.title} artist={album.artist} />
        ))}
      </div>
    </div>
  );
};

export default Christian;

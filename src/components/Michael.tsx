import React from 'react';
import { uuid as v4 } from 'uuidv4';

import Record from '@/components/Record';

import mikey from '../pages/api/micahel.json';

const Michael = () => {
  return (
    <div className='w-1/2 text-[#134097]'>
      <div className='pb-5 text-4xl font-semibold name text-left px-1'>
        michael.
      </div>
      <div className='xs:grid-cols-2 grid gap-4 sm:grid-cols-3'>
        {mikey.map((album) => (
          <Record key={v4()} title={album.title} artist={album.artist} />
        ))}
      </div>
    </div>
  );
};

export default Michael;

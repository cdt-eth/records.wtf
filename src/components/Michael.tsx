import { recordsState, searchState } from 'atoms';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

import Record from '@/components/Record';

import mikey from '../pages/api/micahel.json';

const Michael = () => {
  const [mikeyAlbums, setMikeyAlbums] = useRecoilState(recordsState);
  const searchValue = useRecoilValue(searchState);

  useEffect(() => {
    console.log('ran');

    setMikeyAlbums(mikey);
  }, [mikeyAlbums, setMikeyAlbums]);

  return (
    <div className='w-1/2 text-[#134097]'>
      <div className='pb-5 text-4xl font-semibold name text-left px-1'>
        michael.
      </div>
      <div className='grid gap-4 grid-cols-2 sm:grid-cols-3'>
        {/* // {mikeyAlbums.map((album) => ( */}
        {mikeyAlbums
          .filter(
            (a) =>
              a.title.toLowerCase().includes(searchValue) ||
              searchValue === '' ||
              a.artist.toLowerCase().includes(searchValue)
          )
          .map((album) => (
            <Record key={uuidv4()} title={album.title} artist={album.artist} />
          ))}
      </div>
    </div>
  );
};

export default Michael;

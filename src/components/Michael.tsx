/* eslint-disable @next/next/no-img-element */
import { michaelToggledState, recordsState, searchState } from 'atoms';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

import Record from '@/components/Record';

import mikey from '../pages/api/michael.json';

const Michael = () => {
  const [mikeyAlbums, setMikeyAlbums] = useRecoilState(recordsState);
  const searchValue = useRecoilValue(searchState);
  const [results, setResults] = useState(mikey);
  const showMichaelOnly = useRecoilValue(michaelToggledState);

  useEffect(() => {
    console.log('ran');

    setMikeyAlbums(mikey);
  }, [mikeyAlbums, setMikeyAlbums]);

  useEffect(() => {
    setResults(
      mikeyAlbums.filter(
        (a) =>
          a.title.toLowerCase().includes(searchValue) ||
          searchValue === '' ||
          a.artist.toLowerCase().includes(searchValue)
      )
    );
  }, [mikeyAlbums, searchValue]);

  return (
    <div className={`  ${showMichaelOnly ? 'w-full' : 'w-1/2'} text-[#134097]`}>
      <div className='pb-5 text-4xl font-semibold name text-left px-1'>
        michael.
      </div>

      {results && results.length > 0 ? (
        <div
          className={`grid gap-4 ${
            showMichaelOnly
              ? 'grid-cols-4 sm:grid-cols-6'
              : 'grid-cols-2 sm:grid-cols-3'
          }`}
        >
          {results
            .filter(
              (a) =>
                a.title.toLowerCase().includes(searchValue) ||
                searchValue === '' ||
                a.artist.toLowerCase().includes(searchValue)
            )
            .map((album) => (
              <Record
                key={uuidv4()}
                title={album.title}
                artist={album.artist}
                cover={album.cover}
              />
            ))}
        </div>
      ) : (
        <div className='flex flex-col items-center gap-2 w-2/3 sm:m-auto sm:py-12'>
          <img src='/images/noResults.gif' alt='no-results' />
          <p className='text-xs sm:text-base font-semibold'>no results found</p>
        </div>
      )}
    </div>
  );
};

export default Michael;

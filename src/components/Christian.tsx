import React from 'react';

const Christian = () => {
  return (
    <div className='w-1/2 text-[#134097]'>
      <div className='pb-5 text-4xl font-semibold name text-left px-1'>
        christian.
      </div>
      <p className='text-center text-xl m-auto w-full sm:w-1/4 rounded-md vertical-align bg-[#134097] text-white px-2 pt-1.5 pb-2.5'>
        {' '}
        coming soon
      </p>
      <div className='grid gap-4 grid-cols-2 sm:grid-cols-3'>
        {/* {cdt.map((album) => (
          <Record
            key={uuidv4()}
            title={album.title}
            artist={album.artist}
            cover=''
          />
        ))} */}
      </div>
    </div>
  );
};

export default Christian;

import { searchState } from 'atoms';
import React from 'react';
import { useRecoilState } from 'recoil';

const Search = () => {
  const [searchInput, setSearchInput] = useRecoilState(searchState);

  return (
    <div className='relative m-auto rounded-md border border-gray-500 py-3 pl-3 pr-2 shadow-sm focus-within:border-[#134097] focus-within:ring-1 focus-within:ring-[#134097] sm:mb-6 xs:mb-2 sm:w-3/5'>
      <label
        htmlFor='name'
        // className='absolute -top-2 left-2 -mt-px inline-block bg-[#f7f4ec] px-1 text-xs font-medium text-gray-900'
        className='absolute -top-2 left-2 -mt-px inline-block bg-[#EBE9DE] px-1 text-xs font-medium text-gray-900'
      >
        Search
      </label>

      <input
        type='text'
        name='name'
        id='name'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
        // className='block w-full border-0 bg-[#f7f4ec] p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
        className='block w-full border-0 bg-[#EBE9DE] p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
        placeholder='ex. Japandroids'
      />
    </div>
  );
};

export default Search;

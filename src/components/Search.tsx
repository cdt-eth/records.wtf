import React from 'react';

const Search = () => {
  return (
    <div className='xs:w-2/5 relative m-auto mb-6 rounded-md border border-gray-300 py-3 pl-3 pr-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 sm:w-full'>
      <label
        htmlFor='name'
        className='absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900'
      >
        Search
      </label>
      <input
        type='text'
        name='name'
        id='name'
        className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
        placeholder='ex. Japandroids'
      />
    </div>
  );
};

export default Search;

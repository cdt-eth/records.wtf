import { michaelToggledState } from 'atoms';
import React from 'react';
import { useRecoilState } from 'recoil';

const Toggle = () => {
  const [showMichaelOnly, setShowMichaelOnly] =
    useRecoilState(michaelToggledState);

  const handleClick = () => {
    console.log('clicked!');

    setShowMichaelOnly(!showMichaelOnly);
  };

  return (
    <fieldset className='space-y-5'>
      <legend className='sr-only'>Notifications</legend>
      <div className='relative flex items-start'>
        <div className='flex items-center h-5'>
          <input
            id='comments'
            aria-describedby='comments-description'
            name='comments'
            type='checkbox'
            className='focus:ring-[#134097] h-4 w-4 text-[#134097] border-gray-300 rounded'
          />
        </div>
        <div className='ml-3 text-sm'>
          <label htmlFor='comments' className='font-medium text-gray-700'>
            Both
          </label>
        </div>
      </div>
      <div className='relative flex items-start'>
        <div className='flex items-center h-5'>
          <input
            id='candidates'
            aria-describedby='candidates-description'
            name='candidates'
            type='checkbox'
            onClick={handleClick}
            className='focus:ring-[#134097] h-4 w-4 text-[#134097] border-gray-300 rounded'
          />
        </div>
        <div className='ml-3 text-sm'>
          <label htmlFor='candidates' className='font-medium text-gray-700'>
            Michael
          </label>
        </div>
      </div>

      <div className='relative flex items-start'>
        <div className='flex items-center h-5'>
          <input
            id='offers'
            aria-describedby='offers-description'
            name='offers'
            type='checkbox'
            className='focus:ring-[#134097] h-4 w-4 text-[#134097] border-gray-300 rounded'
          />
        </div>
        <div className='ml-3 text-sm'>
          <label htmlFor='offers' className='font-medium text-gray-700'>
            Christian
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export default Toggle;

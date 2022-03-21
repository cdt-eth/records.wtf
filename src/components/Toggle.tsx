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
    <fieldset className=' flex items-center gap-6 '>
      <div className='relative flex items-start'>
        <div className='flex items-center h-5'>
          <input
            id='candidates'
            aria-describedby='candidates-description'
            name='candidates'
            type='checkbox'
            onClick={handleClick}
            className='focus:ring-[#EBE9DE] h-4 w-4 text-[#161616] border-[#EBE9DE] rounded'
          />
        </div>
        <div className='ml-1.5 text-sm'>
          <label htmlFor='candidates' className='font-medium  text-[#EBE9DE]'>
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
            className='focus:ring-[#EBE9DE] h-4 w-4 text-[#161616] border-[#EBE9DE] rounded'
          />
        </div>
        <div className='ml-1.5 text-sm'>
          <label htmlFor='offers' className='font-medium  text-[#EBE9DE]'>
            Christian
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export default Toggle;

import { michaelToggledState } from 'atoms';
import * as React from 'react';
import { useRecoilValue } from 'recoil';

import Christian from '@/components/Christian';
import Layout from '@/components/layout/Layout';
import Michael from '@/components/Michael';
import Search from '@/components/Search';
import Seo from '@/components/Seo';
import Toggle from '@/components/Toggle';

export default function HomePage() {
  const showMichaelOnly = useRecoilValue(michaelToggledState);

  return (
    <Layout>
      <Seo />
      <p className='name text-center text-2xl font-bold bg-[#134097] text-[#EBE9DE] py-2'>
        {' '}
        records.wtf
      </p>
      {/* <div className='mb-6 w-full bg-[#f7f4ec] px-12 pb-6 pt-6'> */}
      <div className='mb-6 w-full bg-[#EBE9DE] px-12 pb-6 pt-10'>
        <Search />
        <Toggle />
      </div>

      <div className='layout min-h-screen items-center justify-center pb-12'>
        <div className='flex gap-8 text-center'>
          <Michael />
          {!showMichaelOnly && <Christian />}
        </div>
      </div>
    </Layout>
  );
}

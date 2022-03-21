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
      <div className=' flex justify-between bg-[#134097] text-[#EBE9DE] px-6'>
        <p className='name text-2xl font-bold  py-2'> records.wtf</p>

        <Toggle />
      </div>

      <div className='mb-6 flex flex-col items-center gap-4 w-full bg-[#EBE9DE] px-12 pb-6 pt-10'>
        <Search />
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

import * as React from 'react';

import Christian from '@/components/Christian';
import Layout from '@/components/layout/Layout';
import Michael from '@/components/Michael';
import Search from '@/components/Search';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <div className='mb-6 w-full bg-[#f7f4ec] px-12 pb-6 pt-12'>
        <Search />
      </div>

      <div className='layout min-h-screen items-center justify-center pb-12'>
        <div className='flex gap-8 text-center'>
          <Michael />
          <Christian />
        </div>
      </div>
    </Layout>
  );
}

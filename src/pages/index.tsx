import * as React from 'react';
import { uuid as v4 } from 'uuidv4';

import Layout from '@/components/layout/Layout';
import Search from '@/components/Search';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Vercel from '~/svg/Vercel.svg';
import mikey from './api/micahel.json';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <div className='layout min-h-screen items-center justify-center py-12'>
        <Search />

        <div className='grid grid-cols-2 text-center'>
          <div className='border-2 border-red-500'>
            <div>Michael</div>

            <div>
              {mikey.map((album) => (
                <div key={v4()} className='grid grid-cols-2'>
                  <div> {album.title}</div>
                  <div> {album.artist}</div>
                </div>
              ))}
            </div>
          </div>

          <div className='border-2 border-red-500'>
            <div>Christian</div>
            <div>{mikey.length}</div>
          </div>
        </div>
      </div>

      {/* <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <Vercel className='text-5xl' />
            <h1 className='mt-4'>
              Next.js + Tailwind CSS + TypeScript Starter
            </h1>
            <p className='mt-2 text-sm text-gray-800'>
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{' '}
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                See the repository
              </ArrowLink>
            </p>

            <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink>

            <footer className='absolute bottom-2 text-gray-700'>
              made by{' '}
              <UnderlineLink href='https://twitter.com/cdt_eth'>
                @cdt_eth
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main> */}
    </Layout>
  );
}

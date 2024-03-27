'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import InputRadio from '../components/inputs/radio';
import { useRouter } from 'next/navigation';
import {
  GetMethodStoreGlobalPersist,
  UseStoreGlobalPersist,
} from '@/globals/stores/persist';
import { useEffect } from 'react';

export default function Home() {
  const t = useTranslations();

  const { langData } = UseStoreGlobalPersist(['langData']);
  const { setLangData } = GetMethodStoreGlobalPersist();

  const router = useRouter();

  useEffect(() => {
    router.push(`/${langData.lang}`);
  }, [langData, router]);

  return (
    <main className="flex flex-col min-h-screen p-24 items-center justify-between">
      <div className="flex flex-col">
        <div className="flex flex-row space-x-4 mb-10 justify-center item">
          <InputRadio
            args={{
              id: 'language-en',
              name: 'language',
              value: 'en',
              checked: langData?.lang === 'en',
              onChange: () => {
                setLangData({ lang: 'en' });
              },
            }}
            label={<label htmlFor="language-en">EN</label>}
          />
          <InputRadio
            args={{
              id: 'language-th',
              name: 'language',
              value: 'th',
              checked: langData?.lang === 'th',
              onChange: () => {
                setLangData({ lang: 'th' });
              },
            }}
            label={<label htmlFor="language-th">TH</label>}
          />
        </div>
        <div className="flex flex-col gap-y-6 relative place-items-center before:bg-gradient-radial before:from-white before:to-transparent before:rounded-full before:h-[300px] before:w-full before:-translate-x-1/2 before:absolute before:blur-2xl sm:before:w-[480px] ''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:invert dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/icons/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div>{t('Home.title')}</div>
        </div>
      </div>

      <div className="text-center mb-32 grid lg:text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="border border-transparent rounded-lg py-4 px-5 transition-colors group hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="transition-transform inline-block group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="border border-transparent rounded-lg py-4 px-5 transition-colors group hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="transition-transform inline-block group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="border border-transparent rounded-lg py-4 px-5 transition-colors group hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="transition-transform inline-block group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="border border-transparent rounded-lg py-4 px-5 transition-colors group hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="transition-transform inline-block group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}

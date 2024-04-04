'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { HelperInit } from '@/globals/helpers';
import { useEffect } from 'react';

export default function Home() {
  const t = useTranslations();

  useEffect(() => {
    HelperInit.InitPage({
      menuUIIsShow: { isShowHeader: true, isShowFooter: true },
      loadTimeout: 1500,
    });
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 p-20 text-gray-900 items-center justify-between lg:p-24 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col">
        <div className="flex flex-col mb-10 gap-y-6 place-items-center">
          <Image
            className="dark:invert dark:drop-shadow-[0_0_0.3rem_#00000070]"
            src="/icons/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className="dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
            {t('Home.language')}
          </div>
        </div>
      </div>

      <div className="text-center mb-22 grid lg:text-left lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-4">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="border border-transparent rounded-lg py-4 px-5 transition-colors group hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-lg font-semibold dark:text-white`}>
            {t('Home.content.docs.title')}{' '}
            <span className="transition-transform inline-block group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50 dark:text-gray-100`}>
            {t('Home.content.docs.description')}
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="border border-transparent rounded-lg py-4 px-5 transition-colors group hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-lg font-semibold dark:text-white`}>
            {t('Home.content.learn.title')}{' '}
            <span className="transition-transform inline-block group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50 dark:text-gray-100`}>
            {t('Home.content.learn.description')}
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="border border-transparent rounded-lg py-4 px-5 transition-colors group hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-lg font-semibold dark:text-white`}>
            {t('Home.content.template.title')}{' '}
            <span className="transition-transform inline-block group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50 dark:text-gray-100`}>
            {t('Home.content.template.description')}
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="border border-transparent rounded-lg py-4 px-5 transition-colors group hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-lg font-semibold dark:text-white`}>
            {t('Home.content.deploy.title')}{' '}
            <span className="transition-transform inline-block group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50 dark:text-gray-100`}>
            {t('Home.content.deploy.description')}
          </p>
        </a>
      </div>
    </main>
  );
}

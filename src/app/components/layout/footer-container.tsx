'use client';

import { UseStoreGlobal } from '@/globals/stores/session';
import { Link } from '@nextui-org/react';

export default function FooterContainer() {
  const { menuUIIsShow } = UseStoreGlobal(['menuUIIsShow']);

  if (!menuUIIsShow.isShowFooter) {
    return <></>;
  }

  return (
    <main className="bg-gray-50 dark:bg-gray-900 dark:text-gray-100 text-gray-900">
      <footer
        style={{
          fontSize: '0.75rem',
        }}
        className="text-center flex flex-col justify-center items-center p-4 border-t-1 border-gray-300 dark:border-gray-700"
      >
        © 2024 Golffy183
        <Link
          className="cursor-pointer text-gray-900 dark:text-gray-100"
          style={{ fontSize: '0.875rem' }}
          aria-current="page"
          href="https://github.com/Golffy183/next-firebase-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository: GitHub
        </Link>
      </footer>
    </main>
  );
}

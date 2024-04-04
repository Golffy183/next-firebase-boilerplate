'use client';

import { UseStoreGlobal } from '@/globals/stores/session';
import { Link } from '@nextui-org/react';

export default function FooterContainer() {
  const { menuUIIsShow } = UseStoreGlobal(['menuUIIsShow']);

  if (!menuUIIsShow.isShowFooter) {
    return <></>;
  }

  return (
    <main className="bg-gray-50 dark:bg-gray-800 dark:text-gray-400 text-gray-600">
      <footer
        style={{
          fontSize: '0.625rem',
        }}
        className="text-center flex flex-col justify-center items-center p-4 border-t-1 border-gray-300 dark:border-gray-700"
      >
        © 2024 Golffy183
        <div style={{ fontSize: '0.75rem' }} className="dark:text-gray-100 text-black">
          Repository:{' '}
          <Link
            className="cursor-pointer"
            color={'primary'}
            style={{ fontSize: '0.75rem' }}
            aria-current="page"
            onPress={() => {
              window.open(
                'https://github.com/Golffy183/next-firebase-boilerplate',
                '_blank',
              );
            }}
          >
            GitHub
          </Link>
        </div>
      </footer>
    </main>
  );
}

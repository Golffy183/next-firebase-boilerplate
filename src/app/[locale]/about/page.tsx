'use client';

import { HelperInit } from '@/globals/helpers';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    HelperInit.InitPage({
      menuUIIsShow: { isShowHeader: true, isShowFooter: true },
      loadTimeout: 1500,
    });
  }, []);

  return (
    <main className="flex min-h-screen bg-gray-50 p-20 text-gray-900 items-center justify-center lg:p-24 dark:bg-gray-800 dark:text-gray-100">
      <h1>About Page</h1>
    </main>
  );
}

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
    <main>
      <h1>About Page</h1>
    </main>
  );
}

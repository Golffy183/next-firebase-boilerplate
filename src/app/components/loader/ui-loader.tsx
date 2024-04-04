'use client';

import { UseStoreGlobal } from '@/globals/stores/session';
import styles from './ui-loader.module.css';
import { Puff } from 'react-loader-spinner';

export default function UILoader({ children }: { children: React.ReactNode }) {
  const { isLoading } = UseStoreGlobal(['isLoading']);

  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <div
        className={
          styles.loaderOverlay +
          ' flex items-center justify-center bg-gray-50 dark:bg-gray-800'
        }
      >
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#0f172a"
          ariaLabel="puff-loading"
          wrapperClass="dark:invert dark:drop-shadow-[0_0_0.3rem_#00000070]"
        />
      </div>
    </>
  );
}

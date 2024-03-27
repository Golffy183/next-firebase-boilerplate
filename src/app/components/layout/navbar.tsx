'use client';

import { UseStoreGlobalPersist } from '@/globals/stores/persist';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TfiMenu, TfiAngleDoubleDown } from 'react-icons/tfi';
import styles from './styles/navbar.module.css';

export const Navbar = () => {
  const t = useTranslations();
  const { langData } = UseStoreGlobalPersist(['langData']);
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: `/${langData.lang}`, text: t('Navbar.header.home') },
    { href: `/${langData.lang}/login`, text: t('Navbar.header.login') },
    { href: `/${langData.lang}/about`, text: t('Navbar.header.about') },
  ];

  const handleResize = () => setIsOpen(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`bg-white flex h-14 shadow-lg w-full px-6 justify-between items-center ${
        isOpen ? 'lg:justify-end' : ''
      }`}
    >
      <div className="flex h-12 w-1/6 items-center justify-start">
        <Image src="icons/icon-512x512.png" width={36} height={36} alt="logo" />
      </div>
      <div className="font-bold space-x-12 h-12 mx-6 w-4/6 items-center justify-end hidden lg:flex">
        {links.map(({ href, text }, index) => (
          <Link key={index} href={href}>
            {text}
          </Link>
        ))}
      </div>
      <div className="lg:hidden">
        <button
          className="rounded-lg flex border-2 border-gray-100 p-1.5 justify-center items-center "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <TfiAngleDoubleDown /> : <TfiMenu />}
        </button>
      </div>
      {isOpen && (
        <div
          className={
            styles.dropdown + ' bg-gray-100 w-full top-14 left-0 z-20 absolute lg:hidden'
          }
        >
          {links.map(({ href, text }, index) => (
            <Link onClick={() => setIsOpen(!isOpen)} key={index} href={href}>
              <div className="border-b border-gray-300 w-full py-2.5 px-6">{text}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

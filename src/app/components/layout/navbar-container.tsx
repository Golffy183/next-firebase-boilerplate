'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from '@nextui-org/react';
import { ThemeSwitcher } from '../theme/theme-swithcer';
import LanguageSwitcher from '../language/language-swithcer';
import { usePathname, useRouter } from '@/core/navigation';

export default function NavbarContainer() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const menuItems = [
    { href: `#`, text: t('Navbar.header.home') },
    // { href: `/login`, text: t('Navbar.header.login') },
    { href: `/about`, text: t('Navbar.header.about') },
  ];

  return (
    <Navbar disableAnimation={false} isBordered className="dark:bg-slate-950">
      <NavbarContent className="sm:hidden" justify="start">
        <li>
          <NavbarMenuToggle className="dark:invert" />
        </li>
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <li className="flex flex-row space-x-1 inset-y-0 left-[16.5%] absolute items-center">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="dark:invert dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="../icons/icon-512x512.png"
            width={36}
            height={36}
            alt="logo"
            priority
          />
          <p className="font-bold text-inherit ml-2 dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
            Next
          </p>
        </li>
      </NavbarContent>

      <NavbarContent className="gap-8 hidden items-center sm:flex" justify="center">
        <li className="border-black flex border-r-2 pr-8 items-center justify-start dark:border-white">
          <Image
            className="dark:invert dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="../icons/icon-512x512.png"
            width={36}
            height={36}
            alt="logo"
            priority
          />
          <p className="font-bold text-inherit ml-2 dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
            Next
          </p>
        </li>
        <NavbarItem isActive={pathname === '/' ? true : false}>
          <Link
            className="cursor-pointer"
            color={pathname === '/' ? 'warning' : 'foreground'}
            style={{ fontSize: 'min(max(0.75rem, 1vw), 1rem)' }}
            aria-current="page"
            onPress={() => {
              router.push('/');
            }}
          >
            {t('Navbar.header.home')}
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link
            className="cursor-pointer"
            onPress={() => {
              router.push('/login');
            }}
            style={{ fontSize: 'min(max(0.75rem, 1vw), 1rem)' }}
            aria-current="page"
            color="warning"
          >
            {t('Navbar.header.login')}
          </Link>
        </NavbarItem> */}
        <NavbarItem isActive={pathname === '/about' ? true : false}>
          <Link
            className="cursor-pointer"
            color={pathname === '/about' ? 'warning' : 'foreground'}
            style={{ fontSize: 'min(max(0.75rem, 1vw), 1rem)' }}
            aria-current="page"
            onPress={() => {
              router.push('/about');
            }}
          >
            {t('Navbar.header.about')}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <li className="hidden sm:flex sm:space-x-2 sm:items-center sm:justify-center">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </li>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            {t('Navbar.header.login')}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="dark:bg-slate-900">
        <ul>
          {menuItems.map((item, index) => (
            <li key={`${item}-${index}`}>
              <NavbarMenuItem>
                <Link
                  className="w-full"
                  color={
                    index === 2
                      ? 'warning'
                      : index === menuItems.length - 1
                        ? 'danger'
                        : 'foreground'
                  }
                  href={item.href}
                >
                  {item.text}
                </Link>
              </NavbarMenuItem>
            </li>
          ))}
        </ul>
      </NavbarMenu>
    </Navbar>
  );
}

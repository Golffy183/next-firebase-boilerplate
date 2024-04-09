'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import {
  Navbar,
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
import { useState } from 'react';
import { UseStoreGlobal } from '@/globals/stores/session';
import { useNavigateLoader } from '../../hooks/navigate-loader';
import { HelperTime } from '@/globals/helpers';
import { useTheme } from 'next-themes';

export default function NavbarContainer() {
  const { menuUIIsShow } = UseStoreGlobal(['menuUIIsShow']);

  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const navigateWithLoader = useNavigateLoader();
  const { theme } = useTheme();

  const menuItems = [
    { href: `/`, text: t('Navbar.header.home') },
    { href: `/about`, text: t('Navbar.header.about') },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!menuUIIsShow.isShowHeader) {
    return <></>;
  }

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      disableAnimation={false}
      isBordered
      className="dark:bg-slate-950 bg-white"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <li>
          <NavbarMenuToggle className="dark:text-white text-black" />
        </li>
        <li className="flex flex-row inset-y-0 left-[16.5%] absolute items-center dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
          <Image
            className="dark:invert dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="../icons/icon-512x512.png"
            width={36}
            height={36}
            alt="logo"
            priority
          />
          <p className="font-bold ml-2 text-black dark:text-white">Next</p>
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
          <p className="font-bold ml-2 text-black dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
            Next
          </p>
        </li>
        <NavbarItem isActive={pathname === '/' ? true : false}>
          <Link
            className="cursor-pointer"
            color={
              pathname === '/'
                ? theme === 'light'
                  ? 'primary'
                  : 'warning'
                : 'foreground'
            }
            style={{ fontSize: 'min(max(0.75rem, 1vw), 1rem)' }}
            aria-current="page"
            onPress={() => {
              router.push('/');
            }}
          >
            {t('Navbar.header.home')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/about' ? true : false}>
          <Link
            className="cursor-pointer"
            color={
              pathname === '/about'
                ? theme === 'light'
                  ? 'primary'
                  : 'warning'
                : 'foreground'
            }
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
        <li className="hidden sm:flex sm:space-x-2 sm:items-center sm:justify-center">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </li>
        <li className="flex sm:hidden items-center justify-end space-x-1">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </li>
        <NavbarItem>
          <Button
            as={Link}
            className={theme === 'light' ? 'text-[#2E2EFF]' : ''}
            color={theme === 'light' ? 'primary' : 'warning'}
            onPress={async () => {
              await HelperTime.WaitForMilliSecond(300);
              await navigateWithLoader('/login', 1500);
            }}
            variant="flat"
          >
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
                  className={
                    item.href === pathname
                      ? 'font-bold'
                      : 'font-normal' + ' w-full cursor-pointer'
                  }
                  color={
                    item.href === pathname
                      ? theme === 'light'
                        ? 'primary'
                        : 'warning'
                      : 'foreground'
                  }
                  onPress={() => {
                    router.push(item.href);
                    setIsMenuOpen(false);
                  }}
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

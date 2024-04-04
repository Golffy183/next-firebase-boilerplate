'use client';

import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoMoon } from 'react-icons/io5';
import { PiSunFill } from 'react-icons/pi';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      size="sm"
      isIconOnly
      aria-label={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <IoMoon /> : <PiSunFill className="text-yellow-500" />}
    </Button>
  );
}

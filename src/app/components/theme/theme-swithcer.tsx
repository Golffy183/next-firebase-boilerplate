'use client';

import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoMoon } from 'react-icons/io5';
import { PiSunFill } from 'react-icons/pi';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="rounded-lg flex py-1.5 justify-center items-center ">
      {theme === 'light' ? (
        <Button
          size="sm"
          isIconOnly
          aria-label="Dark Mode"
          onClick={() => setTheme('dark')}
        >
          <IoMoon />
        </Button>
      ) : (
        <Button
          size="sm"
          isIconOnly
          aria-label="Light Mode"
          onClick={() => setTheme('light')}
        >
          <PiSunFill className="text-yellow-500" />
        </Button>
      )}
    </div>
  );
}

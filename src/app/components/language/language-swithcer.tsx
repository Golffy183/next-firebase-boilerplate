'use client';

import { useMemo, useState } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/core/navigation';
import { AiOutlineGlobal } from 'react-icons/ai';
import { GetMethodStoreGlobal } from '@/globals/stores/session';
import { HelperTime } from '@/globals/helpers';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { setIsLoading } = GetMethodStoreGlobal();
  const [selectedKeys, setSelectedKeys] = useState(new Set([locale]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys],
  );

  return (
    <div className="flex items-center justify-center">
      <Dropdown>
        <DropdownTrigger>
          <Button aria-label="Language switcher" isIconOnly size="sm">
            <AiOutlineGlobal size={18} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Language switcher"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onAction={async (key) => {
            setIsLoading(true);
            router.replace(pathname, { locale: key.toString() });
            await HelperTime.WaitForMilliSecond(1000);
            setIsLoading(false);
          }}
        >
          <DropdownItem className="dark:text-slate-400 text-black" key="en">
            English
          </DropdownItem>
          <DropdownItem className="dark:text-slate-400 text-black" key="th">
            ไทย
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

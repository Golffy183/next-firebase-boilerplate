import { middlewareFirebase } from '@/core/middlewares/firebase';
import { HelperTime } from '@/globals/helpers';
import { GetMethodStoreGlobalPersist } from '@/globals/stores/persist';
import { GetMethodStoreGlobal } from '@/globals/stores/session';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Divider,
} from '@nextui-org/react';
import { useTranslations } from 'next-intl';

type ProfileIconProps = {
  firstName: string;
  lastName: string;
  email: string;
  setIsLogout: () => void;
};

const ProfileIcon = (props: ProfileIconProps) => {
  const t = useTranslations();
  const { setUserData } = GetMethodStoreGlobalPersist();
  const { setIsLoading } = GetMethodStoreGlobal();

  const logout = async () => {
    setIsLoading(true);
    await middlewareFirebase.Auth.SignOut();
    await HelperTime.WaitForMilliSecond(800);
    setUserData(null);
    setIsLoading(false);
    props.setIsLogout();
  };

  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          src="./assets/temp-profile.jpg"
        />
      </DropdownTrigger>
      <DropdownMenu disabledKeys={['profile']} aria-label="User Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-bold">
            {t('Navbar.profile.title', { name: props.firstName })}
          </p>
          <p className="font-bold ml-2 mb-2 text-xs truncate">{props.email}</p>
          <Divider />
        </DropdownItem>

        <DropdownItem onPress={() => logout()} key="logout" color="danger">
          {t('Navbar.profile.logout')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileIcon;

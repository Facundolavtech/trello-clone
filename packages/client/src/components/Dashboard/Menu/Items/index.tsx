import { ReactElement } from 'react';
import Link from 'next/link';
import { FiLogOut } from 'react-icons/fi';
import MenuItem from '../Item';
import useAuthMethods from '../../../../features/Auth/hooks/useAuthMethods';

const MenuItems = () => {
  const { logout } = useAuthMethods();

  return (
    <MenuItem icon={FiLogOut} content="Logout" bg="red.400" styles={{ borderRadius: 8, fontWeight: 500, fontSize: 14 }} color="white" onClick={() => logout()} />
  );
};

export default MenuItems;

const LinkItem = ({ path, children }: { path: string; children: ReactElement | ReactElement[] }) => {
  if (window?.location.href === path) {
    return <>{children}</>;
  }

  return <Link href={path}>{children}</Link>;
};

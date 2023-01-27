import { ReactElement } from 'react';
import Link from 'next/link';
import { FiLogOut } from 'react-icons/fi';
import MenuItem from '../Item';

const MenuItems = () => {
  return <MenuItem icon={FiLogOut} content="Logout" bg="red.400" styles={{ borderRadius: 8, fontWeight: 500, fontSize: 14 }} color="white" onClick={() => null} />;
};

export default MenuItems;

const LinkItem = ({ path, children }: { path: string; children: ReactElement | ReactElement[] }) => {
  if (window?.location.href === path) {
    return <>{children}</>;
  }

  return <Link href={path}>{children}</Link>;
};

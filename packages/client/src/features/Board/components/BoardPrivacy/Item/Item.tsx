import { FC, ReactNode } from 'react';
import { MenuItem } from '@chakra-ui/react';

type Props = {
  onClick: (params?: any) => void;
  children: ReactNode;
  disabled: boolean;
};

const BoardPrivacyMenuItem: FC<Props> = ({ onClick, children, disabled }) => {
  return (
    <MenuItem
      width="full"
      height="58px"
      isDisabled={disabled}
      padding="12px"
      borderRadius="8px"
      _active={{}}
      _hover={!disabled ? { cursor: 'pointer', backgroundColor: 'lightgray.1' } : {}}
      onClick={onClick}
    >
      {children}
    </MenuItem>
  );
};

export default BoardPrivacyMenuItem;

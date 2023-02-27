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
      padding="12px"
      borderRadius="8px"
      isDisabled={disabled}
      _hover={!disabled ? { cursor: 'pointer', backgroundColor: 'lightgray.1' } : undefined}
      onClick={onClick}
    >
      {children}
    </MenuItem>
  );
};

export default BoardPrivacyMenuItem;

import { FC, ReactNode } from 'react';
import { MenuItem } from '@chakra-ui/react';

type Props = {
  onClick: (params?: any) => void;
  children: ReactNode;
};

const BoardPrivacyMenuItem: FC<Props> = ({ onClick, children }) => {
  return (
    <MenuItem width="full" height="58px" padding="12px" borderRadius="8px" _hover={{ cursor: 'pointer', backgroundColor: 'lightgray.1' }} onClick={onClick}>
      {children}
    </MenuItem>
  );
};

export default BoardPrivacyMenuItem;

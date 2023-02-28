import { FC } from 'react';
import { CloseButton, Heading, HStack } from '@chakra-ui/react';

type Props = {
  onClose: () => void;
};

const Header: FC<Props> = ({ onClose }) => {
  return (
    <HStack width="full" justifyContent="space-between">
      <Heading fontWeight={500} fontSize={14} color="gray.3">
        Update list
      </Heading>
      <CloseButton fontSize={10} onClick={onClose} />
    </HStack>
  );
};

export default Header;

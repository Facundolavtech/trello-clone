import { FC } from 'react';
import { Icon } from '@chakra-ui/react';
import { MdOutlineClose } from 'react-icons/md';
import Button from 'components/Button';

type Props = {
  onClick: (e: any) => void;
};

const CloseModalButton: FC<Props> = ({ onClick }) => {
  return (
    <Button variant="primary" zIndex={999} width="32px" height="32px" position="absolute" right="11px" top="11px" onClick={onClick}>
      <Icon as={MdOutlineClose} color="white" fontSize={22} />
    </Button>
  );
};

export default CloseModalButton;

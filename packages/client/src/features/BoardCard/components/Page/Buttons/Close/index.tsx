import { FC } from 'react';
import { Icon } from '@chakra-ui/react';
import { MdOutlineClose } from 'react-icons/md';
import Button from 'components/Button';

type Props = {
  onClick: () => void;
};

const CloseButton: FC<Props> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="primary"
      style={{ position: 'absolute', top: '9px', right: '16px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', zIndex: 99 }}
      width="32px"
      height="32px"
    >
      <Icon as={MdOutlineClose} color="white" fontSize={22} />
    </Button>
  );
};

export default CloseButton;

import { Icon, Text } from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import Button from '../../../../../components/Button';
import NiceModal from '@ebay/nice-modal-react';
import CreateBoardModal from '../../Modals/Create';

const NewBoardButton = () => {
  return (
    <Button variant="primary" px={4} py={3} style={{ gap: 4, alignItems: 'center' }} onClick={() => NiceModal.show(CreateBoardModal)}>
      <Icon as={BiPlus} width="10px" height="10px" color="white" />
      <Text color="white" fontSize={10} fontWeight={500}>
        Add
      </Text>
    </Button>
  );
};

export default NewBoardButton;

import { Icon } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import Button from '../../../../../components/Button';

const AddBoardMemberButton = () => {
  return (
    <Button variant="primary" width="32px" height="32px">
      <Icon as={AiOutlinePlus} color="white" fontSize={14} />
    </Button>
  );
};

export default AddBoardMemberButton;

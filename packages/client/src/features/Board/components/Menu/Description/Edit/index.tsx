import { Icon, Text } from '@chakra-ui/react';
import Button from 'components/Button';
import { MdEdit } from 'react-icons/md';

const EditDescription = () => {
  return (
    <Button width="62px" height="24px" variant="outline" gap="10px">
      <Icon as={MdEdit} fontSize={9} color="gray.3" />
      <Text fontSize={10} fontWeight={500} color="gray.3">
        Edit
      </Text>
    </Button>
  );
};

export default EditDescription;

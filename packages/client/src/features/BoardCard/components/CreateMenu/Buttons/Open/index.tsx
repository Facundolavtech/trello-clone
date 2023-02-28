import { Icon, Text, MenuButton as ChakraMenuButton } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import Button from '../../../../../../components/Button';
import { FontFamily } from '../../../../../../theme/constants';

const OpenButton = () => {
  return (
    <ChakraMenuButton width="full">
      <Button as="div" height="32px" variant="primary" style={{ background: '#DAE4FD', justifyContent: 'space-between' }}>
        <Text color="blue.1" fontWeight={500} fontSize={12} fontFamily={FontFamily.NotoSans}>
          Add another card
        </Text>
        <Icon as={AiOutlinePlus} color="blue.1" fontSize={12} />
      </Button>
    </ChakraMenuButton>
  );
};

export default OpenButton;

import { VStack } from '@chakra-ui/react';
import ColorsInput from './Inputs/Colors';
import NameInput from './Inputs/Name';

const Form = () => {
  return (
    <VStack spacing="15px">
      <NameInput />
      <ColorsInput />
    </VStack>
  );
};

export default Form;

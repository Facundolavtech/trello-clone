import { VStack } from '@chakra-ui/react';
import ColorsInput from 'features/BoardCard/components/Page/Sidepanel/Actions/Labels/Actions/Create/Form/Inputs/Colors';
import NameInput from 'features/BoardCard/components/Page/Sidepanel/Actions/Labels/Actions/Create/Form/Inputs/Name';

const Form = () => {
  return (
    <VStack spacing="15px">
      <NameInput />
      <ColorsInput />
    </VStack>
  );
};

export default Form;

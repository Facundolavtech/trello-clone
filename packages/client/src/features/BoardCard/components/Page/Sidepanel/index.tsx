import { VStack } from '@chakra-ui/react';
import Actions from 'features/BoardCard/components/Page/Sidepanel/Actions';

const Sidepanel = () => {
  return (
    <VStack spacing="26px" width="full">
      <Actions />
    </VStack>
  );
};

export default Sidepanel;

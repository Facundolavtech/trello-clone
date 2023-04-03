import { VStack } from '@chakra-ui/react';
import Actions from 'features/BoardCard/components/Page/Sidepanel/Actions';
import Members from 'features/BoardCard/components/Page/Sidepanel/Members';

const Sidepanel = () => {
  return (
    <VStack spacing="26px" maxWidth="150px" as="aside">
      <Actions />
      <Members />
    </VStack>
  );
};

export default Sidepanel;

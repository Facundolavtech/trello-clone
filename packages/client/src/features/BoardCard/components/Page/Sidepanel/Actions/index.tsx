import { VStack } from '@chakra-ui/react';
import CoverMenu from './CoverMenu';
import LabelMenu from './LabelMenu';
import Title from './Title';

const Actions = () => {
  return (
    <VStack spacing="12px" width="full" alignItems="flex-start">
      <Title />
      <CoverMenu />
      <LabelMenu />
    </VStack>
  );
};

export default Actions;

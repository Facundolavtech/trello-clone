import { HStack, VStack } from '@chakra-ui/react';
import DescriptionBox from 'features/Board/components/Menu/Description/Box';
import EditDescription from 'features/Board/components/Menu/Description/Edit';
import DescriptionTitle from 'features/Board/components/Menu/Description/Title';

const Description = ({ canEdit }) => {
  return (
    <VStack width="full" alignItems="flex-start" spacing="14px">
      <HStack spacing="13px" width="full" justifyContent="flex-start">
        <DescriptionTitle />
        {canEdit && <EditDescription />}
      </HStack>
      <DescriptionBox />
    </VStack>
  );
};

export default Description;

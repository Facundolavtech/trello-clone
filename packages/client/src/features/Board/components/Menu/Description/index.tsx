import { HStack, VStack } from '@chakra-ui/react';
import DescriptionBox from './Box';
import EditDescription from './Edit';
import DescriptionTitle from './Title';

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

import { Flex } from '@chakra-ui/react';
import CoverMenu from './Cover';
import LabelMenu from './Labels';
import Title from './Title';

const Actions = () => {
  return (
    <Flex width="full" gap="12px" flexDirection="column" alignItems="flex-start">
      <Title />
      <CoverMenu />
      <LabelMenu />
    </Flex>
  );
};

export default Actions;

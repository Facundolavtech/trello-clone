import { Flex } from '@chakra-ui/react';
import CoverMenu from 'features/BoardCard/components/Page/Sidepanel/Actions/Cover';
import LabelMenu from 'features/BoardCard/components/Page/Sidepanel/Actions/Labels';
import Title from 'features/BoardCard/components/Page/Sidepanel/Actions/Title';

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

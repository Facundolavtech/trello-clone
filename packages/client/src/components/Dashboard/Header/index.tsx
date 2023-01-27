import { Divider, HStack, Text } from '@chakra-ui/react';
import WrappedContainer from '../../Containers/Wrapped';
import Logo from '../../Logo';

const Header = () => {
  return (
    <HStack as="header" boxShadow="0px 2px 2px rgba(0, 0, 0, 0.05)" width="full" bg="white" height="68px" px={6} alignItems="center">
      <WrappedContainer styles={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <HStack spacing={16} height="full">
          <Logo withTitle width="32px" height="29px" />
          <HStack spacing={4} height="full">
            <Text>BoardTitle</Text>
            <Divider orientation="vertical" height="50%" color="#E0E0E0" />
            <Text>All boards button</Text>
          </HStack>
        </HStack>
        <HStack spacing={10}>
          <Text>Searchbox</Text>
          <Text>Profile</Text>
        </HStack>
      </WrappedContainer>
    </HStack>
  );
};

export default Header;

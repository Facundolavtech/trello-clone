import { Divider, Menu as ChakraMenu, MenuList, Text, VStack } from '@chakra-ui/react';
import MenuItems from 'components/Dashboard/Menu/Items';
import MenuButton from 'components/Dashboard/Menu/Button';
import useUserProfile from 'hooks/useUserProfile';
import Loading from 'components/Dashboard/Menu/Loading';
import Error from 'components/Dashboard/Menu/Error';
import formatTimestampToDate from 'utils/formatTimestampToDate';

const Menu = () => {
  const { data: user, error } = useUserProfile();

  if (error) {
    return <Error />;
  }

  if (user) {
    return (
      <ChakraMenu>
        <MenuButton />
        <MenuList padding={4} maxWidth="224px">
          <VStack alignItems="flex-start">
            <Text width="full" className="preventTextOverflow" color="gray.4" fontSize={14} fontWeight={400}>
              {user.email}
            </Text>
            <Text color="gray.4" fontSize={14} fontWeight={400}>
              Registered on{' '}
              <Text as="time" color="gray.3" fontWeight={500}>
                {formatTimestampToDate(user.createdAt, 'MMMM d, yyyy')}
              </Text>
            </Text>
          </VStack>
          <Divider orientation="horizontal" width="full" borderColor="rgba(0,0,0,0.1)" my={4} />
          <MenuItems />
        </MenuList>
      </ChakraMenu>
    );
  }

  return <Loading />;
};

export default Menu;

import { Divider, Menu as ChakraMenu, MenuList, Text, VStack } from '@chakra-ui/react';
import MenuItems from './Items';
import MenuButton from './Button';
import formatDate from 'date-fns/format';
import { fromUnixTime } from 'date-fns';
import useUserProfile from '../../../hooks/useUserProfile';
import Loading from './Loading';
import Error from './Error';

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
              Register at:{' '}
              <Text as="strong" color="gray.3" fontWeight={500}>
                {formatDate(fromUnixTime(user.createdAt || 0), 'dd/MM/yyyy')}
              </Text>
            </Text>
          </VStack>
          <Divider orientation="horizontal" width="full" borderColor="rgba(0,0,0,0.1)" my={4} />
          <VStack>
            <MenuItems />
          </VStack>
        </MenuList>
      </ChakraMenu>
    );
  }

  return <Loading />;
};

export default Menu;

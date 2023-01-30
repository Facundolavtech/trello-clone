import { Divider, Menu as ChakraMenu, MenuList, Text, VStack } from '@chakra-ui/react';
import MenuItems from './Items';
import MenuButton from './Button';
import { useQuery } from 'react-query';
import { IUser } from '../../../models/user.model';
import formatDate from 'date-fns/format';
import { fromUnixTime } from 'date-fns';

const Menu = () => {
  const { data } = useQuery<IUser>('user/profile');

  if (!data) return null;

  return (
    <ChakraMenu>
      <MenuButton />
      <MenuList padding={4}>
        <VStack alignItems="flex-start">
          <Text color="gray.4" fontSize={14} fontWeight={400}>
            {data.email}
          </Text>
          <Text color="gray.4" fontSize={14} fontWeight={400}>
            Register at:{' '}
            <Text as="strong" color="gray.3" fontWeight={500}>
              {formatDate(fromUnixTime(data.createdAt), 'dd/MM/yyyy')}
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
};

export default Menu;

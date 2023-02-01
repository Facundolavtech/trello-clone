import { Divider, HStack, Menu as ChakraMenu, MenuList, SkeletonCircle, SkeletonText, Text, VStack } from '@chakra-ui/react';
import MenuItems from './Items';
import MenuButton from './Button';
import formatDate from 'date-fns/format';
import { fromUnixTime } from 'date-fns';
import { IUser } from '../../../models/user.model';
import useQueryState from '../../../hooks/useQueryState';

const Menu = () => {
	const state = useQueryState<IUser>('user/profile');

	if (state.status === 'loading') {
		return (
			<HStack spacing={4}>
				<SkeletonCircle size="8" />
				<SkeletonText noOfLines={2}>Loading user</SkeletonText>
			</HStack>
		);
	}

	return (
		<ChakraMenu>
			<MenuButton />
			<MenuList padding={4}>
				<VStack alignItems="flex-start">
					<Text color="gray.4" fontSize={14} fontWeight={400}>
						{state.data?.email}
					</Text>
					<Text color="gray.4" fontSize={14} fontWeight={400}>
						Register at:{' '}
						<Text as="strong" color="gray.3" fontWeight={500}>
							{formatDate(fromUnixTime(state.data?.createdAt || 0), 'dd/MM/yyyy')}
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

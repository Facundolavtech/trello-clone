import { Avatar, HStack, MenuButton as ChakraMenuButton, Text } from '@chakra-ui/react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { IUser } from '../../../../models/user.model';
import { FontFamily } from '../../../../theme/constants';
import useQueryData from '../../../../hooks/useQueryData';

const MenuButton = () => {
	const data: IUser = useQueryData('user/profile');

	return (
		<ChakraMenuButton transition="all 0.2s">
			<HStack spacing="20px" alignItems="center">
				<HStack spacing="11px">
					<Avatar width="32px" height="32px" name={data.name} src={data.picture || ''} bg={data.picture ? 'transparent' : 'gray.4'} color="gray.1" />
					<Text color="gray.1" fontSize={12} fontWeight={700} fontFamily={FontFamily.NotoSans}>
						{data.name}
					</Text>
				</HStack>
				<RiArrowDownSFill color="gray.1" />
			</HStack>
		</ChakraMenuButton>
	);
};

export default MenuButton;

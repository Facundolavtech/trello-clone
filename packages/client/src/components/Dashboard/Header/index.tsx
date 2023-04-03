import { HStack, Text, Icon, Box, Heading } from '@chakra-ui/react';
import Searchbar from 'features/Board/components/Searchbar';
import BoardTitle from 'features/Board/components/Title';
import Button from 'components/Button';
import WrappedContainer from 'components/Containers/Wrapped';
import { CgMenuGridR } from 'react-icons/cg';
import Logo from 'components/Logo';
import Menu from 'components/Dashboard/Menu';
import Link from 'next/link';
import { AppRoutes } from 'config/routes';
import { useRouter } from 'next/router';
import { FontFamily } from 'theme/constants';

export enum HeaderStyles {
  height = 68,
}

const Header = () => {
  const router = useRouter();

  return (
    <HStack
      as="header"
      position="fixed"
      top={0}
      zIndex={900}
      boxShadow="0px 2px 2px rgba(0, 0, 0, 0.05)"
      width="full"
      bg="white"
      height={HeaderStyles.height}
      alignItems="center"
    >
      <WrappedContainer styles={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box gap="40px" display="flex" height="full">
          <Logo width="32px" height="29px">
            <Heading as="h1" color="gray.1" fontSize={18} fontWeight={600} fontFamily={FontFamily.Poppins}>
              Thullo
            </Heading>
          </Logo>
          {router.pathname.includes(AppRoutes.BOARD) && (
            <HStack spacing="24px" height="full">
              <BoardTitle />
              <Link href={AppRoutes.DASHBOARD}>
                <Button gap="8px" variant="lightgray" px={4} py={3}>
                  <Icon as={CgMenuGridR} width="12px" height="12px" color="gray.3" />
                  <Text color="gray.3" fontSize={12} fontWeight={500}>
                    All boards
                  </Text>
                </Button>
              </Link>
            </HStack>
          )}
        </Box>
        <Box gap={10} display="flex" as="nav">
          <Searchbar />
          <Menu />
        </Box>
      </WrappedContainer>
    </HStack>
  );
};

export default Header;

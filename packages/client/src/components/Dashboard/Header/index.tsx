import { Divider, HStack, Text, Icon } from '@chakra-ui/react';
import Searchbar from '../../../features/Board/components/Searchbar';
import BoardTitle from '../../../features/Board/components/Title';
import Button from '../../Button';
import WrappedContainer from '../../Containers/Wrapped';
import { CgMenuGridR } from 'react-icons/cg';
import Logo from '../../Logo';
import Menu from '../Menu';
import Link from 'next/link';
import { AppRoutes } from '../../../config/routes';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <HStack as="header" boxShadow="0px 2px 2px rgba(0, 0, 0, 0.05)" width="full" bg="white" height="68px" px={6} alignItems="center">
      <WrappedContainer styles={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <HStack spacing={16} height="full">
          <Logo withTitle width="32px" height="29px" />
          {router.pathname.includes(AppRoutes.BOARD) && (
            <HStack spacing={4} height="full">
              <BoardTitle />
              <Divider orientation="vertical" height="50%" color="#E0E0E0" />
              <Link href={AppRoutes.DASHBOARD}>
                <Button style={{ gap: 8 }} variant="lightgray" px={4} py={3}>
                  <Icon as={CgMenuGridR} width="12px" height="12px" color="gray.3" />
                  <Text color="gray.3" fontSize={12} fontWeight={500}>
                    All boards
                  </Text>
                </Button>
              </Link>
            </HStack>
          )}
        </HStack>
        <HStack spacing={10}>
          <Searchbar />
          <Menu />
        </HStack>
      </WrappedContainer>
    </HStack>
  );
};

export default Header;

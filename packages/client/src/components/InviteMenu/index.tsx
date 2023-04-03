import { FC, ReactNode } from 'react';
import { HStack, Icon, Menu, MenuList, Text, VStack } from '@chakra-ui/react';
import Button from 'components/Button';
import { FontFamily } from 'theme/constants';
import Searchbox from 'components/Searchbox';
import { MdSearch } from 'react-icons/md';

type Props = { openButton: ReactNode; title: string; subtitle: string };

const InviteMenu: FC<Props> = ({ openButton, title, subtitle }) => {
  return (
    <Menu preventOverflow matchWidth>
      {openButton}
      <MenuList width="245px" boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)" borderWidth={1} borderColor="gray.5" borderRadius="12px" px="12px" py="9px">
        <VStack width="full" spacing="1.3px" mb="13.56px" alignItems="flex-start">
          <Text color="gray.2" fontSize={12} fontWeight={600}>
            {title}
          </Text>
          <Text color="gray.3" fontSize={12} fontFamily={FontFamily.NotoSans}>
            {subtitle}
          </Text>
        </VStack>
        <VStack width="full" mb="23.88px" spacing="10px">
          <Searchbox
            containerProps={{ width: 'full' }}
            value=""
            placeholder="User..."
            onChange={() => null}
            button={
              <Button variant="primary" width="30px" height="30px">
                <Icon as={MdSearch} color="white" fontSize={16} />
              </Button>
            }
          />
        </VStack>
        <HStack width="full" justifyContent="center">
          <Button variant="primary" width="74px" height="30px">
            <Text fontSize={10} fontWeight={500} color="white">
              Invite
            </Text>
          </Button>
        </HStack>
      </MenuList>
    </Menu>
  );
};

export default InviteMenu;

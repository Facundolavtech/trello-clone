import { Flex, HStack, Icon, MenuButton, Text, VStack } from '@chakra-ui/react';
import NiceModal from '@ebay/nice-modal-react';
import Button from 'components/Button';
import InviteMenu from 'components/InviteMenu';
import List from 'features/BoardCard/components/Page/Sidepanel/Members/List';
import AllMembersModal from 'features/BoardCard/components/Page/Sidepanel/Members/Modals/AllMembers';
import Title from 'features/BoardCard/components/Page/Sidepanel/Members/Title';
import { useCardContext } from 'features/BoardCard/context';
import useCard from 'features/BoardCard/hooks/useCard';
import { AiOutlinePlus } from 'react-icons/ai';
import { FontFamily } from 'theme/constants';

const Members = () => {
  const { id } = useCardContext();
  const { data: card } = useCard({ id });

  if (!card) return null;

  return (
    <Flex width="full" gap="12px" flexDirection="column" alignItems="flex-start">
      <VStack width="full" alignItems="flex-start" spacing="17px">
        <Title />
        <List />
        {card.members.length >= 1 && (
          <HStack width="full" justifyContent="center">
            <Button variant="link" onClick={() => NiceModal.show(AllMembersModal, { members: card.members })}>
              <Text fontSize={10} fontWeight={400} color="gray.4">
                View all
              </Text>
            </Button>
          </HStack>
        )}
        <InviteMenu
          title="Members"
          subtitle="Assign members to this card"
          openButton={
            <MenuButton width="full">
              <Button bg="blue.2" gap="16.81px" variant="primary" width="full" height="32px">
                <Text color="blue.1" fontSize={12} fontWeight={500} fontFamily={FontFamily.NotoSans}>
                  Assign a member
                </Text>
                <Icon as={AiOutlinePlus} color="blue.1" fontSize={14} />
              </Button>
            </MenuButton>
          }
        />
      </VStack>
    </Flex>
  );
};

export default Members;

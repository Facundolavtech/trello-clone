import { HStack, Icon, Modal, ModalContent, ModalOverlay, Text, VStack } from '@chakra-ui/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import { IBoardMember } from 'models/board.model';
import { MdOutlineClose } from 'react-icons/md';

type Props = {
  members: IBoardMember[];
};

const AllMembersModal = NiceModal.create(({ members }: Props) => {
  const modal = useModal();

  const handleHideModal = () => modal.hide();

  return (
    <Modal isOpen={modal.visible} onClose={handleHideModal} preserveScrollBarGap>
      <ModalOverlay />
      <ModalContent py="12px" px="12px" borderRadius="8px" maxW="90%" width="307px" position="relative">
        <Button variant="primary" width="32px" height="32px" position="absolute" right="11px" top="11px" onClick={handleHideModal}>
          <Icon as={MdOutlineClose} color="white" fontSize={22} />
        </Button>
        <VStack width="full" alignItems="flex-start" spacing="16px">
          {members.map((cm) => (
            <HStack key={cm.id} spacing="10px">
              <Avatar src={cm.user.picture || ''} name={cm.user.name} width="32px" height="32px" />
              <Text color="gray.1" fontWeight={600} fontSize={12}>
                {cm.user.name}
              </Text>
            </HStack>
          ))}
        </VStack>
      </ModalContent>
    </Modal>
  );
});

export default AllMembersModal;

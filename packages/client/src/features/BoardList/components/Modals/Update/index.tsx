import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import Form from './Form';
import Header from './Header';

type Props = {
  listId: string;
  title: string;
};

const UpdateListModal = NiceModal.create(({ listId, title }: Props) => {
  const modal = useModal();

  const handleHideModal = () => modal.hide();

  return (
    <Modal isOpen={modal.visible} onClose={handleHideModal} preserveScrollBarGap>
      <ModalOverlay />
      <ModalContent gap={4} padding={4} borderRadius="8px" maxW="90%" width="307px" position="relative">
        <Header onClose={handleHideModal} />
        <Form title={title} listId={listId} onClose={handleHideModal} />
      </ModalContent>
    </Modal>
  );
});

export default UpdateListModal;

import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import Form from './Form';
import CloseModalButton from './Buttons/Close';
import CoverPreview from './CoverPreview';
import CreateBoardContextProvider from './Context';

const CreateBoardModal = NiceModal.create(() => {
  const modal = useModal();

  const handleHideModal = () => modal.hide();

  return (
    <Modal isOpen={modal.visible} onClose={handleHideModal} preserveScrollBarGap>
      <ModalOverlay />
      <ModalContent py="27px" px="24px" borderRadius="8px" maxW="90%" width="307px" position="relative">
        <CloseModalButton onClick={handleHideModal} />
        <CreateBoardContextProvider>
          <CoverPreview />
          <Form />
        </CreateBoardContextProvider>
      </ModalContent>
    </Modal>
  );
});

export default CreateBoardModal;

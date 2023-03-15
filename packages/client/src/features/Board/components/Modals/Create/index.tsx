import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import Form from 'features/Board/components/Modals/Create/Form';
import CloseModalButton from 'features/Board/components/Modals/Create/Buttons/Close';
import CoverPreview from 'features/Board/components/Modals/Create/CoverPreview';
import CreateBoardContextProvider from 'features/Board/components/Modals/Create/Context';

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

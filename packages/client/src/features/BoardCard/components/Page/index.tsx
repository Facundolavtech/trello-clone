import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { AppRoutes } from '../../../../config/routes';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import CardContextProvider from '../../Context';
import CloseButton from './Buttons/Close';
import Content from './Content';

type Props = {
  cardId: string;
};

const CardPage = NiceModal.create(({ cardId }: Props) => {
  const modal = useModal();
  const boardId = useBoardIdFromRoute();

  const handleCloseModal = () => {
    if (typeof window === 'undefined') return;

    modal.remove();
    window.history.pushState({}, '', `${AppRoutes.BOARD}/${boardId}`);
  };

  return (
    <CardContextProvider id={cardId}>
      <Modal isOpen={true} onClose={handleCloseModal} preserveScrollBarGap>
        <ModalOverlay backgroundColor="rgba(0,0,0,0.1)" />
        <ModalContent padding="24px" maxWidth={{ base: '90%', md: '661px' }} boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)" borderRadius="8px">
          <CloseButton onClick={handleCloseModal} />
          <Content />
        </ModalContent>
      </Modal>
    </CardContextProvider>
  );
});

export default CardPage;

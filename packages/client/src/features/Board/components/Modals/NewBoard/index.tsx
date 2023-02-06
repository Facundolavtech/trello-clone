import { useState } from 'react';
import { Modal, ModalContent, ModalOverlay, HStack, Flex } from '@chakra-ui/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import boardCovers from '../../../helpers/covers';
import Title from './TitleInput';
import CoverMenu from './CoverMenu';
import SubmitButton from './Buttons/Submit';
import CancelButton from './Buttons/Cancel';
import CloseModalButton from './Buttons/Close';
import Cover from './Cover';
import PrivacyButton from './Buttons/Privacy';

export interface INewBoardValues {
  title: string;
  cover: INewBoardValuesCover;
  isPrivate: boolean;
}

interface INewBoardValuesCover {
  name: string;
  src: string;
}

const initialNewBoardValues: INewBoardValues = {
  cover: boardCovers[Math.floor(Math.random() * boardCovers.length)],
  title: '',
  isPrivate: true,
};

const NewBoardModal = NiceModal.create(() => {
  const modal = useModal();

  const [newBoardValues, setNewBoardValues] = useState(initialNewBoardValues);

  const handleSubmit = () => {
    if (!newBoardValues.title.trim() || !newBoardValues.cover.src) return;

    console.log(newBoardValues);
  };

  const handleHideModal = () => {
    setNewBoardValues(initialNewBoardValues);
    modal.hide();
  };

  return (
    <Modal isOpen={modal.visible} onClose={handleHideModal}>
      <ModalOverlay />
      <ModalContent py="27px" px="24px" borderRadius="8px" maxW="90%" width="307px" position="relative">
        <CloseModalButton onClick={handleHideModal} />
        <Cover src={newBoardValues.cover.src} />
        <Title onChange={(e) => setNewBoardValues({ ...newBoardValues, title: e.target.value })} />
        <Flex width="full" justifyContent="space-between" mb="22px">
          <CoverMenu newBoardValues={newBoardValues} setNewBoardValues={setNewBoardValues} />
          <PrivacyButton newBoardValues={newBoardValues} setNewBoardValues={setNewBoardValues} />
        </Flex>
        <HStack width="full" justifyContent="flex-end" spacing="17px">
          <CancelButton onClick={handleHideModal} />
          <SubmitButton onClick={handleSubmit} />
        </HStack>
      </ModalContent>
    </Modal>
  );
});

export default NewBoardModal;

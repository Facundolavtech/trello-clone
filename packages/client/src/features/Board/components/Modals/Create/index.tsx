import { useEffect } from 'react';
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
import { Form, Formik } from 'formik';
import NewBoardSchema from './validations';
import useCreateBoard from '../../../hooks/useCreateBoard';
import { BoardVisibility } from '../../../../../models/board.model';

export interface INewBoardValues {
  title: string;
  cover: INewBoardValuesCover;
  visibility: BoardVisibility;
}

interface INewBoardValuesCover {
  name: string;
  src: string;
}

const getRandomCover = (covers: INewBoardValuesCover[]) => {
  return covers[Math.floor(Math.random() * boardCovers.length)];
};

const CreateBoardModal = NiceModal.create(() => {
  const modal = useModal();

  const createBoardMutation = useCreateBoard();

  const initialNewBoardValues: INewBoardValues = {
    cover: getRandomCover(boardCovers),
    title: '',
    visibility: 'public',
  };

  useEffect(() => {
    if (createBoardMutation.status === 'success') {
      handleHideModal();
    }
  }, [createBoardMutation.status]);

  const handleSubmit = (values: INewBoardValues) => {
    createBoardMutation.mutate({ ...values, cover: values.cover.src });
  };

  const handleHideModal = () => {
    modal.hide();
  };

  return (
    <Modal isOpen={modal.visible} onClose={handleHideModal} preserveScrollBarGap>
      <ModalOverlay />
      <ModalContent py="27px" px="24px" borderRadius="8px" maxW="90%" width="307px" position="relative">
        <Formik initialValues={initialNewBoardValues} validationSchema={NewBoardSchema} onSubmit={handleSubmit}>
          {({ handleSubmit, handleChange, values, errors, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <CloseModalButton onClick={handleHideModal} />
              <Cover src={values.cover.src} />
              <Title onChange={handleChange} value={values.title} error={errors.title} />
              <Flex width="full" justifyContent="space-between" mb="22px">
                <CoverMenu setFieldValue={setFieldValue} />
                <PrivacyButton setFieldValue={setFieldValue} value={values.visibility} />
              </Flex>
              <HStack width="full" justifyContent="flex-end" spacing="17px">
                <CancelButton onClick={handleHideModal} />
                <SubmitButton loading={createBoardMutation.isLoading} />
              </HStack>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
});

export default CreateBoardModal;
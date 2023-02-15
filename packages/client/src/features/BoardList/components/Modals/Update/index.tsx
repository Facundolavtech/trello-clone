import { CloseButton, Heading, HStack, Input, Modal, ModalContent, ModalOverlay, Text, VStack } from '@chakra-ui/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Form, Formik } from 'formik';
import Button from '../../../../../components/Button';
import FormErrorMessage from '../../../../../components/FormErrorMessage';
import { FontFamily } from '../../../../../theme/constants';
import useBoardIdFromRoute from '../../../../Board/hooks/useBoardIdFromRoute';
import useUpdateList from '../../../hooks/useUpdateList';
import { UpdateListSchema } from '../../../validations';

type Props = {
  listId: string;
  title: string;
};

const UpdateListModal = NiceModal.create(({ listId, title }: Props) => {
  const modal = useModal();
  const boardId = useBoardIdFromRoute();

  const updateListMutation = useUpdateList({ boardId, listId });

  const handleHideModal = () => modal.hide();

  const handleSubmit = async (values) => {
    try {
      await updateListMutation.mutateAsync({ boardId, listId, ...values });

      handleHideModal();
    } catch {
      return;
    }
  };

  return (
    <Modal isOpen={modal.visible} onClose={handleHideModal}>
      <ModalOverlay />
      <ModalContent gap={4} padding={4} borderRadius="8px" maxW="90%" width="307px" position="relative">
        <HStack width="full" justifyContent="space-between">
          <Heading fontWeight={500} fontSize={14} color="gray.3">
            Update list
          </Heading>
          <CloseButton fontSize={10} onClick={handleHideModal} />
        </HStack>
        <Formik initialValues={{ name: title }} validationSchema={UpdateListSchema} onSubmit={handleSubmit}>
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <VStack width="full" spacing={4} alignItems="flex-start">
                <Input
                  type="text"
                  disabled={updateListMutation.isLoading}
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Enter new title for this list..."
                  variant="unstyled"
                  fontSize={14}
                  _placeholder={{ fontFamily: FontFamily.NotoSans, color: 'gray.4', fontSize: 14, fontWeight: 500 }}
                />
                {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
                <Button
                  loading={updateListMutation.isLoading}
                  disabled={updateListMutation.isLoading || values.name === title}
                  width="full"
                  height="32px"
                  variant="submit"
                  type="submit"
                  onClick={handleSubmit}
                >
                  <Text fontSize={12} fontFamily={FontFamily.NotoSans} fontWeight={500} color="white">
                    Save
                  </Text>
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
});

export default UpdateListModal;

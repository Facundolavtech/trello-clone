import { FC } from 'react';
import { Input, Text, VStack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import Button from '../../../../../components/Button';
import FormErrorMessage from '../../../../../components/FormErrorMessage';
import { FontFamily } from '../../../../../theme/constants';
import { CreateCardSchema } from '../../../validations';
import useBoardIdFromRoute from '../../../../Board/hooks/useBoardIdFromRoute';
import useCreateCard from '../../../hooks/useCreateCard';

interface ICreateCardFormValues {
  title: string;
}

type Props = {
  onClose: () => void;
  listId: string;
};

const CreateCardForm: FC<Props> = ({ onClose, listId }) => {
  const boardId = useBoardIdFromRoute();

  const createCardMutation = useCreateCard({ boardId });

  const formik = useFormik<ICreateCardFormValues>({
    initialValues: {
      title: '',
    },
    validationSchema: CreateCardSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values: ICreateCardFormValues) => {
    try {
      await createCardMutation.mutateAsync({ boardId, listId, ...values });
      formik.resetForm();

      onClose();
    } catch {
      return;
    }
  };

  return (
    <VStack
      as="form"
      onSubmit={(e) => {
        e.preventDefault(), formik.handleSubmit;
      }}
      spacing="19px"
      width="full"
      alignItems="flex-start"
    >
      <VStack width="full" spacing={2} alignItems="flex-start">
        <Input
          disabled={createCardMutation.isLoading}
          name="title"
          value={formik.values.title}
          type="text"
          onChange={formik.handleChange}
          variant="unstyled"
          fontSize={14}
          _placeholder={{ fontFamily: FontFamily.NotoSans, color: 'gray.4', fontSize: 14, fontWeight: 500 }}
          placeholder="Enter a title for this card..."
        />
        {formik.errors.title && <FormErrorMessage>{formik.errors.title}</FormErrorMessage>}
      </VStack>
      <Button
        loading={createCardMutation.isLoading}
        disabled={createCardMutation.isLoading}
        width="49px"
        height="23px"
        variant="submit"
        type="submit"
        onClick={formik.handleSubmit}
      >
        <Text fontSize={10} fontFamily={FontFamily.NotoSans} fontWeight={500} color="white">
          Save
        </Text>
      </Button>
    </VStack>
  );
};

export default CreateCardForm;

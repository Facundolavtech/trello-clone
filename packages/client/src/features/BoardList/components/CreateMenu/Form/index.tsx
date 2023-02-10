import { FC, useEffect } from 'react';
import { Input, Text, VStack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../../../../components/Button';
import FormErrorMessage from '../../../../../components/FormErrorMessage';
import { FontFamily } from '../../../../../theme/constants';
import useCreateBoardList from '../../../hooks/useCreateBoardList';
import { CreateListSchema } from '../../../validations';

interface ICreateListFormValues {
  title: string;
}

type Props = {
  onClose: () => void;
};

const CreateListForm: FC<Props> = ({ onClose }) => {
  const router = useRouter();
  const boardId = router.query.id as string;

  const { createBoardListMutation } = useCreateBoardList({ boardId });

  const formik = useFormik<ICreateListFormValues>({
    initialValues: {
      title: '',
    },
    validationSchema: CreateListSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values: ICreateListFormValues) => {
    try {
      await createBoardListMutation.mutateAsync({ boardId, ...values });
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
          disabled={createBoardListMutation.isLoading}
          name="title"
          value={formik.values.title}
          type="text"
          onChange={formik.handleChange}
          variant="unstyled"
          fontSize={14}
          _placeholder={{ fontFamily: FontFamily.NotoSans, color: 'gray.4', fontSize: 14, fontWeight: 500 }}
          placeholder="Enter a title for this list..."
        />
        {formik.errors.title && <FormErrorMessage>{formik.errors.title}</FormErrorMessage>}
      </VStack>
      <Button
        loading={createBoardListMutation.isLoading}
        disabled={createBoardListMutation.isLoading}
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

export default CreateListForm;

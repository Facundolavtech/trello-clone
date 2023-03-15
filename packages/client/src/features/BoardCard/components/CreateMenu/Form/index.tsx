import { FC } from 'react';
import { VStack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import FormErrorMessage from 'components/FormErrorMessage';
import { CreateCardSchema } from 'features/BoardCard/validations';
import useCreateCard from 'features/BoardCard/hooks/useCreateCard';
import SubmitButton from 'features/BoardCard/components/CreateMenu/Buttons/Submit';
import TitleInput from 'features/BoardCard/components/CreateMenu/Form/TitleInput';

interface ICreateCardFormValues {
  title: string;
}

type Props = {
  onClose: () => void;
  listId: string;
};

const Form: FC<Props> = ({ onClose, listId }) => {
  const createMutation = useCreateCard();

  const formik = useFormik<ICreateCardFormValues>({
    initialValues: {
      title: '',
    },
    validationSchema: CreateCardSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values: ICreateCardFormValues) => {
    try {
      await createMutation.mutateAsync({ listId, ...values });
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
        <TitleInput disabled={createMutation.isLoading} value={formik.values.title} onChange={formik.handleChange} />
        {formik.errors.title && <FormErrorMessage>{formik.errors.title}</FormErrorMessage>}
      </VStack>
      <SubmitButton isLoading={createMutation.isLoading} onSubmit={formik.handleSubmit} />
    </VStack>
  );
};

export default Form;

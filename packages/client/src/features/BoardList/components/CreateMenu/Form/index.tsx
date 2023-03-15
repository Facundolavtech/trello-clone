import { FC } from 'react';
import { VStack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import FormErrorMessage from 'components/FormErrorMessage';
import useCreateBoardList from 'features/BoardList/hooks/useCreateList';
import { CreateListSchema } from 'features/BoardList/validations';
import SubmitButton from 'features/BoardList/components/CreateMenu/Buttons/Submit';
import TitleInput from 'features/BoardList/components/CreateMenu/Form/TitleInput';

interface ICreateListFormValues {
  name: string;
}

type Props = {
  onClose: () => void;
};

const Form: FC<Props> = ({ onClose }) => {
  const createMutation = useCreateBoardList();

  const formik = useFormik<ICreateListFormValues>({
    initialValues: {
      name: '',
    },
    validationSchema: CreateListSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values: ICreateListFormValues) => {
    try {
      await createMutation.mutateAsync({ ...values });
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
        <TitleInput disabled={createMutation.isLoading} onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name && <FormErrorMessage>{formik.errors.name}</FormErrorMessage>}
      </VStack>
      <SubmitButton isLoading={createMutation.isLoading} onClick={formik.handleSubmit} />
    </VStack>
  );
};

export default Form;

import { FC } from 'react';
import { VStack } from '@chakra-ui/react';
import { Formik, Form as FormikForm } from 'formik';
import FormErrorMessage from '../../../../../../components/FormErrorMessage';
import useBoardIdFromRoute from '../../../../../Board/hooks/useBoardIdFromRoute';
import useUpdateList from '../../../../hooks/useUpdateList';
import { UpdateListSchema } from '../../../../validations';
import SubmitButton from '../Buttons/Submit';
import TitleInput from './TitleInput';

type Props = {
  onClose: () => void;
  listId: string;
  title: string;
};

const Form: FC<Props> = ({ onClose, listId, title }) => {
  const boardId = useBoardIdFromRoute();
  const updateListMutation = useUpdateList({ boardId, listId });

  const handleSubmit = async (values) => {
    try {
      await updateListMutation.mutateAsync({ boardId, listId, ...values });

      onClose();
    } catch {
      return;
    }
  };

  return (
    <Formik initialValues={{ name: title }} validationSchema={UpdateListSchema} onSubmit={handleSubmit}>
      {({ handleSubmit, handleChange, values, errors }) => (
        <FormikForm onSubmit={handleSubmit}>
          <VStack width="full" spacing={4} alignItems="flex-start">
            <TitleInput isLoading={updateListMutation.isLoading} onChange={handleChange} value={values.name} />
            {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
            <SubmitButton disabled={updateListMutation.isLoading || values.name === title} isLoading={updateListMutation.isLoading} onSubmit={handleSubmit} />
          </VStack>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
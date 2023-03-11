import { useFormik } from 'formik';
import useBoardIdFromRoute from '../../../../../../../../../../Board/hooks/useBoardIdFromRoute';
import useCardIdFromRoute from '../../../../../../../../../hooks/useCardIdFromRoute';
import useCreateLabel from '../../../../../../../../../hooks/useCreateLabel';
import { CreateLabelSchema } from '../../../../../../../../../validations';

export interface ICreateLabelFormValues {
  name: string;
  color: string;
}

const useCreateLabelForm = () => {
  const boardId = useBoardIdFromRoute();
  const cardId = useCardIdFromRoute();
  const createMutation = useCreateLabel();

  const formik = useFormik<ICreateLabelFormValues>({
    initialValues: {
      name: '',
      color: '',
    },
    validationSchema: CreateLabelSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values: ICreateLabelFormValues): Promise<void> => {
    const { name, color } = values;
    try {
      await createMutation.mutateAsync({ boardId, cardId, name, color });
      formik.resetForm();
    } catch {}
  };

  return {
    formik,
    createMutation,
  };
};

export default useCreateLabelForm;

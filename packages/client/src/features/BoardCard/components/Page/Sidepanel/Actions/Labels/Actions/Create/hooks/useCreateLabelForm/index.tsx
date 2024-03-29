import { useFormik } from 'formik';
import useCreateLabel from 'features/BoardCard/hooks/useCreateLabel';
import { CreateLabelSchema } from 'features/BoardCard/validations';

export interface ICreateLabelFormValues {
  name: string;
  color: string;
}

const useCreateLabelForm = () => {
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
      await createMutation.mutateAsync({ name, color });
      formik.resetForm();
    } catch {}
  };

  return {
    formik,
    createMutation,
  };
};

export default useCreateLabelForm;

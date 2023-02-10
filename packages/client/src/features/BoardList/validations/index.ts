import * as Yup from 'yup';

export const CreateListSchema = Yup.object().shape({
  title: Yup.string().max(22, 'The title must have a maximum of 22 characters').required('The title is required'),
});

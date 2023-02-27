import * as Yup from 'yup';

export const CreateCardSchema = Yup.object().shape({
  title: Yup.string()
    .min(6, 'The title must have a minimum of 6 characters')
    .max(32, 'The title must have a maximum of 32 characters')
    .required('The title is required'),
});

export const UpdateCardSchema = CreateCardSchema;

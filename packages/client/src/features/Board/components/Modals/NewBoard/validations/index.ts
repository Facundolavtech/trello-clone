import * as Yup from 'yup';

const NewBoardSchema = Yup.object().shape({
  isPrivate: Yup.boolean().required(),
  cover: Yup.object().shape({
    name: Yup.string().required(),
    src: Yup.string().required(),
  }),
  title: Yup.string().min(6, 'The title must be at least 6 characters').max(32, 'The title must have a maximum of 32 characters').required('The title is required'),
});

export default NewBoardSchema;

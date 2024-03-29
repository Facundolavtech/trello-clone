import { HStack, VStack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import Avatar from 'components/Avatar';
import FormErrorMessage from 'components/FormErrorMessage';
import useUserProfile from 'hooks/useUserProfile';
import useCreateComment from 'features/BoardCard/hooks/useCreateComment';
import { CreateCommentSchema } from 'features/BoardCard/validations';
import SubmitButton from 'features/BoardCard/components/Page/Comments/Buttons/Submit';
import CommentTextarea from 'features/BoardCard/components/Page/Comments/Form/Textarea';

interface ICommentFormValues {
  content: string;
}

const CommentsForm = () => {
  const { data: user } = useUserProfile();

  const createMutation = useCreateComment();

  const formik = useFormik<ICommentFormValues>({
    initialValues: {
      content: '',
    },
    validationSchema: CreateCommentSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values: ICommentFormValues) => {
    await createMutation.mutateAsync({ ...values });
    formik.resetForm();
  };

  if (!user) return null;

  return (
    <VStack
      width="full"
      boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)"
      borderWidth={1}
      borderColor="gray.5"
      borderRadius="12px"
      padding="14px"
      justifyContent="space-between"
      minHeight="103px"
      as="form"
      onSubmit={(e) => {
        e.preventDefault(), formik.handleSubmit;
      }}
    >
      <HStack alignItems="flex-start" spacing="15px" width="full" justifyContent="flex-start">
        <Avatar src={user.picture || ''} width="28px" height="28px" name={user.name} />
        <VStack width="full" alignItems="flex-start">
          <CommentTextarea value={formik.values.content} onChange={formik.handleChange} />
          {formik.errors.content && <FormErrorMessage>{formik.errors.content}</FormErrorMessage>}
        </VStack>
      </HStack>
      <HStack width="full" justifyContent="flex-end">
        <SubmitButton onSubmit={formik.handleSubmit} disabled={createMutation.isLoading} isLoading={createMutation.isLoading} />
      </HStack>
    </VStack>
  );
};

export default CommentsForm;

import { FC } from 'react';
import { HStack, Icon } from '@chakra-ui/react';
import { MdCheck, MdClose } from 'react-icons/md';
import Button from 'components/Button';
import useUpdateComment from 'features/BoardCard/hooks/useUpdateComment';
import EditButton from 'features/BoardCard/components/Page/Comments/Comment/Buttons/Edit';
import { useCommentContext } from 'features/BoardCard/components/Page/Comments/Comment/Context';

type Props = {
  id: string;
  content: string;
};

const Edit: FC<Props> = ({ id, content }) => {
  const { handleEdit, state, handleEditCancel, handleEditSuccess } = useCommentContext();

  const updateMutation = useUpdateComment({ id });

  const canEdit = state && state.draft && state.draft !== content && state.draft.length >= 6 && state.draft.length <= 260;

  const handleSubmit = async () => {
    if (!canEdit) return;

    try {
      await updateMutation.mutateAsync({ content: state.draft!, id: state.id });
      handleEditSuccess();
    } catch {
      return;
    }
  };

  if (!state) return null;

  return state.isEditing ? (
    <HStack spacing={2} mr={2}>
      <Button onClick={handleSubmit} isLoading={updateMutation.isLoading} disabled={updateMutation.isLoading || !canEdit} variant="submit" width="20px" height="20px">
        <Icon as={MdCheck} fontSize={14} color="white" />
      </Button>
      <Button variant="delete" width="20px" height="20px" onClick={handleEditCancel}>
        <Icon as={MdClose} fontSize={14} color="white" />
      </Button>
    </HStack>
  ) : (
    <EditButton disabled={false} onClick={() => handleEdit(content)} />
  );
};

export default Edit;

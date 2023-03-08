import { HStack, Icon } from '@chakra-ui/react';
import { FC } from 'react';
import { MdCheck, MdClose } from 'react-icons/md';
import Button from '../../../../../../../components/Button';
import useBoardIdFromRoute from '../../../../../../Board/hooks/useBoardIdFromRoute';
import useCardIdFromRoute from '../../../../../hooks/useCardIdFromRoute';
import useUpdateComment from '../../../../../hooks/useUpdateComment';
import EditButton from '../../Buttons/Edit';
import { useCommentContext } from '../../Context';

type Props = {
  id: string;
  content: string;
};

const Edit: FC<Props> = ({ id, content }) => {
  const { handleEdit, state, handleEditCancel, handleEditSuccess } = useCommentContext();
  const boardId = useBoardIdFromRoute();
  const cardId = useCardIdFromRoute();

  const updateMutation = useUpdateComment({ boardId, cardId, id });

  const canEdit = state && state.draft && state.draft !== content && state.draft.length >= 6;

  const handleSubmit = async () => {
    if (!canEdit) return;

    try {
      await updateMutation.mutateAsync({ boardId, cardId, content: state.draft!, id: state.id });
      handleEditSuccess();
    } catch {
      return;
    }
  };

  if (!state) return null;

  return state.isEditing ? (
    <HStack spacing={2} mr={2}>
      <Button onClick={handleSubmit} loading={updateMutation.isLoading} disabled={updateMutation.isLoading || !canEdit} variant="submit" width="20px" height="20px">
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

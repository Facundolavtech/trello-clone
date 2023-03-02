import { FC, useMemo } from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import useUserProfile from '../../../../../hooks/useUserProfile';
import { IBoardCardComment } from '../../../../../models/board-card.model';
import Actions from './Actions';
import Content from './Content';
import Information from './Information';

type Props = {
  comment: IBoardCardComment;
};

const Comment: FC<Props> = ({ comment }) => {
  const { data: user } = useUserProfile();

  const userIsCommentAuthor = useMemo(() => {
    return comment.author.user.id === user?.id;
  }, [user, comment]);

  return (
    <VStack width="full" spacing="13px">
      <HStack width="full" justifyContent="space-between">
        <Information author={comment.author} createdDate={comment.createdAt} />
        {userIsCommentAuthor && <Actions commentId={comment.id} />}
      </HStack>
      <Content content={comment.content} />
    </VStack>
  );
};

export default Comment;

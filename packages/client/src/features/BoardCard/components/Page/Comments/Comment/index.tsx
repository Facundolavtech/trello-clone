import { FC } from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import Actions from 'features/BoardCard/components/Page/Comments/Comment/Actions';
import Content from 'features/BoardCard/components/Page/Comments/Comment/Content';
import Information from 'features/BoardCard/components/Page/Comments/Comment/Information';
import CommentContextProvider from 'features/BoardCard/components/Page/Comments/Comment/Context';
import { IBoardCardComment } from 'models/board-card.model';
import useUserIsCommentAuthor from 'features/BoardCard/hooks/useUserIsCommentAuthor';

type Props = {
  comment: IBoardCardComment;
};

const Comment: FC<Props> = ({ comment }) => {
  const userIsCommentAuthor = useUserIsCommentAuthor({ comment });

  return (
    <CommentContextProvider id={comment.id}>
      <VStack as="article" width="full" spacing="13px" maxWidth="full">
        <HStack width="full" justifyContent="space-between">
          <Information author={comment.author} createdDate={comment.createdAt} />
          {userIsCommentAuthor && <Actions id={comment.id} content={comment.content} />}
        </HStack>
        <Content content={comment.content} />
      </VStack>
    </CommentContextProvider>
  );
};

export default Comment;

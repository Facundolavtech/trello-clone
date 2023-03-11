import { FC } from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import Actions from './Actions';
import Content from './Content';
import Information from './Information';
import CommentContextProvider from './Context';
import { IBoardCardComment } from '../../../../../../models/board-card.model';
import useUserIsCommentAuthor from '../../../../hooks/useUserIsCommentAuthor';

type Props = {
  comment: IBoardCardComment;
};

const Comment: FC<Props> = ({ comment }) => {
  const userIsCommentAuthor = useUserIsCommentAuthor({ comment });

  return (
    <CommentContextProvider id={comment.id}>
      <VStack width="full" spacing="13px" maxWidth="full">
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
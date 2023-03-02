import { FC } from 'react';
import { VStack } from '@chakra-ui/react';
import CommentsForm from './Form';
import CommentsPanel from './Panel';
import { IBoardCardComment } from '../../../../../models/board-card.model';

type Props = {
  comments: IBoardCardComment[];
};

const Comments: FC<Props> = ({ comments }) => {
  return (
    <VStack width="full" alignItems="flex-start" spacing="27px">
      <CommentsForm />
      <CommentsPanel comments={comments} />
    </VStack>
  );
};

export default Comments;

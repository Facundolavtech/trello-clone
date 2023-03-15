import { FC } from 'react';
import { VStack } from '@chakra-ui/react';
import CommentsForm from 'features/BoardCard/components/Page/Comments/Form';
import CommentsPanel from 'features/BoardCard/components/Page/Comments/Panel';
import { IBoardCardComment } from 'models/board-card.model';

type Props = {
  comments: IBoardCardComment[];
};

const Comments: FC<Props> = ({ comments }) => {
  return (
    <VStack as="section" width="full" alignItems="flex-start" spacing="27px">
      <CommentsForm />
      <CommentsPanel comments={comments} />
    </VStack>
  );
};

export default Comments;

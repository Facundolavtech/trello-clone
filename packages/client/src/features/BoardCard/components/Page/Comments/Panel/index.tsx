import { FC } from 'react';
import { VStack } from '@chakra-ui/react';
import { IBoardCardComment } from 'models/board-card.model';
import sortArr from 'utils/sortArr';
import Comment from 'features/BoardCard/components/Page/Comments/Comment';

type Props = {
  comments: IBoardCardComment[];
};

const CommentsPanel: FC<Props> = ({ comments }) => {
  return (
    <VStack
      width="full"
      gap="30px"
      maxHeight="300px"
      pr="10px"
      overflowY="auto"
      className="custom__scrollbar"
      __css={{
        '::-webkit-scrollbar': {
          height: '5px',
          width: '5px',
        },
      }}
    >
      {sortArr(comments, 'createdAt', 'desc').map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </VStack>
  );
};

export default CommentsPanel;

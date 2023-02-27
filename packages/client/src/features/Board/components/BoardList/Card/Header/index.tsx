import { VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { IBoard } from '../../../../../../models/board.model';
import BoardCardCover from '../Cover';
import BoardCardTitle from '../Title';

type Props = {
  board: IBoard;
};

const BoardCardHeader: FC<Props> = ({ board }) => {
  return (
    <VStack spacing="12px" width="full" alignItems="flex-start">
      <BoardCardCover src={board.cover} alt={board.title} />
      <BoardCardTitle title={board.title} />
    </VStack>
  );
};

export default BoardCardHeader;

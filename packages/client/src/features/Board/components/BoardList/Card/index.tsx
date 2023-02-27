import { FC } from 'react';
import { useRouter } from 'next/router';
import Card from '../../../../../components/Card';
import { AppRoutes } from '../../../../../config/routes';
import { IBoard } from '../../../../../models/board.model';
import BoardCardContainer from './Container';
import BoardCardHeader from './Header';
import BoardCardMembers from './Members';

type Props = {
  board: IBoard;
};

const BoardCard: FC<Props> = ({ board }) => {
  const router = useRouter();

  return (
    <Card variant="board-card" onClick={() => router.push(`${AppRoutes.BOARD}/${board.id}`)}>
      <BoardCardContainer>
        <BoardCardHeader board={board} />
        <BoardCardMembers members={board.members} />
      </BoardCardContainer>
    </Card>
  );
};

export default BoardCard;

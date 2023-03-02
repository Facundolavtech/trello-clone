import { FC } from 'react';
import DeleteButton from '../../Buttons/Delete';

type Props = {
  commentId: string;
};

const Delete: FC<Props> = ({ commentId }) => {
  return <DeleteButton onClick={() => null} disabled={false} />;
};

export default Delete;

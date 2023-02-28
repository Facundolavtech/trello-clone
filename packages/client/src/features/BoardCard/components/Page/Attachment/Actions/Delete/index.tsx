import { FC } from 'react';
import DeleteButton from '../../Buttons/Delete';

type Props = {
  id: string;
};

const Delete: FC<Props> = ({ id }) => {
  return <DeleteButton onClick={() => null} />;
};

export default Delete;

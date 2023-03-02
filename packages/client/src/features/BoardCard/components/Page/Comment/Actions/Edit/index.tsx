import { FC } from 'react';
import EditButton from '../../Buttons/Edit';

type Props = {
  commentId: string;
};

const Edit: FC<Props> = ({ commentId }) => {
  return <EditButton onClick={() => null} disabled={false} />;
};

export default Edit;

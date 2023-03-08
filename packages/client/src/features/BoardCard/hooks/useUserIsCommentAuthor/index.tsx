import { useMemo } from 'react';
import useUserProfile from '../../../../hooks/useUserProfile';
import { IBoardCardComment } from '../../../../models/board-card.model';

type Props = {
  comment: IBoardCardComment;
};

const useUserIsCommentAuthor = ({ comment }: Props) => {
  const { data: user } = useUserProfile();

  return useMemo(() => {
    if (!user) return null;

    return comment.author.user.id === user.id;
  }, [user, comment]);
};

export default useUserIsCommentAuthor;

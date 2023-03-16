import NeedMember from 'features/Board/components/Page/Error/Errors/NeedMember';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import useBoard from 'features/Board/hooks/useBoard';
import Default from 'features/Board/components/Page/Error/Errors/Default';

const Error = () => {
  const boardId = useBoardIdFromRoute();
  const { error } = useBoard({ id: boardId });

  switch (error?.response?.data.code) {
    case 'NEED_BOARD_MEMBER_ERROR':
      return <NeedMember error={error} />;
    default:
      return <Default error={error} />;
  }
};

export default Error;

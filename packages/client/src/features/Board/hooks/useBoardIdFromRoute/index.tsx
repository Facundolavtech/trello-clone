import { useRouter } from 'next/router';

const useBoardIdFromRoute = () => {
  const router = useRouter();

  return router.query.boardId as string;
};

export default useBoardIdFromRoute;

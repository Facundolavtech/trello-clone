import { useRouter } from 'next/router';

const useCardIdFromRoute = () => {
  const router = useRouter();

  return router.query.cardId as string;
};

export default useCardIdFromRoute;

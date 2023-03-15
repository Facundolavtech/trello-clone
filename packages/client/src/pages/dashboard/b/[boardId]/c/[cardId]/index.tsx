import { useEffect } from 'react';
import { useModal } from '@ebay/nice-modal-react';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import SEO from 'components/SEO';
import CardPage from 'features/BoardCard/components/Page';
import useCard from 'features/BoardCard/hooks/useCard';
import BoardPage from 'features/Board/components/Page';

type Props = {
  cardId: string;
};

const Card: NextPage<Props> = ({ cardId }) => {
  const { data: card } = useCard({ id: cardId });

  const modal = useModal(CardPage);

  useEffect(() => {
    if (modal.visible) return;

    modal.show({ cardId });
  }, []);

  return (
    <>
      <SEO title={card?.title} />
      <BoardPage />
    </>
  );
};

export default Card;

export const getServerSideProps = (ctx: GetServerSidePropsContext): GetServerSidePropsResult<{}> => {
  const cardId = ctx.params?.cardId as string;

  return {
    props: {
      cardId,
    },
  };
};

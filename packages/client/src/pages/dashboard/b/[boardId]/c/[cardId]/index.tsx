import { useModal } from '@ebay/nice-modal-react';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import { useEffect } from 'react';
import Board from '../..';
import SEO from '../../../../../../components/SEO';
import CardPage from '../../../../../../features/BoardCard/components/Page';
import useCard from '../../../../../../features/BoardCard/hooks/useCard';

type Props = {
  boardId: string;
  cardId: string;
};

const Card: NextPage<Props> = ({ boardId, cardId }) => {
  const { data: card } = useCard({ id: cardId });

  const modal = useModal(CardPage);

  useEffect(() => {
    if (modal.visible) return;

    modal.show({ cardId });
  }, []);

  return (
    <>
      <SEO title={card?.title} />
      <Board boardId={boardId} />
    </>
  );
};

export default Card;

export const getServerSideProps = async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{}>> => {
  const boardId = ctx.params?.boardId as string;
  const cardId = ctx.params?.cardId as string;

  return {
    props: {
      boardId,
      cardId,
    },
  };
};

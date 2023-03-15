import Covers from '../../../../../../../components/Covers';
import { useCardContext } from '../../../../../context';
import useCard from '../../../../../hooks/useCard';
import useUpdateCard from '../../../../../hooks/useUpdateCard';
import OpenButton from './Buttons/Open';

const CoverMenu = () => {
  const updateMutation = useUpdateCard();
  const { id } = useCardContext();
  const { data: card } = useCard({ id });

  const handleUpdateCover = async (cover: string) => {
    if (!card || !cover || card.cover === cover) return;

    updateMutation.mutate({ cover });
  };

  return <Covers button={<OpenButton />} handleChange={(c) => handleUpdateCover(c.src)} />;
};

export default CoverMenu;

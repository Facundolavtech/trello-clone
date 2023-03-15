import Covers from 'components/Covers';
import { useCardContext } from 'features/BoardCard/context';
import useCard from 'features/BoardCard/hooks/useCard';
import useUpdateCard from 'features/BoardCard/hooks/useUpdateCard';
import OpenButton from 'features/BoardCard/components/Page/Sidepanel/Actions/Cover/Buttons/Open';

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

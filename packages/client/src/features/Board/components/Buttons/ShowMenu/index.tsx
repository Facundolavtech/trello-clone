import { Icon, Text } from '@chakra-ui/react';
import { MdMoreHoriz } from 'react-icons/md';
import Button from 'components/Button';
import { useBoardContext } from 'features/Board/context/board';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import Loading from 'features/Board/components/Buttons/ShowMenu/Loading';
import useBoard from 'features/Board/hooks/useBoard';

const ShowBoardMenuButton = () => {
  const { onOpen: onOpenBoardMenu } = useBoardContext();

  const boardId = useBoardIdFromRoute();

  const { isLoading } = useBoard({ id: boardId });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Button variant="lightgray" onClick={onOpenBoardMenu} width="117px" height="32px" style={{ gap: '12px' }} aria-label="Open board menu" id="show-menu">
      <Icon as={MdMoreHoriz} fontSize={13} color="gray.3" />
      <Text fontWeight={500} fontSize={12} color="gray.3">
        Show Menu
      </Text>
    </Button>
  );
};

export default ShowBoardMenuButton;

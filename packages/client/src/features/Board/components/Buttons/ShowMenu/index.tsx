import { Icon, Text } from '@chakra-ui/react';
import { MdMoreHoriz } from 'react-icons/md';
import Button from '../../../../../components/Button';
import { useBoardContext } from '../../../context/board';
import useBoard from '../../../hooks/useBoard';
import useBoardIdFromRoute from '../../../hooks/useBoardIdFromRoute';
import Loading from './Loading';

const ShowBoardMenuButton = () => {
  const { onOpen: onOpenBoardMenu } = useBoardContext();

  const boardId = useBoardIdFromRoute();

  const { isLoading } = useBoard({ id: boardId });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Button variant="lightgray" onClick={onOpenBoardMenu} width="117px" height="32px" style={{ gap: '12px' }}>
      <Icon as={MdMoreHoriz} fontSize={13} color="gray.3" />
      <Text fontWeight={500} fontSize={12} color="gray.3">
        Show Menu
      </Text>
    </Button>
  );
};

export default ShowBoardMenuButton;

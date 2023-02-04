import { Icon, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdMoreHoriz } from 'react-icons/md';
import Button from '../../../../../components/Button';
import useBoard from '../../../hooks/useBoard';
import Loading from './Loading';

const ShowBoardMenuButton = () => {
  const router = useRouter();

  const boardId = router.query.id as string;

  const { isLoading } = useBoard({ id: boardId });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Button variant="lightgray" width="117px" height="32px" style={{ gap: '12px' }}>
      <Icon as={MdMoreHoriz} fontSize={13} color="gray.3" />
      <Text fontWeight={500} fontSize={12} color="gray.3">
        Show Menu
      </Text>
    </Button>
  );
};

export default ShowBoardMenuButton;

import { Icon, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IoMdLock, IoMdUnlock } from 'react-icons/io';
import Button from '../../../../../components/Button';
import useQueryState from '../../../../../hooks/useQueryState';
import { IBoard } from '../../../../../models/board.model';
import Loading from './Loading';

const PrivacyBoardButton = () => {
  const router = useRouter();

  const state = useQueryState<IBoard>(`board/${router.query.id}`);

  if (state.status === 'loading') {
    return <Loading />;
  }

  return (
    <Button variant="lightgray" height="32px" width="98px" style={{ gap: '11px' }}>
      <Icon as={state.data?.isPrivate ? IoMdLock : IoMdUnlock} fontSize={12} color="gray.3" />
      <Text fontSize={12} fontWeight={500} color="gray.3">
        {state.data?.isPrivate ? 'Private' : 'Public'}
      </Text>
    </Button>
  );
};

export default PrivacyBoardButton;

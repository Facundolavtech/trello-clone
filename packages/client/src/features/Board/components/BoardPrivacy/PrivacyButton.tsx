import { FC } from 'react';
import { Icon, Text } from '@chakra-ui/react';
import { IoMdLock, IoMdUnlock } from 'react-icons/io';
import Button from 'components/Button';
import useBoard from 'features/Board/hooks/useBoard';
import Loading from 'features/Board/components/BoardPrivacy/Loading';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import { useUpdateBoardIsMutating } from 'features/Board/hooks/useUpdateBoard';

type Props = {
  disabled: boolean;
};

const PrivacyButton: FC<Props> = ({ disabled }) => {
  const boardId = useBoardIdFromRoute();

  const { data: board } = useBoard({ id: boardId });

  const isMutating = useUpdateBoardIsMutating();

  if (board) {
    return (
      <Button
        as="div"
        isLoading={isMutating}
        disabled={isMutating}
        variant="lightgray"
        height="32px"
        width="98px"
        style={{ gap: '11px' }}
        _hover={disabled ? { cursor: 'initial', opacity: 1 } : {}}
      >
        <Icon as={board.visibility === 'private' ? IoMdLock : IoMdUnlock} fontSize={12} color="gray.3" />
        <Text fontSize={12} fontWeight={500} color="gray.3">
          {board.visibility === 'private' ? 'Private' : 'Public'}
        </Text>
      </Button>
    );
  }

  return <Loading />;
};

export default PrivacyButton;

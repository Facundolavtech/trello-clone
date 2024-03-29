import { HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { BiWorld } from 'react-icons/bi';
import { MdCheck } from 'react-icons/md';
import { TiLockClosed } from 'react-icons/ti';
import { BoardVisibility } from 'models/board.model';
import { FontFamily } from 'theme/constants';
import useBoard from 'features/Board/hooks/useBoard';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import useUpdateBoard from 'features/Board/hooks/useUpdateBoard';
import BoardPrivacyMenuItem from 'features/Board/components/BoardPrivacy/Item/Item';

const BoardPrivacyMenuItems = () => {
  const boardId = useBoardIdFromRoute();

  const { data: board } = useBoard({ id: boardId });

  const updateMutation = useUpdateBoard();

  const handleBoardPrivacy = (visibility: BoardVisibility): void => {
    if (board?.visibility === visibility) return;

    updateMutation.mutate({ visibility });
  };

  const isPrivate = board?.visibility === 'private';

  if (!board) return null;

  return (
    <VStack spacing="15px" width="full">
      <BoardPrivacyMenuItem onClick={() => handleBoardPrivacy('public')} disabled={!isPrivate}>
        <VStack spacing="8px" alignItems="flex-start">
          <HStack spacing="8px">
            <Icon as={!isPrivate ? MdCheck : BiWorld} color="gray.2" fontSize={14} />
            <Text color="gray.2" fontSize={12} fontWeight={500} fontFamily={FontFamily.NotoSans}>
              Public
            </Text>
          </HStack>
          <Text color="gray.3" fontSize={10} fontWeight={400} fontFamily={FontFamily.NotoSans}>
            Anyone on the internet can see this.
          </Text>
        </VStack>
      </BoardPrivacyMenuItem>
      <BoardPrivacyMenuItem onClick={() => handleBoardPrivacy('private')} disabled={isPrivate}>
        <VStack spacing="8px" alignItems="flex-start">
          <HStack spacing="8px">
            <Icon as={isPrivate ? MdCheck : TiLockClosed} color="gray.2" fontSize={14} />
            <Text color="gray.2" fontSize={12} fontWeight={500} fontFamily={FontFamily.NotoSans}>
              Private
            </Text>
          </HStack>
          <Text color="gray.3" fontSize={10} fontWeight={400} fontFamily={FontFamily.NotoSans}>
            Only board members can see this.
          </Text>
        </VStack>
      </BoardPrivacyMenuItem>
    </VStack>
  );
};

export default BoardPrivacyMenuItems;

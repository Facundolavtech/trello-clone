import { HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BiWorld } from 'react-icons/bi';
import { TiLockClosed } from 'react-icons/ti';
import { FontFamily } from '../../../../../theme/constants';
import useBoard from '../../../hooks/useBoard';
import useBoardMethods from '../../../hooks/useBoardMethods';
import { BoardPrivacyType } from '../../../services/board.service';
import BoardPrivacyMenuItem from '../Item/Item';

const BoardPrivacyMenuItems = () => {
  const router = useRouter();
  const boardId = router.query.id as string;

  const { data } = useBoard({ id: boardId });
  const { handleBoardPrivacyMutation } = useBoardMethods({ id: boardId });

  const handleBoardPrivacy = (type: BoardPrivacyType): void => {
    if (data?.isPrivate && type === 'private') return;
    if (!data?.isPrivate && type === 'public') return;

    return handleBoardPrivacyMutation.mutate({ type });
  };

  return (
    <VStack spacing="15px" width="full">
      <BoardPrivacyMenuItem onClick={() => handleBoardPrivacy('public')}>
        <VStack spacing="8px" alignItems="flex-start">
          <HStack spacing="8px">
            <Icon as={BiWorld} color="gray.2" fontSize={14} />
            <Text color="gray.2" fontSize={12} fontWeight={500} fontFamily={FontFamily.NotoSans}>
              Public
            </Text>
          </HStack>
          <Text color="gray.3" fontSize={10} fontWeight={400} fontFamily={FontFamily.NotoSans}>
            Anyone on the internet can see this.
          </Text>
        </VStack>
      </BoardPrivacyMenuItem>
      <BoardPrivacyMenuItem onClick={() => handleBoardPrivacy('private')}>
        <VStack spacing="8px" alignItems="flex-start">
          <HStack spacing="8px">
            <Icon as={TiLockClosed} color="gray.2" fontSize={14} />
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

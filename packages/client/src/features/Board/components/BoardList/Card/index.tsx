import { Heading, HStack, Image, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Card from '../../../../../components/Card';
import MemberList from '../../../../../components/Members';
import { AppRoutes } from '../../../../../config/routes';
import { IBoard } from '../../../../../models/board.model';
import { FontFamily } from '../../../../../theme/constants';

type Props = {
  board: IBoard;
};

const BoardCard: FC<Props> = ({ board }) => {
  const router = useRouter();

  return (
    <Card variant="board-card" onClick={() => router.push(`${AppRoutes.BOARD}/${board.id}`)}>
      <VStack spacing="21px">
        <VStack spacing="12px" width="full" alignItems="flex-start">
          <Image width="full" height="130px" objectFit="cover" borderRadius={8} src={board.cover} alt={`${board.title} board image`} />
          <Heading width="full" className="preventTextOverflow" fontWeight={500} color="black" fontFamily={FontFamily.NotoSans} fontSize={16}>
            {board.title}
          </Heading>
        </VStack>
        <HStack spacing="12px" width="full" alignItems="center">
          <MemberList
            members={board.members}
            avatarStyles={{ width: '28px', height: '28px' }}
            lastBoxStyles={{ width: '28px', height: '28px' }}
            useTooltip={false}
            maxMembers={3}
          />
        </HStack>
      </VStack>
    </Card>
  );
};

export default BoardCard;

import { Avatar, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Card from '../../../../components/Card';
import { AppRoutes } from '../../../../config/routes';
import { IBoard } from '../../../../models/board.model';
import { FontFamily } from '../../../../theme/constants';

type Props = {
  board: IBoard;
};

const Board: FC<Props> = ({ board }) => {
  const router = useRouter();

  return (
    <Card variant="board-card" onClick={() => router.push(`${AppRoutes.BOARD}/${board.id}`)}>
      <VStack spacing="21px">
        <VStack spacing="12px" width="full" alignItems="flex-start">
          <Image width="full" height="130px" objectFit="cover" borderRadius={8} src={board.cover} alt={`${board.title} board image`} />
          <Heading fontWeight={500} color="black" fontFamily={FontFamily.NotoSans} fontSize={16}>
            {board.title}
          </Heading>
        </VStack>
        <HStack spacing="12px" width="full" alignItems="center">
          {board.members.slice(0, 3).map((member) => (
            <Avatar
              borderRadius={8}
              width="28px"
              height="28px"
              color="white"
              bg="gray.4"
              name={member.user.name}
              key={member.user.id}
              src={member.user.picture ?? ''}
            />
          ))}
          {board.members.length > 3 && (
            <Text fontWeight={500} fontFamily={FontFamily.NotoSans} color="gray.4" fontSize={12}>
              +{board.members.length - 3} others
            </Text>
          )}
        </HStack>
      </VStack>
    </Card>
  );
};

export default Board;

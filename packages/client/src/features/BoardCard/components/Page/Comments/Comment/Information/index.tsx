import { FC } from 'react';
import { HStack, VStack, Text } from '@chakra-ui/react';
import { IBoardMember } from '../../../../../../../models/board.model';
import Avatar from '../../../../../../../components/Avatar';
import { FontFamily } from '../../../../../../../theme/constants';

type Props = {
  author: IBoardMember;
  createdDate: number;
};

const Information: FC<Props> = ({ author, createdDate }) => {
  return (
    <HStack width="full" spacing="12px" alignItems="center">
      <Avatar src={author.user.picture} name={author.user.name} width="32px" height="32px" />
      <VStack spacing="1px" alignItems="flex-start">
        <Text fontSize={12} fontWeight={500}>
          {author.user.name}
        </Text>
        <Text fontSize={10} fontFamily={FontFamily.NotoSans} color="gray.4" fontWeight={500}>
          24 August at 20:43
        </Text>
      </VStack>
    </HStack>
  );
};

export default Information;

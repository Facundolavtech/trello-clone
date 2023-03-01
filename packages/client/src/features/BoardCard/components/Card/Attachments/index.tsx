import { FC } from 'react';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { BsPaperclip } from 'react-icons/bs';
import { FontFamily } from '../../../../../theme/constants';

type Props = {
  length: number;
};

const Attachments: FC<Props> = ({ length }) => {
  return (
    <HStack>
      <Icon as={BsPaperclip} fontSize={13} color="gray.4" />
      <Text fontSize={10} fontWeight={500} color="gray.4" fontFamily={FontFamily.NotoSans}>
        {length}
      </Text>
    </HStack>
  );
};

export default Attachments;

import { FC } from 'react';
import { Heading, Text, VStack } from '@chakra-ui/react';
import { FontFamily } from '../../../../../theme/constants';

type Props = {
  title: string;
  listName: string;
};

const Title: FC<Props> = ({ title, listName }) => {
  return (
    <VStack width="full" spacing="6px" alignItems="flex-start">
      <Heading color="black" fontWeight={400} fontSize={16} fontFamily={FontFamily.NotoSans}>
        {title}
      </Heading>
      <Text fontSize={10} fontWeight={600} color="gray.4">
        In list{' '}
        <Text as="strong" color="gray.1">
          {listName}
        </Text>
      </Text>
    </VStack>
  );
};

export default Title;

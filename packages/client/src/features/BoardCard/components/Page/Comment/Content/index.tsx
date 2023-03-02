import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { FontFamily } from '../../../../../../theme/constants';

type Props = {
  content: string;
};

const Content: FC<Props> = ({ content }) => {
  return (
    <Box width="full" maxWidth="390px">
      <Text color="gray.2" fontFamily={FontFamily.NotoSans}>
        {content}
      </Text>
    </Box>
  );
};

export default Content;

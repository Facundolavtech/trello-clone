import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { FontFamily } from '../../../../../../theme/constants';
import { useCommentContext } from '../Context';
import Editable from './Editable';

type Props = {
  content: string;
};

const Content: FC<Props> = ({ content }) => {
  const { state } = useCommentContext();

  return (
    <Box width="full">
      {state!.isEditing ? (
        <Editable content={content} />
      ) : (
        <Text width="full" color="gray.2" fontFamily={FontFamily.NotoSans}>
          {content}
        </Text>
      )}
    </Box>
  );
};

export default Content;

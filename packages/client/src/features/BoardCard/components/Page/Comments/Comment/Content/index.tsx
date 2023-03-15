import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useCommentContext } from 'features/BoardCard/components/Page/Comments/Comment/Context';
import Editable from 'features/BoardCard/components/Page/Comments/Comment/Content/Editable';
import { FontFamily } from 'theme/constants';

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

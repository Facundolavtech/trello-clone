import { Box, Text } from '@chakra-ui/react';
import { FontFamily } from '../../../../../../theme/constants';

const DescriptionBox = () => {
  return (
    <Box>
      <Text color="black" fontFamily={FontFamily.NotoSans} fontSize={14}>
        Simple board to start on a project. Each list can hold items (cards) that represent ideas or tasks. There 4 lists here: * Backlog 🤔 : Ideas are created here.
        Here people can describe the idea following three simple questions: Why you wish to do it, What it is, how can you do it. * In Progress📚: Once the ideas is
        clearly defined, the task can move to #todo stage. Here the owner of the idea can move to #doing once s/he is ready. He can also wait a bit for other members
        to join. * In Review ⚙️: On-going * Completed 🙌🏽**: Finished You could add other lists like labels holding labels (with colors) in order to tag each card by a
        label if you wish.
      </Text>
    </Box>
  );
};

export default DescriptionBox;

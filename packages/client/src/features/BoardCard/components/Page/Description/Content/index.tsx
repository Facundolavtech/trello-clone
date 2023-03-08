import { Text } from '@chakra-ui/react';

const DescriptionContent = ({ description }) => {
  return (
    <Text fontSize={description ? 14 : 12} fontWeight={400} color={description ? 'black' : 'gray.4'}>
      {description ? description : 'Enter new description'}
    </Text>
  );
};

export default DescriptionContent;

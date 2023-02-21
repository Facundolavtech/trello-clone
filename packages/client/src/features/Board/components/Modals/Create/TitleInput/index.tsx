import { Box, Input } from '@chakra-ui/react';
import { FC } from 'react';
import FormErrorMessage from '../../../../../../components/FormErrorMessage';

type Props = {
  onChange: (e: any) => void;
  value: string;
  error?: string;
};

const TitleInput: FC<Props> = ({ onChange, value, error }) => {
  return (
    <Box mb="21px">
      <Input
        type="text"
        width="full"
        height="34px"
        borderWidth={1}
        borderColor="#E0E0E0"
        name="title"
        value={value}
        borderRadius="8px"
        onChange={onChange}
        _placeholder={{ color: 'gray.4', fontWeight: 500, fontSize: 10 }}
        filter="drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1))"
        fontSize={10}
        py="10px"
        px="15px"
        mb={1}
        placeholder="Add board title"
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </Box>
  );
};

export default TitleInput;

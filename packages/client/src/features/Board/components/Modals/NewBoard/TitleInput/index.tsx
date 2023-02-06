import { Input } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  onChange: (e: any) => void;
};

const TitleInput: FC<Props> = ({ onChange }) => {
  return (
    <Input
      type="text"
      width="full"
      height="34px"
      borderWidth={1}
      borderColor="#E0E0E0"
      borderRadius="8px"
      onChange={onChange}
      _placeholder={{ color: 'gray.4', fontWeight: 500, fontSize: 10 }}
      filter="drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1))"
      fontSize={10}
      py="10px"
      px="15px"
      mb="21px"
      placeholder="Add board title"
    />
  );
};

export default TitleInput;

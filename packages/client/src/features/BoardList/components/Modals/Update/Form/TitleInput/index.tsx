import { ChangeEventHandler, FC } from 'react';
import { Input } from '@chakra-ui/react';
import { FontFamily } from 'theme/constants';

type Props = {
  isLoading: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TitleInput: FC<Props> = ({ isLoading, value, onChange }) => {
  return (
    <Input
      type="text"
      disabled={isLoading}
      name="name"
      value={value}
      onChange={onChange}
      placeholder="Enter new title for this list..."
      variant="unstyled"
      fontSize={14}
      _placeholder={{ fontFamily: FontFamily.NotoSans, color: 'gray.4', fontSize: 14, fontWeight: 500 }}
    />
  );
};

export default TitleInput;

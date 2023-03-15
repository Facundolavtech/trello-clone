import { ChangeEvent, FC } from 'react';
import { Input } from '@chakra-ui/react';
import { FontFamily } from 'theme/constants';

type Props = {
  disabled: boolean;
  value: string;
  onChange: (e: ChangeEvent<any>) => void;
};

const TitleInput: FC<Props> = ({ disabled, onChange, value }) => {
  return (
    <Input
      disabled={disabled}
      name="name"
      value={value}
      type="text"
      onChange={onChange}
      variant="unstyled"
      fontSize={14}
      _placeholder={{ fontFamily: FontFamily.NotoSans, color: 'gray.4', fontSize: 14, fontWeight: 500 }}
      placeholder="Enter a title for this list..."
    />
  );
};

export default TitleInput;

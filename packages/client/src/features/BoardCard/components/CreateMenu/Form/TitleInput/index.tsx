import { Input } from '@chakra-ui/react';
import { ChangeEventHandler, FC } from 'react';
import { FontFamily } from '../../../../../../theme/constants';

type Props = {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled: boolean;
};

const TitleInput: FC<Props> = ({ value, onChange, disabled }) => {
  return (
    <Input
      disabled={disabled}
      name="title"
      value={value}
      type="text"
      onChange={onChange}
      variant="unstyled"
      fontSize={14}
      _placeholder={{ fontFamily: FontFamily.NotoSans, color: 'gray.4', fontSize: 14, fontWeight: 500 }}
      placeholder="Enter a title for this card..."
    />
  );
};

export default TitleInput;

import { ChangeEvent, FC } from 'react';
import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

type Props = {
  icon: IconType;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  disabled?: boolean;
  handleChange: (e: string | ChangeEvent<any>) => void;
};

const AuthInput: FC<Props> = ({ icon, type, placeholder, disabled = false, handleChange, name, value }) => {
  return (
    <InputGroup size="lg">
      <InputLeftElement pointerEvents="none">
        <Icon as={icon} color="gray.400" />
      </InputLeftElement>
      <Input
        focusBorderColor="blue.1"
        type={type}
        placeholder={placeholder}
        background="white"
        name={name}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        _placeholder={{ fontSize: 14, color: 'gray.4' }}
      />
    </InputGroup>
  );
};

export default AuthInput;

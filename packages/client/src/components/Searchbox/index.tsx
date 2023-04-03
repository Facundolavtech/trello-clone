import { FC, ReactNode, ChangeEventHandler } from 'react';
import { Box, BoxProps, Input, InputProps } from '@chakra-ui/react';

type Props = {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  button: ReactNode;
  containerProps?: BoxProps;
  inputProps?: InputProps;
};

const Searchbox: FC<Props> = ({ button, placeholder, value, onChange, containerProps, inputProps }) => {
  return (
    <Box
      bg="white"
      height="34px"
      display="flex"
      alignItems="center"
      borderRadius={8}
      boxShadow="0px 4px 12px rgba(90, 56, 56, 0.1)"
      padding="2px"
      {...containerProps}
    >
      <Input
        height="full"
        name="search"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        fontSize={10}
        _placeholder={{ color: 'gray.4', fontSize: 10, fontWeight: 500 }}
        borderWidth={0}
        _focusVisible={{ outline: 'none' }}
        {...inputProps}
      />
      {button}
    </Box>
  );
};

export default Searchbox;

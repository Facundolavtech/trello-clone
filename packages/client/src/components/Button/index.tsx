import { FC, forwardRef } from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

type Props = ButtonProps;

const Button: FC<Props> = forwardRef((props, ref) => {
  return (
    <ChakraButton ref={ref} minW="initial" minH="initial" display="flex" alignItems="center" {...props}>
      {props.children}
    </ChakraButton>
  );
});

export default Button;

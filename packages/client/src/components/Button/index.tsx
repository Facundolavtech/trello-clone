import { CSSProperties, FC, ReactNode } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { FontFamily } from '../../theme/constants';

type Props = {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  px?: number;
  py?: number;
  variant: 'primary' | 'lightgray' | 'outline' | 'link';
  fontFamily: FontFamily;
  fontWeight?: number;
  disabled?: boolean;
  style?: CSSProperties;
};

const Button: FC<Props> = ({ children, width, px, py, variant, fontWeight = 500, fontFamily, disabled = false, style }) => {
  return (
    <ChakraButton
      width={width}
      height="auto"
      px={px}
      py={py}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      variant={variant}
      isDisabled={disabled}
      style={style}
      display="flex"
      alignItems="center"
    >
      {children}
    </ChakraButton>
  );
};

export default Button;

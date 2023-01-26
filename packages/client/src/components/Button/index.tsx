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
  loading?: boolean;
  onClick?: (params: any) => any;
};

const Button: FC<Props> = ({ children, width, px, py, variant, fontWeight = 500, fontFamily, disabled = false, style, onClick, loading = false }) => {
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
      isLoading={loading}
      style={style}
      display="flex"
      alignItems="center"
      onClick={onClick}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;

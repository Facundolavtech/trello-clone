import { CSSProperties, FC, ReactNode } from 'react';
import { Button as ChakraButton, As } from '@chakra-ui/react';
import { FontFamily } from '../../theme/constants';

type Props = {
  children: ReactNode;
  width?: number | string;
  as?: As;
  height?: number | string;
  type?: 'button' | 'submit';
  px?: number;
  py?: number;
  variant: 'primary' | 'lightgray' | 'outline' | 'link';
  fontFamily?: FontFamily;
  fontWeight?: number;
  disabled?: boolean;
  style?: CSSProperties;
  loading?: boolean;
  onClick?: (params: any) => any;
};

const Button: FC<Props> = ({
  children,
  width,
  type = 'button',
  as,
  px,
  py,
  variant,
  fontWeight = 500,
  fontFamily,
  disabled = false,
  style,
  onClick,
  loading = false,
}) => {
  return (
    <ChakraButton
      width={width}
      height="auto"
      as={as}
      px={px}
      py={py}
      fontWeight={fontWeight}
      type={type}
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

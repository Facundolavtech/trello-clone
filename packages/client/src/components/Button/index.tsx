import { CSSProperties, FC, ReactNode, forwardRef } from 'react';
import { Button as ChakraButton, As } from '@chakra-ui/react';
import { FontFamily } from '../../theme/constants';

type Props = {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  as?: As;
  type?: 'button' | 'submit';
  px?: number;
  py?: number;
  variant: 'primary' | 'lightgray' | 'outline' | 'link' | 'submit';
  fontFamily?: FontFamily;
  fontWeight?: number;
  disabled?: boolean;
  style?: CSSProperties;
  loading?: boolean;
  onClick?: (params: any) => any;
  [x: string]: any;
};

const Button: FC<Props> = forwardRef(
  (
    {
      children,
      width,
      height = 'auto',
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
      ...rest
    },
    ref
  ) => {
    return (
      <ChakraButton
        width={width}
        height={height}
        minW="initial"
        minH="initial"
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
        {...rest}
      >
        {children}
      </ChakraButton>
    );
  }
);

export default Button;

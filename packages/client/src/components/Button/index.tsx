import { CSSProperties, FC, ReactNode, forwardRef } from 'react';
import { Button as ChakraButton, As, ResponsiveValue } from '@chakra-ui/react';
import { FontFamily } from '../../theme/constants';

type Props = {
  children: ReactNode;
  width?: number | string | ResponsiveValue<number | 'px' | (string & {})>;
  height?: number | string | ResponsiveValue<number | 'px' | (string & {})>;
  as?: As;
  type?: 'button' | 'submit';
  px?: number;
  py?: number;
  variant: ButtonVariant;
  fontFamily?: FontFamily;
  fontWeight?: number;
  disabled?: boolean;
  style?: CSSProperties;
  loading?: boolean;
  onClick?: (params: any) => any;
  [x: string]: any;
};

export type ButtonVariant = 'primary' | 'lightgray' | 'outline' | 'link' | 'submit' | 'delete';

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
    _
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

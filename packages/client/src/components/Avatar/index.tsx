import { FC, CSSProperties } from 'react';
import { Avatar as ChakraAvatar, forwardRef, ResponsiveValue } from '@chakra-ui/react';

type Props = {
  size?: ResponsiveValue<(string & {}) | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | '2xs' | 'xs'>;
  src?: string | null;
  getInitials?: ((name: string) => string) | undefined;
  color?: string;
  bg?: string;
  name: string;
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
  ref?: any;
};

const Avatar: FC<Props> = ({ size = 'sm', src, name, width = '32px', height = '32px', color = 'white', bg, getInitials, style }) => {
  return (
    <ChakraAvatar
      size={size}
      src={src || ''}
      bg={bg ? bg : src ? 'transparent' : 'gray.4'}
      color={color}
      name={name}
      width={width}
      getInitials={getInitials}
      height={height}
      borderRadius="8px"
      style={style}
    />
  );
};

export const AvatarWithRef: FC<Props> = forwardRef(({ size = 'sm', src, name, width = '32px', height = '32px', color = 'white', bg, getInitials, style }, ref) => {
  return (
    <ChakraAvatar
      ref={ref}
      size={size}
      src={src || ''}
      bg={bg ? bg : src ? 'transparent' : 'gray.4'}
      color={color}
      name={name}
      width={width}
      getInitials={getInitials}
      height={height}
      borderRadius="8px"
      style={style}
    />
  );
});

export default Avatar;

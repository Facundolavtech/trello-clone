import { FC, CSSProperties } from 'react';
import { Avatar as ChakraAvatar, ResponsiveValue } from '@chakra-ui/react';

type Props = {
  size?: ResponsiveValue<(string & {}) | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | '2xs' | 'xs'>;
  src?: string | null;
  getInitials?: ((name: string) => string) | undefined;
  color?: string;
  name: string;
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
};

const Avatar: FC<Props> = ({ size = 'sm', src, name, width = '32px', height = '32px', color = 'white', getInitials, style }) => {
  return (
    <ChakraAvatar
      size={size}
      src={src || ''}
      bg={src ? 'transparent' : 'gray.4'}
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

export default Avatar;
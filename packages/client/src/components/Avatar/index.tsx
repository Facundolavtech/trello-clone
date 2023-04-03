import { FC, ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';
import { AvatarProps, Box, Avatar as ChakraAvatar } from '@chakra-ui/react';

type Props = AvatarProps;

const Avatar: FC<Props> = (props) => {
  return (
    <>
      {props.src ? (
        <Box width={props.width} height={props.height} position="relative">
          <Image src={props.src} objectFit="cover" layout="fill" alt={props.name || 'Avatar'} style={{ borderRadius: '8px' }} />
        </Box>
      ) : (
        <AvatarWithRef {...props} />
      )}
    </>
  );
};

export default Avatar;

const AvatarWithRef = forwardRef((props: AvatarProps, ref: ForwardedRef<any>) => {
  return <ChakraAvatar ref={ref} bg={props.bg ? props.bg : props.src ? 'transparent' : 'gray.4'} borderRadius="8px" {...props} />;
});

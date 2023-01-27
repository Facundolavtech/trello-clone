import { Heading, HStack, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { FontFamily } from '../../theme/constants';

type Props = {
  withTitle: boolean;
  width: number | string;
  height: number | string;
};

const Logo: FC<Props> = ({ withTitle = false, width, height }) => {
  return (
    <HStack alignItems="center" spacing={4}>
      <Image objectFit="contain" src="/assets/svg/logo.svg" alt="Logo" width={width} height={height} />
      {withTitle && (
        <Heading as="h1" color="gray.1" fontSize={18} fontWeight={600} fontFamily={FontFamily.Poppins}>
          Thullo
        </Heading>
      )}
    </HStack>
  );
};

export default Logo;

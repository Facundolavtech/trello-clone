import { Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FontFamily } from '../../../../theme/constants';

type Props = {
  title: string;
};

const AuthTitle: FC<Props> = ({ title }) => {
  return (
    <Heading as="h1" textAlign="left" color="gray.1" fontWeight={600} fontFamily={FontFamily.Poppins} fontSize={26}>
      {title}
    </Heading>
  );
};

export default AuthTitle;

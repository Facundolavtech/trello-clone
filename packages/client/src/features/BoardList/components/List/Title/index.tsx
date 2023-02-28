import { FC } from 'react';
import { Heading } from '@chakra-ui/react';

type Props = {
  title: string;
};

const Title: FC<Props> = ({ title }) => {
  return (
    <Heading color="gray.1" fontWeight={500} fontSize={14}>
      {title}
    </Heading>
  );
};

export default Title;

import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import { FontFamily } from '../../../../../theme/constants';

type Props = {
  title: string;
};

const Title: FC<Props> = ({ title }) => {
  return (
    <Heading fontSize={16} fontWeight={400} fontFamily={FontFamily.NotoSans} width="full" className="preventTextOverflow">
      {title}
    </Heading>
  );
};

export default Title;

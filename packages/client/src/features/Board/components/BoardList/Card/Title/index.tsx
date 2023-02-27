import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import { FontFamily } from '../../../../../../theme/constants';

type Props = {
  title: string;
};

const BoardCardTitle: FC<Props> = ({ title }) => {
  return (
    <Heading width="full" className="preventTextOverflow" fontWeight={500} color="black" fontFamily={FontFamily.NotoSans} fontSize={16}>
      {title}
    </Heading>
  );
};

export default BoardCardTitle;

import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import formatTimestampToDate from '../../../../../../../../utils/formatTimestampToDate';

type Props = {
  createdAt: number;
};

const CreatedDate: FC<Props> = ({ createdAt }) => {
  return (
    <Heading as="time" fontSize={8} fontWeight={500} color="gray.4">
      Added {formatTimestampToDate(createdAt, 'MMMM d, yyyy')}
    </Heading>
  );
};

export default CreatedDate;

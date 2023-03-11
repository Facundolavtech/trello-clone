import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import { format, fromUnixTime } from 'date-fns';
import { enUS } from 'date-fns/locale';

type Props = {
  createdAt: number;
};

const CreatedDate: FC<Props> = ({ createdAt }) => {
  return (
    <Heading fontSize={8} fontWeight={500} color="gray.4">
      Added {format(fromUnixTime(createdAt), 'dd/MM/yyyy', { locale: enUS })}
    </Heading>
  );
};

export default CreatedDate;

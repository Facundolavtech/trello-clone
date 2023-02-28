import { FC } from 'react';
import { VStack } from '@chakra-ui/react';
import { IBoardCardAttachment } from '../../../../../../models/board-card.model';
import CreatedDate from './CreatedDate';
import Name from './Name';

type Props = {
  attachment: IBoardCardAttachment;
};

const Information: FC<Props> = ({ attachment }) => {
  return (
    <VStack alignItems="flex-start">
      <CreatedDate createdAt={attachment.createdAt} />
      <Name name={attachment.name} />
    </VStack>
  );
};

export default Information;

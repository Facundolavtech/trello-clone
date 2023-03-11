import { FC } from 'react';
import { VStack } from '@chakra-ui/react';
import CreatedDate from './CreatedDate';
import Name from './Name';
import { IBoardCardAttachment } from '../../../../../../../models/board-card.model';

type Props = {
  attachment: IBoardCardAttachment;
};

const Information: FC<Props> = ({ attachment }) => {
  return (
    <VStack alignItems="flex-start" width="full">
      <CreatedDate createdAt={attachment.createdAt} />
      <Name name={attachment.name} />
    </VStack>
  );
};

export default Information;

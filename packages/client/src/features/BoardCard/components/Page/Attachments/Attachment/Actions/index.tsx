import { FC } from 'react';
import { HStack } from '@chakra-ui/react';
import Download from './Download';
import Delete from './Delete';
import { IBoardCardAttachment } from '../../../../../../../models/board-card.model';

type Props = {
  attachment: IBoardCardAttachment;
};

const Actions: FC<Props> = ({ attachment }) => {
  return (
    <HStack spacing="9px" width="full">
      <Download name={attachment.name} url={attachment.url} />
      <Delete id={attachment.id} />
    </HStack>
  );
};

export default Actions;

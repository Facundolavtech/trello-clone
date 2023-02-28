import { FC } from 'react';
import { HStack } from '@chakra-ui/react';
import { IBoardCardAttachment } from '../../../../../../models/board-card.model';
import Download from './Download';
import Delete from './Delete';

type Props = {
  attachment: IBoardCardAttachment;
};

const Actions: FC<Props> = ({ attachment }) => {
  return (
    <HStack spacing="9px">
      <Download name={attachment.name} url={attachment.url} />
      <Delete id={attachment.id} />
    </HStack>
  );
};

export default Actions;

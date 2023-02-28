import { FC } from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import { IBoardCardAttachment } from '../../../../../models/board-card.model';
import Information from './Information';
import Cover from './Cover';
import Actions from './Actions';

type Props = {
  attachment: IBoardCardAttachment;
};

const Attachment: FC<Props> = ({ attachment }) => {
  return (
    <HStack width="full" justifyContent="flex-start" spacing="13px">
      <Cover name={attachment.name} type={attachment.type} url={attachment.url} />
      <VStack spacing="6px" width="full" alignItems="flex-start">
        <Information attachment={attachment} />
        <Actions attachment={attachment} />
      </VStack>
    </HStack>
  );
};

export default Attachment;

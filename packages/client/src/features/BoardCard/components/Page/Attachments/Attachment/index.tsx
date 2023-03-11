import { FC } from 'react';
import { Hide, HStack, VStack } from '@chakra-ui/react';
import Information from './Information';
import Cover from './Cover';
import Actions from './Actions';
import { IBoardCardAttachment } from '../../../../../../models/board-card.model';

type Props = {
  attachment: IBoardCardAttachment;
};

const Attachment: FC<Props> = ({ attachment }) => {
  return (
    <HStack width="full" justifyContent="flex-start" spacing="13px" alignItems="flex-start">
      <Hide breakpoint="(max-width: 580px)">
        <Cover name={attachment.name} type={attachment.type} url={attachment.url} />
      </Hide>
      <VStack spacing="6px" width="full" alignItems="flex-start">
        <Hide breakpoint="(min-width: 580px)">
          <Cover name={attachment.name} type={attachment.type} url={attachment.url} />
        </Hide>
        <Information attachment={attachment} />
        <Actions attachment={attachment} />
      </VStack>
    </HStack>
  );
};

export default Attachment;

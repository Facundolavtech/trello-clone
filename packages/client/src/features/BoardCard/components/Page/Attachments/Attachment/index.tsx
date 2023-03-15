import { FC } from 'react';
import { Hide, HStack, VStack } from '@chakra-ui/react';
import Information from 'features/BoardCard/components/Page/Attachments/Attachment/Information';
import Cover from 'features/BoardCard/components/Page/Attachments/Attachment/Cover';
import Actions from 'features/BoardCard/components/Page/Attachments/Attachment/Actions';
import { IBoardCardAttachment } from 'models/board-card.model';

type Props = {
  attachment: IBoardCardAttachment;
};

const Attachment: FC<Props> = ({ attachment }) => {
  return (
    <HStack as="article" width="full" justifyContent="flex-start" spacing="13px" alignItems="flex-start">
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

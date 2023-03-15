import { FC } from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import { IBoardCardAttachment } from 'models/board-card.model';
import Title from 'features/BoardCard/components/Page/Attachments/Title';
import Empty from 'features/BoardCard/components/Page/Attachments/Empty';
import Upload from 'features/BoardCard/components/Page/Attachments/Upload';
import Attachment from 'features/BoardCard/components/Page/Attachments/Attachment';

type Props = {
  attachments: IBoardCardAttachment[];
};

const Attachments: FC<Props> = ({ attachments }) => {
  return (
    <VStack width="full" alignItems="flex-start" spacing="14px" as="section">
      <HStack>
        <Title />
        <Upload />
      </HStack>
      {attachments.length === 0 ? <Empty /> : attachments.map((attachment) => <Attachment attachment={attachment} key={attachment.id} />)}
    </VStack>
  );
};

export default Attachments;

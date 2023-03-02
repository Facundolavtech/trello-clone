import { FC } from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import { IBoardCardAttachment } from '../../../../../models/board-card.model';
import Attachment from '../Attachment';
import Title from './Title';
import Empty from './Empty';
import Upload from './Upload';

type Props = {
  attachments: IBoardCardAttachment[];
};

const Attachments: FC<Props> = ({ attachments }) => {
  return (
    <VStack width="full" alignItems="flex-start" spacing="14px">
      <HStack>
        <Title />
        <Upload />
      </HStack>
      {attachments.length === 0 ? <Empty /> : attachments.map((attachment) => <Attachment attachment={attachment} key={attachment.id} />)}
    </VStack>
  );
};

export default Attachments;

import { FC } from 'react';
import { VStack } from '@chakra-ui/react';
import { IBoardCardAttachment } from '../../../../../models/board-card.model';
import Attachment from '../Attachment';
import Title from './Title';

type Props = {
  attachments: IBoardCardAttachment[];
};

const Attachments: FC<Props> = ({ attachments }) => {
  return (
    <VStack width="full" alignItems="flex-start" spacing="14px">
      <Title />
      {attachments.map((attachment) => (
        <Attachment attachment={attachment} key={attachment.id} />
      ))}
    </VStack>
  );
};

export default Attachments;

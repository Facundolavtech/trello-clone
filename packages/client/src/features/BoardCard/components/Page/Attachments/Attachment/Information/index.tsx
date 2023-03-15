import { FC } from 'react';
import { VStack } from '@chakra-ui/react';
import CreatedDate from 'features/BoardCard/components/Page/Attachments/Attachment/Information/CreatedDate';
import Name from 'features/BoardCard/components/Page/Attachments/Attachment/Information/Name';
import { IBoardCardAttachment } from 'models/board-card.model';

type Props = {
  attachment: IBoardCardAttachment;
};

const Information: FC<Props> = ({ attachment }) => {
  return (
    <VStack alignItems="flex-start" width="full" spacing="1px">
      <CreatedDate createdAt={attachment.createdAt} />
      <Name name={attachment.name} />
    </VStack>
  );
};

export default Information;

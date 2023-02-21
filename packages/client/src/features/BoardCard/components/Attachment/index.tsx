import { Avatar, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { format, fromUnixTime } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { FC } from 'react';
import Button from '../../../../components/Button';
import { IBoardCardAttachment } from '../../../../models/board-card.model';
import downloadAttachment from './download.service';

type Props = {
  attachment: IBoardCardAttachment;
};

const CardAttachment: FC<Props> = ({ attachment }) => {
  return (
    <HStack width="full" justifyContent="flex-start" spacing="13px">
      <Avatar
        src={attachment.url || ''}
        bg={attachment.type.startsWith('image') ? 'transparent' : 'gray.5'}
        name={attachment.name}
        getInitials={(name) => name.slice(0, 2)}
        size="sm"
        objectFit="cover"
        color="gray.2"
        width="80px"
        height="53px"
        borderRadius="8px"
      />
      <VStack spacing="6px" width="full" alignItems="flex-start">
        <VStack alignItems="flex-start">
          <Heading fontSize={8} fontWeight={500} color="gray.4">
            Added {format(fromUnixTime(attachment.createdAt || 0), 'dd/MM/yyyy', { locale: enUS })}
          </Heading>
          <Text color="black" fontSize={10} fontWeight={500}>
            {attachment.name}
          </Text>
        </VStack>
        <HStack spacing="9px">
          <Button variant="outline" width="62px" height="24px" onClick={() => downloadAttachment(attachment.url, attachment.name)}>
            <Text fontSize={10} fontWeight={500} color="gray.3">
              Download
            </Text>
          </Button>
          <Button variant="outline" width="62px" height="24px">
            <Text fontSize={10} fontWeight={500} color="gray.3">
              Delete
            </Text>
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default CardAttachment;

import { VStack, HStack, Icon, Text, Wrap } from '@chakra-ui/react';
import { MdLabel } from 'react-icons/md';
import { useCardContext } from '../../../../../../Context';
import useCard from '../../../../../../hooks/useCard';
import Label from '../Label';

const Labels = () => {
  const { id } = useCardContext();

  const { data: card } = useCard({ id });

  return (
    <VStack spacing="8px" mb="19px">
      <HStack width="full" justifyContent="flex-start" spacing="6px">
        <Icon as={MdLabel} color="gray.4" fontSize={10} />
        <Text fontSize={10} fontWeight={600} color="gray.4">
          Available
        </Text>
      </HStack>
      {card?.labels && card.labels.length > 0 && (
        <Wrap width="full" spacing="12px">
          {card.labels.map((l) => (
            <Label key={l.id} label={l} />
          ))}
        </Wrap>
      )}
    </VStack>
  );
};

export default Labels;

import { HStack, Text, VStack } from '@chakra-ui/react';
import Avatar from 'components/Avatar';
import { useCardContext } from 'features/BoardCard/context';
import useCard from 'features/BoardCard/hooks/useCard';

const List = () => {
  const { id } = useCardContext();
  const { data: card } = useCard({ id });

  if (!card) return null;

  return (
    <VStack spacing="19px" alignItems="flex-start" width="full" mb="26px">
      {card.members.map((cm) => (
        <HStack key={cm.id} width="full" justifyContent="flex-start" spacing="10px">
          <Avatar width="32px" height="32px" src={cm.user.picture || ''} name={cm.user.name} />
          <Text color="gray.1" fontWeight={600} fontSize={10} className="preventTextOverflow">
            {cm.user.name}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
};

export default List;

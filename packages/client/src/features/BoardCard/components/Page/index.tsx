import { Box, Heading, HStack, Icon, Modal, ModalContent, ModalOverlay, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { IoMdDocument } from 'react-icons/io';
import { MdOutlineClose } from 'react-icons/md';
import Button from '../../../../components/Button';
import EditButton from '../../../../components/Buttons/Edit';
import { AppRoutes } from '../../../../config/routes';
import { FontFamily } from '../../../../theme/constants';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import useCard from '../../hooks/useCard';
import useCardList from '../../hooks/useCardList';
import CardAttachment from '../Attachment';

type Props = {
  cardId: string;
};

const CardPage = NiceModal.create(({ cardId }: Props) => {
  const modal = useModal();
  const boardId = useBoardIdFromRoute();
  const { data: card } = useCard({ id: cardId });

  const handleCloseModal = () => {
    if (typeof window === 'undefined') return;
    modal.remove();
    window.history.pushState(null, boardId, `${AppRoutes.BOARD}/${boardId}`);
  };

  const list = useCardList({ cardId, boardId });

  if (!card || !list) return null;

  return (
    <Modal isOpen={true} onClose={handleCloseModal} preserveScrollBarGap>
      <ModalOverlay backgroundColor="rgba(0,0,0,0.1)" />
      <ModalContent position="relative" padding="24px" maxWidth={{ base: '90%', md: '661px' }} boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)" borderRadius="8px">
        <Button
          onClick={handleCloseModal}
          variant="primary"
          style={{ position: 'absolute', top: '9px', right: '16px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
          width="32px"
          height="32px"
        >
          <Icon as={MdOutlineClose} color="white" fontSize={22} />
        </Button>
        <VStack spacing="25px" width="full">
          {card.cover && (
            <Box
              width="full"
              height="130px"
              borderRadius="12px"
              backgroundImage={card.cover}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            />
          )}
          <SimpleGrid width="full" columns={{ base: 1, md: 2 }} templateColumns="2fr 1fr" spacing="23px">
            <VStack spacing="25px" width="full" alignItems="flex-start">
              <VStack spacing="11px" width="full" alignItems="flex-start">
                <VStack spacing="23px" alignItems="flex-start" width="full">
                  <VStack width="full" spacing="6px" alignItems="flex-start">
                    <Heading color="black" fontWeight={400} fontSize={16} fontFamily={FontFamily.NotoSans}>
                      {card.title}
                    </Heading>
                    <Text fontSize={10} fontWeight={600} color="gray.4">
                      In list{' '}
                      <Text as="strong" color="gray.1">
                        {list.name}
                      </Text>
                    </Text>
                  </VStack>
                  <HStack width="full" spacing="13px">
                    <HStack spacing="8px">
                      <Icon as={IoMdDocument} fontSize={10} color="gray.4" />
                      <Text color="gray.4" fontSize={10} fontWeight={600}>
                        Description
                      </Text>
                    </HStack>
                    <EditButton styles={{ gap: 10 }} label="Edit" onClick={() => null} />
                  </HStack>
                </VStack>
                {card.description && (
                  <Text fontSize={14} fontWeight={400} color="black">
                    {card.description}
                  </Text>
                )}
              </VStack>
              {card.attachments.length > 0 && (
                <VStack width="full" alignItems="flex-start" spacing="14px">
                  <HStack spacing="8px">
                    <Icon as={IoMdDocument} fontSize={10} color="gray.4" />
                    <Text color="gray.4" fontSize={10} fontWeight={600}>
                      Attachments
                    </Text>
                  </HStack>
                  {card.attachments.map((attachment) => (
                    <CardAttachment attachment={attachment} key={attachment.id} />
                  ))}
                </VStack>
              )}
            </VStack>
          </SimpleGrid>
        </VStack>
      </ModalContent>
    </Modal>
  );
});

export default CardPage;

import { useState } from 'react';
import {
  Image,
  Menu as ChakraMenu,
  MenuButton as ChakraMenuButton,
  Modal,
  ModalContent,
  ModalOverlay,
  Input,
  HStack,
  Icon,
  Text,
  Flex,
  Wrap,
  MenuList,
  WrapItem,
} from '@chakra-ui/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { AiFillPicture, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';
import Button from '../../../../../components/Button';
import boardCovers from '../../../helpers/covers';
import { IoMdLock, IoMdUnlock } from 'react-icons/io';

const NewBoardModal = NiceModal.create(() => {
  const modal = useModal();

  const [newBoardValues, setNewBoardValues] = useState({
    cover: boardCovers[Math.floor(Math.random() * boardCovers.length)],
    title: '',
    isPrivate: true,
  });

  const handleSubmit = () => {
    if (!newBoardValues.title.trim() || !newBoardValues.cover.src) return;

    console.log(newBoardValues);
  };

  return (
    <Modal isOpen={modal.visible} onClose={() => modal.remove()}>
      <ModalOverlay />
      <ModalContent py="27px" px="24px" borderRadius="8px" maxW="90%" width="307px" position="relative">
        <Button variant="primary" width="32px" height="32px" position="absolute" right="11px" top="11px" onClick={() => modal.remove()}>
          <Icon as={MdOutlineClose} color="white" fontSize={22} />
        </Button>
        <Image mb="10px" width="full" height="78px" borderRadius="8px" src={newBoardValues.cover.src} alt="Board cover preview" objectFit="cover" />
        <Input
          type="text"
          width="full"
          height="34px"
          borderWidth={1}
          borderColor="#E0E0E0"
          borderRadius="8px"
          onChange={(e) => setNewBoardValues({ ...newBoardValues, title: e.target.value })}
          _placeholder={{ color: 'gray.4', fontWeight: 500, fontSize: 10 }}
          filter="drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1))"
          fontSize={10}
          py="10px"
          px="15px"
          mb="21px"
          placeholder="Add board title"
        />
        <Flex width="full" justifyContent="space-between" mb="22px">
          <ChakraMenu>
            {({ onClose }) => (
              <>
                <ChakraMenuButton>
                  <Button as="div" width="120px" height="32px" variant="lightgray" style={{ gap: 12, justifyContent: 'flex-start' }}>
                    <Icon as={AiFillPicture} fontSize={14} color="gray.3" />
                    <Text color="gray.3" fontWeight={500} fontSize={12}>
                      Cover
                    </Text>
                  </Button>
                </ChakraMenuButton>
                <MenuList
                  padding="12px"
                  width="234px"
                  height="240px"
                  maxWidth="full"
                  borderWidth={1}
                  borderColor="#E0E0E0"
                  borderRadius="12px"
                  boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)"
                >
                  <Wrap
                    spacing={4}
                    width="full"
                    height="full"
                    overflowY="auto"
                    css={{
                      '&::-webkit-scrollbar': {
                        width: 0,
                      },
                      '&::-webkit-scrollbar-track': {
                        width: 0,
                      },
                    }}
                  >
                    {boardCovers.map((cover) => (
                      <WrapItem
                        _hover={{ cursor: 'pointer' }}
                        key={cover.name}
                        onClick={() => {
                          setNewBoardValues({ ...newBoardValues, cover }), onClose();
                        }}
                        width="100%"
                        height="48px"
                        borderRadius="8px"
                        backgroundImage={cover.src}
                        backgroundPosition="center"
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                      />
                    ))}
                  </Wrap>
                </MenuList>
              </>
            )}
          </ChakraMenu>
          <Button
            width="120px"
            height="32px"
            variant="lightgray"
            style={{ gap: 12, justifyContent: 'flex-start' }}
            onClick={() => setNewBoardValues({ ...newBoardValues, isPrivate: !newBoardValues.isPrivate })}
          >
            <Icon as={newBoardValues.isPrivate ? IoMdLock : IoMdUnlock} fontSize={14} color="gray.3" />
            <Text color="gray.3" fontWeight={500} fontSize={12}>
              {newBoardValues.isPrivate ? 'Private' : 'Public'}
            </Text>
          </Button>
        </Flex>
        <HStack width="full" justifyContent="flex-end" spacing="17px">
          <Button variant="link" onClick={() => modal.remove()}>
            <Text fontSize={10} fontWeight={500} color="gray.3">
              Cancel
            </Text>
          </Button>
          <Button height="30px" width="76px" variant="primary" style={{ gap: 11 }} onClick={handleSubmit}>
            <Icon as={AiOutlinePlus} fontSize={14} color="white" />
            <Text color="white" fontWeight={500} fontSize={10}>
              Create
            </Text>
          </Button>
        </HStack>
      </ModalContent>
    </Modal>
  );
});

export default NewBoardModal;

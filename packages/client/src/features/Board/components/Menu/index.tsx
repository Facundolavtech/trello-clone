import { useState } from 'react';
import { Drawer, Icon, DrawerContent, Heading, HStack, Box, Divider, VStack, Text, useDisclosure } from '@chakra-ui/react';
import { MdClose, MdEdit } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import { useBoardContext } from '../../context/board';
import useBoard from '../../hooks/useBoard';
import { FontFamily, HeaderStyles } from '../../../../theme/constants';
import { format, fromUnixTime } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Button from '../../../../components/Button';
import useUserProfile from '../../../../hooks/useUserProfile';
import userIsBoardAdmin from '../../utils/userIsBoardAdmin';
import useBoardIdFromRoute from '../../hooks/useBoardIdFromRoute';
import DeleteBoardMemberDialog from '../DeleteMemberDialog';
import Avatar from '../../../../components/Avatar';

const BoardMenu = () => {
  const { isOpen, onClose } = useBoardContext();
  const boardId = useBoardIdFromRoute();

  const { data: board } = useBoard({ id: boardId });
  const { data: user } = useUserProfile();

  const deleteMemberDisclosure = useDisclosure();
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  if (!board || !user) return null;

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} preserveScrollBarGap>
        <DrawerContent
          className="hide__scroll"
          boxShadow="none"
          maxWidth={{ base: '320px', md: '377px' }}
          position="fixed"
          marginTop={`${HeaderStyles.height}px`}
          right={0}
          zIndex={50}
          padding="20px"
          overflowY="auto"
        >
          <VStack width="full" spacing="25px">
            <VStack width="full" spacing="10px">
              <VStack spacing="8px" width="full">
                <HStack width="full" justifyContent="space-between">
                  <Heading fontWeight={600} fontSize={12} color="gray.1">
                    Menu
                  </Heading>
                  <Box as="button" _hover={{ cursor: 'pointer' }} onClick={onClose}>
                    <Icon as={MdClose} color="gray.2" fontSize={18} />
                  </Box>
                </HStack>
                <Divider width="full" orientation="horizontal" borderColor="gray.5" />
              </VStack>
              <VStack spacing="13px" width="full" alignItems="flex-start">
                <HStack spacing="6px" width="full" justifyContent="flex-start">
                  <Icon as={FaUserCircle} fontSize={10} color="gray.4" />
                  <Text color="gray.4" fontWeight={600} fontSize={10}>
                    Made by
                  </Text>
                </HStack>
                <HStack spacing="13px">
                  <Avatar name={board.admin.name} src={board.admin.picture} style={{ background: board.admin.picture ? 'transparent' : '#C4C4C4' }} />
                  <VStack spacing="2px" alignItems="flex-start">
                    <Text color="gray.1" fontWeight={600} fontSize={12}>
                      {board.admin.name}
                    </Text>
                    <Text fontSize={10} fontWeight={600} fontFamily={FontFamily.NotoSans} color="gray.4">
                      on {format(fromUnixTime(board.createdAt || 0), 'dd/MM/yyyy', { locale: enUS })}
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
            <VStack width="full" alignItems="flex-start" spacing="14px">
              <HStack spacing="13px" width="full" justifyContent="flex-start">
                <HStack spacing="8px">
                  <Icon as={HiDocumentText} fontSize={10} color="gray.4" />
                  <Text color="gray.4" fontWeight={600} fontSize={10}>
                    Description
                  </Text>
                </HStack>
                {userIsBoardAdmin(board?.admin.id, user.id) && (
                  <Button height="24px" width="62px" variant="outline" gap="10px">
                    <Icon as={MdEdit} fontSize={9} color="gray.3" />
                    <Text color="gray.3" fontWeight={500} fontSize={10}>
                      Edit
                    </Text>
                  </Button>
                )}
              </HStack>
              <Box>
                <Text color="black" fontFamily={FontFamily.NotoSans} fontSize={14}>
                  Simple board to start on a project. Each list can hold items (cards) that represent ideas or tasks. There 4 lists here: * Backlog 🤔 : Ideas are
                  created here. Here people can describe the idea following three simple questions: Why you wish to do it, What it is, how can you do it. * In
                  Progress📚: Once the ideas is clearly defined, the task can move to #todo stage. Here the owner of the idea can move to #doing once s/he is ready.
                  He can also wait a bit for other members to join. * In Review ⚙️: On-going * Completed 🙌🏽**: Finished You could add other lists like labels holding
                  labels (with colors) in order to tag each card by a label if you wish.
                </Text>
              </Box>
            </VStack>
            <VStack width="full" alignItems="flex-start" spacing="18px">
              <HStack spacing="6px">
                <Icon as={HiDocumentText} fontSize={10} color="gray.4" />
                <Text color="gray.4" fontWeight={600} fontSize={10}>
                  Team
                </Text>
              </HStack>
              <VStack width="full" spacing="20px">
                <HStack width="full" justifyContent="space-between">
                  <HStack spacing="17px">
                    <Avatar src={board.admin.picture} style={{ background: board.admin.picture ? 'transparent' : '#C4C4C4' }} name={board.admin.name} />
                    <Text color="gray.1" fontWeight={600} fontSize={12}>
                      {board.admin.name}
                    </Text>
                  </HStack>
                  <Box width="63px">
                    <Text textAlign="center" color="gray.4" fontWeight={500} fontSize={10}>
                      Admin
                    </Text>
                  </Box>
                </HStack>
                {board.members
                  .filter((member) => member.user.id !== board.admin.id)
                  .map((member) => {
                    return (
                      <HStack width="full" justifyContent="space-between" key={member.id}>
                        <DeleteBoardMemberDialog userId={selectedMemberId} disclosure={deleteMemberDisclosure} />
                        <HStack spacing="17px">
                          <Avatar src={member.user.picture} style={{ background: board.admin.picture ? 'transparent' : '#C4C4C4' }} name={member.user.name} />
                          <Text color="gray.1" fontWeight={600} fontSize={12}>
                            {member.user.name}
                          </Text>
                        </HStack>
                        {userIsBoardAdmin(board.admin.id, user.id) && (
                          <Button
                            width="63px"
                            height="24px"
                            variant="outline"
                            style={{ border: '1px solid #EB5757' }}
                            onClick={() => {
                              setSelectedMemberId(member.user.id);
                              deleteMemberDisclosure.onOpen();
                            }}
                          >
                            <Text fontWeight={500} fontSize={10} color="#EB5757">
                              Remove
                            </Text>
                          </Button>
                        )}
                      </HStack>
                    );
                  })}
              </VStack>
            </VStack>
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default BoardMenu;

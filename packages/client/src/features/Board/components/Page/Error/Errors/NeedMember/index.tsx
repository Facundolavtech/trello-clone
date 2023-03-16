import { FC } from 'react';
import { VStack, HStack, Icon, Heading, Divider, Button, Text, Center } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import Avatar from 'components/Avatar';
import { MdLock } from 'react-icons/md';

type Props = {
  error: AxiosError<any, any> | null;
};

const NeedMember: FC<Props> = ({ error }) => {
  if (!error) return null;

  const {
    message,
    additionalInfo: { admin },
  } = error.response?.data;

  return (
    <Center>
      <VStack maxWidth={{ base: '375px', md: '475px' }} backgroundColor="lightgray.1" borderRadius="8px" padding={8} spacing={4}>
        <HStack spacing={4} justifyContent="flex-start" width="full">
          <Icon as={MdLock} color="gray.2" fontSize={26} />
          <Heading fontSize={18} fontWeight={500} color="gray.2">
            Content locked
          </Heading>
        </HStack>
        <Heading color="red.400" fontWeight={500} fontSize={16}>
          {message}
        </Heading>
        <Divider orientation="horizontal" borderColor="gray.5" />
        <VStack spacing={4} alignItems="flex-start" width="full">
          <Heading color="gray.2" fontSize={16} fontWeight={500}>
            Admin
          </Heading>
          <HStack spacing={4}>
            <Avatar width="42px" height="42px" src={admin.picture} name={admin.name} />
            <Text color="gray.3" fontSize={14}>
              {admin.name}
            </Text>
          </HStack>
          <Button variant="primary" width="full" height="42px">
            <Text fontSize={14} fontWeight={400}>
              Request access
            </Text>
          </Button>
        </VStack>
      </VStack>
    </Center>
  );
};

export default NeedMember;

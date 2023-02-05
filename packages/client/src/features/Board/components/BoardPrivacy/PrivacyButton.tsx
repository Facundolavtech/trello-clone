import { FC } from 'react';
import { Icon, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IoMdLock, IoMdUnlock } from 'react-icons/io';
import Button from '../../../../components/Button';
import useBoard from '../../hooks/useBoard';
import Loading from './Loading';

type Props = {
  disabled: boolean;
};

const PrivacyButton: FC<Props> = ({ disabled }) => {
  const router = useRouter();
  const boardId = router.query.id as string;

  const { data, isLoading } = useBoard({ id: boardId });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Button as="div" variant="lightgray" height="32px" width="98px" style={{ gap: '11px' }} _hover={disabled && { cursor: 'initial', opacity: 1 }}>
      <Icon as={data?.isPrivate ? IoMdLock : IoMdUnlock} fontSize={12} color="gray.3" />
      <Text fontSize={12} fontWeight={500} color="gray.3">
        {data?.isPrivate ? 'Private' : 'Public'}
      </Text>
    </Button>
  );
};

export default PrivacyButton;

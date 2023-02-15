import { Icon, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { IoMdLock, IoMdUnlock } from 'react-icons/io';
import Button from '../../../../../../../components/Button';
import { BoardVisibility } from '../../../../../../../models/board.model';

type Props = {
  setFieldValue: (key: string, value: any) => void;
  value: BoardVisibility;
};

const PrivacyButton: FC<Props> = ({ setFieldValue, value }) => {
  const isPrivate = value === 'private';

  return (
    <Button
      id="isPrivate"
      width="120px"
      height="32px"
      type="button"
      variant="lightgray"
      style={{ gap: 12, justifyContent: 'flex-start' }}
      onClick={() => setFieldValue('visibility', isPrivate ? 'public' : 'private')}
    >
      <Icon as={isPrivate ? IoMdLock : IoMdUnlock} fontSize={14} color="gray.3" />
      <Text color="gray.3" fontWeight={500} fontSize={12}>
        {isPrivate ? 'Private' : 'Public'}
      </Text>
    </Button>
  );
};

export default PrivacyButton;

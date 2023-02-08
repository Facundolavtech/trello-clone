import { Icon, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { IoMdLock, IoMdUnlock } from 'react-icons/io';
import Button from '../../../../../../../components/Button';

type Props = {
  setFieldValue: (key: string, value: any) => void;
  value: boolean;
};

const PrivacyButton: FC<Props> = ({ setFieldValue, value }) => {
  const isPrivate = value;

  return (
    <Button
      id="isPrivate"
      width="120px"
      height="32px"
      variant="lightgray"
      style={{ gap: 12, justifyContent: 'flex-start' }}
      onClick={() => setFieldValue('isPrivate', !isPrivate)}
    >
      <Icon as={isPrivate ? IoMdLock : IoMdUnlock} fontSize={14} color="gray.3" />
      <Text color="gray.3" fontWeight={500} fontSize={12}>
        {isPrivate ? 'Private' : 'Public'}
      </Text>
    </Button>
  );
};

export default PrivacyButton;

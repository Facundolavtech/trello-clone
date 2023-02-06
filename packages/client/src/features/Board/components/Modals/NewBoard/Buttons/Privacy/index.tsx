import { Icon, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { IoMdLock, IoMdUnlock } from 'react-icons/io';
import { INewBoardValues } from '../..';
import Button from '../../../../../../../components/Button';

type Props = {
  newBoardValues: INewBoardValues;
  setNewBoardValues: (newBoardValues: INewBoardValues) => void;
};

const PrivacyButton: FC<Props> = ({ newBoardValues, setNewBoardValues }) => {
  return (
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
  );
};

export default PrivacyButton;

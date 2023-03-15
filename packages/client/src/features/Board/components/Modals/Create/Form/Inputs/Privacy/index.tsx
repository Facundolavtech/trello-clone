import { Icon, Text } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { IoMdLock, IoMdUnlock } from 'react-icons/io';
import Button from '../../../../../../../../components/Button';
import { ICreateBoardValues } from '../../../Context';

const Privacy = () => {
  const { values, setFieldValue } = useFormikContext<ICreateBoardValues>();

  const isPrivate = values.visibility === 'private';

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

export default Privacy;

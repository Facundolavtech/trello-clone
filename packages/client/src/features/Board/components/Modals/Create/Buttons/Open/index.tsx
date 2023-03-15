import { Icon, Text, MenuButton } from '@chakra-ui/react';
import { FC } from 'react';
import { AiFillPicture } from 'react-icons/ai';
import Button from '../../../../../../../components/Button';

type Props = {};

const OpenButton: FC<Props> = () => {
  return (
    <MenuButton type="button">
      <Button as="div" width="120px" height="32px" variant="lightgray" style={{ gap: 12, justifyContent: 'flex-start' }}>
        <Icon as={AiFillPicture} fontSize={14} color="gray.3" />
        <Text color="gray.3" fontWeight={500} fontSize={12}>
          Cover
        </Text>
      </Button>
    </MenuButton>
  );
};

export default OpenButton;

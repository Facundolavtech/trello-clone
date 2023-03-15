import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import Button from 'components/Button';

type Props = {
  onClick: () => void;
};

const RemoveMemberButton: FC<Props> = ({ onClick }) => {
  return (
    <Button width="63px" height="24px" variant="outline" style={{ border: '1px solid #EB5757' }} onClick={onClick}>
      <Text fontWeight={500} fontSize={10} color="#EB5757">
        Remove
      </Text>
    </Button>
  );
};

export default RemoveMemberButton;

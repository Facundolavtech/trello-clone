import { FC } from 'react';
import Button from 'components/Button';
import { Text } from '@chakra-ui/react';
import { FontFamily } from 'theme/constants';

type Props = {
  onClick: () => void;
  isLoading: boolean;
};

const SubmitButton: FC<Props> = ({ onClick, isLoading }) => {
  return (
    <Button loading={isLoading} disabled={isLoading} width="49px" height="23px" variant="submit" type="submit" onClick={onClick}>
      <Text fontSize={10} fontFamily={FontFamily.NotoSans} fontWeight={500} color="white">
        Save
      </Text>
    </Button>
  );
};

export default SubmitButton;

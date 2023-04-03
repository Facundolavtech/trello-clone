import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import Button from 'components/Button';
import { FontFamily } from 'theme/constants';

type Props = {
  onSubmit: () => void;
  isLoading: boolean;
  disabled: boolean;
};

const SubmitButton: FC<Props> = ({ onSubmit, isLoading, disabled }) => {
  return (
    <Button onClick={onSubmit} type="submit" isLoading={isLoading} disabled={disabled} width="71px" height="23px" variant="primary">
      <Text color="white" fontSize={10} fontWeight={500} fontFamily={FontFamily.NotoSans}>
        Comment
      </Text>
    </Button>
  );
};

export default SubmitButton;

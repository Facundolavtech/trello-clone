import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import Button from 'components/Button';
import { FontFamily } from 'theme/constants';

type Props = {
  isLoading: boolean;
  disabled: boolean;
  onSubmit: () => void;
};

const SubmitButton: FC<Props> = ({ isLoading, disabled, onSubmit }) => {
  return (
    <Button loading={isLoading} disabled={disabled} width="full" height="32px" variant="submit" type="submit" onClick={onSubmit}>
      <Text fontSize={12} fontFamily={FontFamily.NotoSans} fontWeight={500} color="white">
        Save
      </Text>
    </Button>
  );
};

export default SubmitButton;

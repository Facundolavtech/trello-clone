import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import Button from '../../../../../../components/Button';
import { FontFamily } from '../../../../../../theme/constants';

type Props = {
  isLoading: boolean;
  onSubmit: (values: any) => void;
};

const SubmitButton: FC<Props> = ({ isLoading, onSubmit }) => {
  return (
    <Button loading={isLoading} disabled={isLoading} width="49px" height="23px" variant="submit" type="submit" onClick={onSubmit}>
      <Text fontSize={10} fontFamily={FontFamily.NotoSans} fontWeight={500} color="white">
        Save
      </Text>
    </Button>
  );
};

export default SubmitButton;

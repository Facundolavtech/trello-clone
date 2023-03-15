import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import { FontFamily } from 'theme/constants';
import Button from 'components/Button';

type Props = {
  content: string;
  loading: boolean;
  disabled: boolean;
};

const SubmitButton: FC<Props> = ({ content, loading = false, disabled = false }) => {
  return (
    <Button fontFamily={FontFamily.Poppins} type="submit" py={4} width="full" variant="primary" loading={loading} disabled={disabled}>
      <Text fontWeight={500} fontSize={16}>
        {content}
      </Text>
    </Button>
  );
};

export default SubmitButton;

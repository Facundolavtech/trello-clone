import { FC } from 'react';
import { Button, Text } from '@chakra-ui/react';

type Props = {
  content: string;
  loading: boolean;
  disabled: boolean;
};

const SubmitButton: FC<Props> = ({ content, loading = false, disabled = false }) => {
  return (
    <Button type="submit" py={6} px={8} variant="primary" isLoading={loading} disabled={disabled}>
      <Text fontWeight={500} fontSize={16}>
        {content}
      </Text>
    </Button>
  );
};

export default SubmitButton;

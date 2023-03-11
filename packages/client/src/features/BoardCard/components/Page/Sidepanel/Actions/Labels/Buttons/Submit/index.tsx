import { Text } from '@chakra-ui/react';
import Button from '../../../../../../../../../components/Button';
import { useLabelContext } from '../../Context';

const SubmitButton = () => {
  const { formik, createMutation } = useLabelContext();

  return (
    <Button onClick={formik.handleSubmit} disabled={createMutation.isLoading} loading={createMutation.isLoading} variant="primary" width="74px" height="30px">
      <Text fontSize={10} fontWeight={500} color="white">
        Add
      </Text>
    </Button>
  );
};

export default SubmitButton;

import { Input, VStack } from '@chakra-ui/react';
import FormErrorMessage from '../../../../../../../../../../../../components/FormErrorMessage';
import { useLabelContext } from '../../../../../Context';

const NameInput = () => {
  const { formik } = useLabelContext();

  return (
    <VStack width="full" spacing={1} alignItems="flex-start">
      <Input
        type="text"
        width="full"
        height="34px"
        pl="13px"
        _placeholder={{ fontWeight: 500, fontSize: 10, color: 'gray.4' }}
        placeholder="Label..."
        fontWeight={500}
        borderRadius="8px"
        border={0}
        fontSize={10}
        variant="unstyled"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      />
      {formik.errors.name && <FormErrorMessage>{formik.errors.name}</FormErrorMessage>}
    </VStack>
  );
};

export default NameInput;

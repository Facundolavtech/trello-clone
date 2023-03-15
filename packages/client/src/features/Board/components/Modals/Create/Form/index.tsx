import { Flex, HStack, VStack } from '@chakra-ui/react';
import CancelButton from '../Buttons/Cancel';
import Privacy from './Inputs/Privacy';
import SubmitButton from '../Buttons/Submit';
import Title from './Inputs/Title';
import Cover from './Inputs/Cover';
import { useFormikContext } from 'formik';
import { ICreateBoardValues } from '../Context';
import FormErrorMessage from '../../../../../../components/FormErrorMessage';

const Form = () => {
  const { errors } = useFormikContext<ICreateBoardValues>();

  return (
    <VStack width="full" alignItems="flex-start" spacing="21px">
      <VStack spacing="1px" alignItems="flex-start" width="full">
        <Title />
        {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
      </VStack>
      <VStack width="full" alignItems="flex-start" spacing="22px">
        <Flex width="full" justifyContent="space-between">
          <Cover />
          <Privacy />
        </Flex>
        <HStack width="full" justifyContent="flex-end" spacing="17px">
          <CancelButton />
          <SubmitButton />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Form;

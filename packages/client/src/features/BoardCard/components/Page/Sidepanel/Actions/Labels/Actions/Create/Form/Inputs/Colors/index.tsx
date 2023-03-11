import { Box, Icon, SimpleGrid, VStack } from '@chakra-ui/react';
import { MdCheck } from 'react-icons/md';
import FormErrorMessage from '../../../../../../../../../../../../components/FormErrorMessage';
import colors from '../../../../../colors';
import { useLabelContext } from '../../../../../Context';

const ColorsInput = () => {
  const { formik } = useLabelContext();

  return (
    <VStack width="full" alignItems="flex-start" spacing={1}>
      <SimpleGrid columns={4} rowGap="6px" columnGap="8px">
        {colors.map((c) => (
          <Box
            onClick={() => formik.setFieldValue('color', c)}
            _hover={{ cursor: 'pointer' }}
            key={c}
            width="50px"
            bg={c}
            borderRadius="4px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="27px"
          >
            {c === formik.values.color && <Icon as={MdCheck} fontSize={14} color="white" />}
          </Box>
        ))}
      </SimpleGrid>
      {formik.errors.color && <FormErrorMessage>{formik.errors.color}</FormErrorMessage>}
    </VStack>
  );
};

export default ColorsInput;

import { Input } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { ICreateBoardValues } from '../../../Context';

const Title = () => {
  const { values, handleChange } = useFormikContext<ICreateBoardValues>();

  return (
    <Input
      type="text"
      width="full"
      height="34px"
      borderWidth={1}
      borderColor="#E0E0E0"
      name="title"
      value={values.title}
      borderRadius="8px"
      onChange={handleChange}
      _placeholder={{ color: 'gray.4', fontWeight: 500, fontSize: 10 }}
      filter="drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1))"
      fontSize={10}
      py="10px"
      px="15px"
      placeholder="Add board title"
    />
  );
};

export default Title;

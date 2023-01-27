import { FC } from 'react';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { MdError } from 'react-icons/md';
import { FormikErrors } from 'formik';

type Props = {
  errors: FormikErrors<object>;
};

const ErrorMessage: FC<Props> = ({ errors }) => {
  return (
    <List padding={6} bg="gray.100" borderRadius={6} spacing={6}>
      {Object.values(errors).map((value, index) => (
        <ListItem color="red.400" fontSize={14} lineHeight="1rem" fontWeight={400} key={index} display="flex" alignItems="flex-start">
          <ListIcon as={MdError} color="red.400" width={4} height={4} mr={4} />
          {value}
        </ListItem>
      ))}
    </List>
  );
};

export default ErrorMessage;

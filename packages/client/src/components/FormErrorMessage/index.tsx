import { CSSProperties, FC, ReactNode } from 'react';
import { Text } from '@chakra-ui/react';

type Props = {
  styles?: CSSProperties;
  children: ReactNode;
};

const FormErrorMessage: FC<Props> = ({ styles, children }) => {
  return (
    <Text fontSize={10} color="error" fontWeight={500} style={styles}>
      {children}
    </Text>
  );
};

export default FormErrorMessage;

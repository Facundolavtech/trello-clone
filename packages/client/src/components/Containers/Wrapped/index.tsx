import { CSSProperties, FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  styles?: CSSProperties;
  [x: string]: any;
};

const WrappedContainer: FC<Props> = ({ children, styles, rest }) => {
  return (
    <Box style={styles} width="90%" maxWidth="1280px" margin="auto" {...rest}>
      {children}
    </Box>
  );
};

export default WrappedContainer;

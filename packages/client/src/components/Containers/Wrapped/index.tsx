import { CSSProperties, FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  styles?: CSSProperties;
};

const WrappedContainer: FC<Props> = ({ children, styles }) => {
  return (
    <Box style={styles} width="90%" maxWidth="1280px" margin="auto">
      {children}
    </Box>
  );
};

export default WrappedContainer;

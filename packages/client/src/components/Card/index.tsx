import { CSSProperties, FC, ReactNode } from 'react';
import { As, Card as ChakraCard } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  className?: string;
  variant: 'bordered' | 'bordered-shadow' | 'board-card';
  width?: number;
  height?: number;
  styles?: CSSProperties;
  as?: As;
  onClick?: (event: any) => void;
};

const Card: FC<Props> = ({ children, variant, width, height, styles, as, onClick, ...rest }) => {
  return (
    <ChakraCard onClick={onClick} as={as} variant={variant} style={styles} width={width} height={height} display="flex" {...rest}>
      {children}
    </ChakraCard>
  );
};

export default Card;

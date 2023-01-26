import { FC, ReactNode } from 'react';
import { Card as ChakraCard } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  className?: string;
  variant: 'bordered' | 'bordered-shadow' | 'board-card';
  width: number;
  height: number;
  display?: 'flex' | 'none' | 'block';
};

const Card: FC<Props> = ({ children, variant, width, height, display = 'flex' }) => {
  return (
    <ChakraCard variant={variant} width={width} height={height} display={display}>
      {children}
    </ChakraCard>
  );
};

export default Card;

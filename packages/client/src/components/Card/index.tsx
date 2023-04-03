import { FC } from 'react';
import { CardProps, Card as ChakraCard } from '@chakra-ui/react';

type Props = CardProps;

const Card: FC<Props> = (props) => {
  return (
    <ChakraCard display="flex" {...props}>
      {props.children}
    </ChakraCard>
  );
};

export default Card;

import { FC } from 'react';
import { MenuItem as ChakraMenuItem, MenuItemProps } from '@chakra-ui/react';

type Props = MenuItemProps;

const MenuItem: FC<Props> = ({ children, ...rest }) => {
  return (
    <ChakraMenuItem iconSpacing={4} display="flex" alignItems="center" gap={4} _hover={{ cursor: 'pointer' }} py={2} {...rest}>
      {children}
    </ChakraMenuItem>
  );
};

export default MenuItem;

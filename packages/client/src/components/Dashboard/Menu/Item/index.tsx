import { CSSProperties, FC } from 'react';
import { Icon, MenuItem as ChakraMenuItem } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

type Props = {
  icon: IconType;
  content: string;
  color?: string;
  bg?: string;
  onClick?: () => void;
  styles?: CSSProperties;
};

const MenuItem: FC<Props> = ({ icon, content, color, bg, onClick, styles }) => {
  return (
    <ChakraMenuItem
      iconSpacing={4}
      display="flex"
      alignItems="center"
      style={styles}
      bg={bg}
      gap={4}
      _hover={{ cursor: 'pointer' }}
      color={color}
      py={2}
      onClick={onClick}
    >
      <Icon as={icon} width={4} height={4} />
      {content}
    </ChakraMenuItem>
  );
};

export default MenuItem;

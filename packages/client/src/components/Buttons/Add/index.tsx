import { FC, CSSProperties } from 'react';
import { Icon, Text } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import Button, { ButtonVariant } from '../../Button';

type Props = {
  onClick: (e: any) => any;
  width?: string | number;
  height?: string | number;
  variant?: ButtonVariant;
  styles?: CSSProperties;
  iconStyles?: CSSProperties;
  label?: string;
  labelStyles?: CSSProperties;
};

const AddButton: FC<Props> = ({ onClick, width = '32px', height = '32px', variant = 'primary', styles, iconStyles, label, labelStyles }) => {
  return (
    <Button variant={variant} width={width} height={height} onClick={onClick} style={styles}>
      <Icon as={AiOutlinePlus} color="white" style={iconStyles} />
      {label && (
        <Text color="white" style={labelStyles}>
          {label}
        </Text>
      )}
    </Button>
  );
};

export default AddButton;

import { FC, CSSProperties } from 'react';
import { Icon, Text } from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';
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

const EditButton: FC<Props> = ({ onClick, width = '62px', height = '24px', variant = 'outline', styles, iconStyles, label, labelStyles }) => {
  return (
    <Button width={width} height={height} variant={variant} style={styles} onClick={onClick}>
      <Icon as={MdEdit} fontSize={9} color="gray.3" style={iconStyles} />
      {label && (
        <Text color="gray.3" fontWeight={500} fontSize={10} style={labelStyles}>
          {label}
        </Text>
      )}
    </Button>
  );
};

export default EditButton;

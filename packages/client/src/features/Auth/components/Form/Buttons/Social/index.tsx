import { FC } from 'react';
import { Box, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import Button from '../../../../../../components/Button';
import { FontFamily } from '../../../../../../theme/constants';

type Props = {
  icon: IconType;
  bg: string;
  content: string;
  onClick?: () => any;
  loading?: boolean;
};

const SocialProviderButton: FC<Props> = ({ icon, bg, content, onClick, loading = false }) => {
  return (
    <Button
      width="full"
      fontFamily={FontFamily.Poppins}
      variant="primary"
      py={0.5}
      px={0.5}
      style={{ backgroundColor: bg, borderRadius: 8 }}
      onClick={onClick}
      loading={loading}
    >
      <Box width="45px" height="45px" borderRadius={6} bg="#fff" display="flex" alignItems="center" justifyContent="center">
        <Icon as={icon} width={21} height={21} />
      </Box>
      <Text mx="auto" fontWeight={400} color="white" fontSize={14} whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden" fontFamily={FontFamily.Poppins}>
        {content}
      </Text>
    </Button>
  );
};

export default SocialProviderButton;

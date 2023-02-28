import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import Button from '../../../../../../../components/Button';

type Props = {
  onClick: (params: any) => Promise<void>;
};

const DownloadButton: FC<Props> = ({ onClick }) => {
  return (
    <Button variant="outline" width="62px" height="24px" onClick={onClick}>
      <Text fontSize={10} fontWeight={500} color="gray.3">
        Download
      </Text>
    </Button>
  );
};

export default DownloadButton;

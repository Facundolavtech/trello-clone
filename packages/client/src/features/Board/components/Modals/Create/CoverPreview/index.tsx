import { useFormikContext } from 'formik';
import { ICreateBoardValues } from 'features/Board/components/Modals/Create/Context';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

const CoverPreview = () => {
  const { values } = useFormikContext<ICreateBoardValues>();

  return (
    <Box width="full" height="78px" position="relative" mb="10px" borderRadius="8px">
      <Image layout="fill" objectFit="cover" style={{ borderRadius: '8px' }} src={values.cover.src} alt="Board cover preview" />
    </Box>
  );
};

export default CoverPreview;

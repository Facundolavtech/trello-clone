import { Image } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { ICreateBoardValues } from 'features/Board/components/Modals/Create/Context';

const CoverPreview = () => {
  const { values } = useFormikContext<ICreateBoardValues>();

  return <Image mb="10px" width="full" height="78px" borderRadius="8px" src={values.cover.src} alt="Board cover preview" objectFit="cover" />;
};

export default CoverPreview;

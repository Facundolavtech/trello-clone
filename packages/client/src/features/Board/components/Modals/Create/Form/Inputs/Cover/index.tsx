import { useFormikContext } from 'formik';
import Covers from 'components/Covers';
import OpenButton from 'features/Board/components/Modals/Create/Buttons/Open';
import { ICreateBoardValues } from 'features/Board/components/Modals/Create/Context';

const Cover = () => {
  const { setFieldValue } = useFormikContext<ICreateBoardValues>();

  return <Covers button={<OpenButton />} handleChange={(c) => setFieldValue('cover', c)} />;
};

export default Cover;

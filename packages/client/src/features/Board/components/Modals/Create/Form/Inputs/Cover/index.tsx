import { useFormikContext } from 'formik';
import Covers from '../../../../../../../../components/Covers';
import OpenButton from '../../../Buttons/Open';
import { ICreateBoardValues } from '../../../Context';

const Cover = () => {
  const { setFieldValue } = useFormikContext<ICreateBoardValues>();

  return <Covers button={<OpenButton />} handleChange={(c) => setFieldValue('cover', c)} />;
};

export default Cover;

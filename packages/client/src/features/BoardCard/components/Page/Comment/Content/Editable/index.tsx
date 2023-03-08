import { FC } from 'react';
import { EditableInput, EditablePreview, Editable as ChakraEditable } from '@chakra-ui/react';
import { FontFamily } from '../../../../../../../theme/constants';
import { useCommentContext } from '../../Context';

type Props = {
  content: string;
};

const Editable: FC<Props> = ({ content }) => {
  const { handleEditCancel, handleChangeDraft } = useCommentContext();

  return (
    <ChakraEditable
      width="full"
      onCancel={handleEditCancel}
      startWithEditView
      textAlign="left"
      defaultValue={content}
      fontSize={14}
      color="gray.2"
      fontFamily={FontFamily.NotoSans}
    >
      <EditablePreview width="full" />
      <EditableInput onChange={(e) => handleChangeDraft(e.target.value)} />
    </ChakraEditable>
  );
};

export default Editable;

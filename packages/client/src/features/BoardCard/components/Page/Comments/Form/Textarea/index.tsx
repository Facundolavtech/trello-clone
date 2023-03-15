import { FC, ChangeEvent } from 'react';
import { Textarea } from '@chakra-ui/react';
import { FontFamily } from 'theme/constants';

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const CommentTextarea: FC<Props> = ({ value, onChange }) => {
  return (
    <Textarea
      variant="unstyled"
      fontSize={12}
      value={value}
      name="content"
      minHeight="auto"
      onChange={onChange}
      resize="none"
      placeholder="Write a comment..."
      _placeholder={{ fontFamily: FontFamily.NotoSans, fontWeight: 500, fontSize: { base: 10, md: 14 }, color: 'gray.4' }}
    />
  );
};

export default CommentTextarea;

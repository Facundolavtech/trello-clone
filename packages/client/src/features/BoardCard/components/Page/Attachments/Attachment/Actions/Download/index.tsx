import { FC } from 'react';
import { downloadAttachment } from 'features/BoardCard/services/card-attachment.service';
import DownloadButton from 'features/BoardCard/components/Page/Attachments/Attachment/Buttons/Download';

type Props = {
  url: string;
  name: string;
};

const Download: FC<Props> = ({ url, name }) => {
  return <DownloadButton onClick={() => downloadAttachment(url, name)} />;
};

export default Download;

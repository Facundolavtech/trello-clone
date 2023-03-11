import { FC } from 'react';
import { downloadAttachment } from '../../../../../../services/card-attachment.service';
import DownloadButton from '../../Buttons/Download';

type Props = {
  url: string;
  name: string;
};

const Download: FC<Props> = ({ url, name }) => {
  return <DownloadButton onClick={() => downloadAttachment(url, name)} />;
};

export default Download;

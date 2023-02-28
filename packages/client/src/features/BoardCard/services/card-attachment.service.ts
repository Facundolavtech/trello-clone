import axios from 'axios';
import fileDownload from 'js-file-download';

export async function download(url: string, filename: string) {
  const response = await axios.get(url, {
    responseType: 'blob',
  });
  fileDownload(response.data, filename);
}

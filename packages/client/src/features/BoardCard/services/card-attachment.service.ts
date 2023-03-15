import axios, { AxiosResponse } from 'axios';
import fileDownload from 'js-file-download';
import http from 'config/http';
import { IBoardCardAttachment } from 'models/board-card.model';

export interface IUploadAttachmentParams {
  boardId: string;
  cardId: string;
  file: File;
}

export interface IDeleteAttachmentParams {
  boardId: string;
  cardId: string;
  attachmentId: string;
}

export async function downloadAttachment(url: string, filename: string): Promise<void> {
  const response = await axios.get(url, {
    responseType: 'blob',
  });

  fileDownload(response.data, filename);
}

export async function uploadAttachment(params: IUploadAttachmentParams): Promise<IBoardCardAttachment> {
  let formData = new FormData();
  formData.append('file', params.file, params.file.name);

  const response: AxiosResponse<IBoardCardAttachment> = await http.api.post(`boards/${params.boardId}/cards/${params.cardId}/attachments/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}

export async function deleteAttachment(params: IDeleteAttachmentParams): Promise<IBoardCardAttachment> {
  const response: AxiosResponse<IBoardCardAttachment> = await http.api.delete(
    `boards/${params.boardId}/cards/${params.cardId}/attachments/delete/${params.attachmentId}`
  );

  return response.data;
}

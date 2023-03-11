import { FC, ReactNode, createContext, useState, useContext } from 'react';

export interface ICommentState {
  id: string;
  draft: string | null;
  isEditing: boolean;
}

interface ICommentContext {
  state: ICommentState | null;
  handleEdit: (content: string) => void | null;
  handleEditSuccess: () => void | null;
  handleEditCancel: () => void | null;
  handleChangeDraft: (content: string) => void | null;
}

const CommentContext = createContext<ICommentContext | null>(null);

type Props = {
  children: ReactNode;
  id: string;
};

const CommentContextProvider: FC<Props> = ({ children, id }) => {
  const [commentState, setCommentState] = useState<ICommentState>({
    id,
    draft: null,
    isEditing: false,
  });

  const handleEdit = (content: string): void => {
    setCommentState({ ...commentState, id: commentState.id, draft: content, isEditing: true });
  };

  const handleEditSuccess = (): void => {
    setCommentState({ ...commentState, draft: null, isEditing: false });
  };

  const handleEditCancel = handleEditSuccess;

  const handleChangeDraft = (content: string) => {
    setCommentState({ ...commentState, draft: content });
  };

  return (
    <CommentContext.Provider value={{ state: commentState, handleEdit, handleEditSuccess, handleEditCancel, handleChangeDraft }}>{children}</CommentContext.Provider>
  );
};

export default CommentContextProvider;

export const useCommentContext = () => useContext(CommentContext) as ICommentContext;

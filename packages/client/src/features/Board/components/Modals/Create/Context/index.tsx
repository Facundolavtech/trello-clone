import { useModal } from '@ebay/nice-modal-react';
import { Form, Formik } from 'formik';
import { FC, ReactNode, createContext, useContext, useEffect } from 'react';
import coversData from 'components/Covers/data';
import { BoardVisibility } from 'models/board.model';
import useCreateBoard from 'features/Board/hooks/useCreateBoard';
import CreateBoardSchema from 'features/Board/components/Modals/Create/validations';

export interface ICreateBoardValues {
  title: string;
  cover: ICreateBoardValuesCover;
  visibility: BoardVisibility;
}

interface ICreateBoardValuesCover {
  name: string;
  src: string;
}

interface ICreateBoardContext {
  onClose: () => void;
  isLoading: boolean;
}

type Props = {
  children: ReactNode;
};

const CreateBoardContext = createContext<ICreateBoardContext | null>(null);

const getRandomCover = () => {
  return coversData[Math.floor(Math.random() * coversData.length)];
};

const CreateBoardContextProvider: FC<Props> = ({ children }) => {
  const modal = useModal();

  const createBoardMutation = useCreateBoard();

  useEffect(() => {
    if (createBoardMutation.status === 'success') modal.hide();
  }, [createBoardMutation.status]);

  const initialValues: ICreateBoardValues = {
    cover: getRandomCover(),
    title: '',
    visibility: 'public',
  };

  const handleSubmit = (values: ICreateBoardValues) => {
    createBoardMutation.mutate({ ...values, cover: values.cover.src });
  };

  return (
    <CreateBoardContext.Provider value={{ onClose: () => modal.hide(), isLoading: createBoardMutation.isLoading }}>
      <Formik initialValues={initialValues} validationSchema={CreateBoardSchema} onSubmit={handleSubmit}>
        {({ handleSubmit }) => <Form onSubmit={handleSubmit}>{children}</Form>}
      </Formik>
    </CreateBoardContext.Provider>
  );
};

export default CreateBoardContextProvider;

export const useCreateBoardContext = () => useContext(CreateBoardContext) as ICreateBoardContext;

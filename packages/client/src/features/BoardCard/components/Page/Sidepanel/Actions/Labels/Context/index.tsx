import { UseMutationResult } from '@tanstack/react-query';
import { createContext, FC, ReactNode, useContext } from 'react';
import { IBoardCardLabel } from 'models/board-card.model';
import useCreateLabelForm from 'features/BoardCard/components/Page/Sidepanel/Actions/Labels/Actions/Create/hooks/useCreateLabelForm';

interface ILabelContext {
  formik: any;
  createMutation: UseMutationResult<IBoardCardLabel, unknown, any, unknown>;
}

const LabelContext = createContext<ILabelContext | null>(null);

type Props = {
  children: ReactNode;
};

const LabelContextProvider: FC<Props> = ({ children }) => {
  const { formik, createMutation } = useCreateLabelForm();

  return <LabelContext.Provider value={{ formik, createMutation }}>{children}</LabelContext.Provider>;
};

export default LabelContextProvider;

export const useLabelContext = () => useContext(LabelContext) as ILabelContext;

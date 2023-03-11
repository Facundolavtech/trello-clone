import { createContext, ReactNode, FC, useContext } from 'react';

type Props = {
  children: ReactNode;
  id: string;
};

interface ICardContext {
  id: string;
}

const CardContext = createContext<ICardContext | null>(null);

const CardContextProvider: FC<Props> = ({ children, id }) => {
  return <CardContext.Provider value={{ id }}>{children}</CardContext.Provider>;
};

export default CardContextProvider;

export const useCardContext = () => useContext(CardContext) as ICardContext;

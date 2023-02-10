import { useContext } from 'react';
import { createContext } from 'react';
import { useDisclosure } from '@chakra-ui/react';

const BoardContext = createContext<any>({});

const BoardContextWrapper = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return <BoardContext.Provider value={{ isOpen, onClose, onOpen }}>{children}</BoardContext.Provider>;
};

export default BoardContextWrapper;

export const useBoardContext = () => useContext(BoardContext);

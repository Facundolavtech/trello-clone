import { FC, ReactNode } from 'react';
import { Menu as ChakraMenu, MenuList } from '@chakra-ui/react';
import Grid from './Grid';
import data from './data';
import Cover from './Cover';

type Props = {
  button: ReactNode;
  handleChange: (...args: any) => void;
};

const Covers: FC<Props> = ({ button, handleChange }) => {
  return (
    <ChakraMenu>
      {button}
      <MenuList
        padding="12px"
        width="234px"
        height="240px"
        maxWidth="full"
        borderWidth={1}
        borderColor="#E0E0E0"
        borderRadius="12px"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)"
      >
        <Grid>
          {data.map((c) => (
            <Cover onClick={() => handleChange(c)} id="cover" src={c.src} key={c.name} />
          ))}
        </Grid>
      </MenuList>
    </ChakraMenu>
  );
};

export default Covers;
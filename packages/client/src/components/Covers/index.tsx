import { FC, ReactNode } from 'react';
import { Menu, MenuItem, MenuList } from '@chakra-ui/react';
import Grid from 'components/Covers/Grid';
import data from 'components/Covers/data';
import Image from 'next/image';

type Props = {
  button: ReactNode;
  handleChange: (c: { name: string; src: string }) => void;
};

const Covers: FC<Props> = ({ button, handleChange }) => {
  return (
    <Menu>
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
            <MenuItem _hover={{ cursor: 'pointer' }} position="relative" height="48px" onClick={() => handleChange(c)} id="cover">
              <Image layout="fill" style={{ borderRadius: '8px' }} objectFit="cover" quality={70} src={c.src} alt={c.name} />
            </MenuItem>
          ))}
        </Grid>
      </MenuList>
    </Menu>
  );
};

export default Covers;

import { HStack, Menu as ChakraMenu, MenuList as ChakraMenuList } from '@chakra-ui/react';
import Form from './Actions/Create/Form';
import Body from './Body';
import OpenButton from './Buttons/Open';
import SubmitButton from './Buttons/Submit';
import Container from './Container';
import LabelContextProvider from './Context';
import Header from './Header';
import Labels from './Labels';

const LabelMenu = () => {
  return (
    <ChakraMenu isLazy>
      <OpenButton />
      <ChakraMenuList px="12px" py="9px" width="245px" boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)" borderRadius="12px" borderWidth={1} borderColor="gray.5">
        <Container>
          <Header />
          <Body>
            <LabelContextProvider>
              <Form />
              <Labels />
              <HStack width="full" justifyContent="center">
                <SubmitButton />
              </HStack>
            </LabelContextProvider>
          </Body>
        </Container>
      </ChakraMenuList>
    </ChakraMenu>
  );
};

export default LabelMenu;

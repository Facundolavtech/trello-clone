import { HStack, Menu as ChakraMenu, MenuList as ChakraMenuList } from '@chakra-ui/react';
import Form from 'features/BoardCard/components/Page/Sidepanel/Actions/Labels/Actions/Create/Form';
import Body from 'features/BoardCard/components/Page/Sidepanel/Actions/Labels/Body';
import OpenButton from 'features/BoardCard/components/Page/Sidepanel/Actions/Labels/Buttons/Open';
import SubmitButton from 'features/BoardCard/components/Page/Sidepanel/Actions/Labels/Buttons/Submit';
import Container from 'features/BoardCard/components/Page/Sidepanel/Actions/Labels/Container';
import LabelContextProvider from 'features/BoardCard/components/Page/Sidepanel/Actions/Labels/Context';
import Header from 'features/BoardCard/components/Page/Sidepanel/Actions/Labels/Header';
import Labels from 'features/BoardCard/components/Page/Sidepanel/Actions/Labels/Labels';

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

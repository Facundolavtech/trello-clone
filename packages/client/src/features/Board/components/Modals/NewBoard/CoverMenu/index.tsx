import { FC } from 'react';
import { Menu as ChakraMenu, MenuButton as ChakraMenuButton, Button, Text, MenuList, Wrap, Icon, WrapItem } from '@chakra-ui/react';
import { AiFillPicture } from 'react-icons/ai';
import boardCovers from '../../../../helpers/covers';

type Props = {
  setFieldValue: (key: string, value: any) => void;
};

const CoverMenu: FC<Props> = ({ setFieldValue }) => {
  return (
    <ChakraMenu>
      {({ onClose }) => (
        <>
          <ChakraMenuButton>
            <Button as="div" width="120px" height="32px" variant="lightgray" style={{ gap: 12, justifyContent: 'flex-start' }}>
              <Icon as={AiFillPicture} fontSize={14} color="gray.3" />
              <Text color="gray.3" fontWeight={500} fontSize={12}>
                Cover
              </Text>
            </Button>
          </ChakraMenuButton>
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
            <Wrap
              spacing={4}
              width="full"
              height="full"
              overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: 0,
                },
                '&::-webkit-scrollbar-track': {
                  width: 0,
                },
              }}
            >
              {boardCovers.map((cover) => (
                <WrapItem
                  _hover={{ cursor: 'pointer' }}
                  key={cover.name}
                  id="cover"
                  onClick={() => {
                    setFieldValue('cover', cover), onClose();
                  }}
                  width="100%"
                  height="48px"
                  borderRadius="8px"
                  backgroundImage={cover.src}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  backgroundRepeat="no-repeat"
                />
              ))}
            </Wrap>
          </MenuList>
        </>
      )}
    </ChakraMenu>
  );
};

export default CoverMenu;

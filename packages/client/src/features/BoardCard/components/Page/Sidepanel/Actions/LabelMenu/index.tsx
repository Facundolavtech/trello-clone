import { Box, Heading, Input, Menu as ChakraMenu, MenuList as ChakraMenuList, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FontFamily } from '../../../../../../../theme/constants';
import OpenButton from './Buttons/Open';
import colors from './colors';

const LabelMenu = () => {
  return (
    <ChakraMenu>
      <OpenButton />
      <ChakraMenuList px="12px" py="9px" width="245px" boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)" borderRadius="12px" borderWidth={1} borderColor="gray.5">
        <VStack spacing="13.5px" alignItems="flex-start">
          <VStack alignItems="flex-start" spacing={1}>
            <Heading color="gray.2" fontSize={12} fontWeight={600}>
              Label
            </Heading>
            <Text fontFamily={FontFamily.NotoSans} fontSize={12} color="gray.3">
              Select a name and a color
            </Text>
          </VStack>
          <VStack alignItems="flex-start" spacing="15px" width="full">
            <Input
              type="text"
              width="full"
              height="34px"
              pl="13px"
              _placeholder={{ fontWeight: 500, fontSize: 10, color: 'gray.4' }}
              placeholder="Label..."
              fontWeight={500}
              borderRadius="8px"
              border={0}
              fontSize={10}
              variant="unstyled"
              boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
            />
            <SimpleGrid columns={4} rowGap="6px" columnGap="8px">
              {colors.map((c) => (
                <Box _hover={{ cursor: 'pointer' }} key={c} width="50px" bg={c} borderRadius="4px" height="27px" />
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </ChakraMenuList>
    </ChakraMenu>
  );
};

export default LabelMenu;

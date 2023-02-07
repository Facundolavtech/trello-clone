import { FC, ReactNode } from 'react';
import { Box, Center, Stack, Text, VStack } from '@chakra-ui/react';
import Logo from '../../../../components/Logo';
import AuthTitle from '../Title';
import SwitchFormButton from '../Form/Buttons/SwitchForm';
import { FontFamily } from '../../../../theme/constants';
import SocialProviderButton from '../Form/Buttons/Social';
import { FcGoogle } from 'react-icons/fc';
import useGoogleToken from '../../hooks/useGoogleToken/useGoogleToken';
import useAuthMethods from '../../hooks/useAuthMethods/useAuthMethods';

type Props = {
  formType: 'login' | 'register';
  form: ReactNode;
};

const AuthCard: FC<Props> = ({ formType = 'login', form }) => {
  const { getTokenAndLogin } = useGoogleToken();
  const { loginSocialIsMutating } = useAuthMethods();

  return (
    <Box padding={8} width="full" maxWidth={400} bg="white" borderRadius={8}>
      <VStack spacing={8} width="full" alignItems="flex-start">
        <Center width="full">
          <Logo width="64px" height="64px" withTitle={false} />
        </Center>
        <AuthTitle title={formType === 'login' ? 'Login' : 'Register'} />
        <VStack justifyContent="flex-start" width="full" spacing={4}>
          {form}
          <VStack width="full" spacing={8}>
            <Stack width="full">
              <SwitchFormButton formType={formType} />
            </Stack>
            <Center width="full">
              <Text color="gray.4" fontSize={16} fontWeight={400} fontFamily={FontFamily.Poppins}>
                or
              </Text>
            </Center>
            <Stack width="full">
              <SocialProviderButton
                bg="brands.google"
                icon={FcGoogle}
                onClick={() => getTokenAndLogin()}
                loading={loginSocialIsMutating}
                disabled={loginSocialIsMutating}
                content={formType === 'login' ? 'Continue with Google' : 'Register with Google'}
              />
            </Stack>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default AuthCard;

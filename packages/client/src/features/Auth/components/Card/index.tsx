import { FC, ReactNode } from 'react';
import { Box, Center, Stack, Text, VStack } from '@chakra-ui/react';
import Logo from 'components/Logo';
import AuthTitle from 'features/Auth/components/Title';
import SwitchFormButton from 'features/Auth/components/Form/Buttons/SwitchForm';
import { FontFamily } from 'theme/constants';
import SocialProviderButton from 'features/Auth/components/Form/Buttons/Social';
import { FcGoogle } from 'react-icons/fc';
import useGoogleToken from 'features/Auth/hooks/useGoogleToken';
import useAuthMethods from 'features/Auth/hooks/useAuthMethods';

type Props = {
  formType: 'login' | 'register';
  form: ReactNode;
};

const AuthCard: FC<Props> = ({ formType = 'login', form }) => {
  const googleSignIn = useGoogleToken();
  const { loginSocialIsMutating } = useAuthMethods();

  return (
    <Box padding={8} width="full" maxWidth={400} bg="white" borderRadius={8}>
      <VStack spacing={8} width="full" alignItems="flex-start">
        <Center width="full">
          <Logo width="64px" height="64px" />
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
                onClick={googleSignIn}
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

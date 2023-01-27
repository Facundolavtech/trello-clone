import { Center, Stack, Text, VStack } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { LoginSchema } from '../../../validations';
import ErrorMessage from '../ErrorMessage';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import SubmitButton from '../Buttons/Submit';
import AuthInput from '../Input';
import useAuthMethods from '../../../hooks/useAuthMethods';
import { useState } from 'react';
import SocialProviderButton from '../Buttons/Social';
import SwitchFormButton from '../Buttons/SwitchForm';
import useGoogleToken from '../../../hooks/useGoogleToken';
import { FontFamily } from '../../../../../theme/constants';

export interface ILoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { loginWithLocalProvider } = useAuthMethods();
  const initialValues: ILoginFormValues = { email: '', password: '' };
  const [status] = useState('idle');
  const { getTokenAndLogin } = useGoogleToken();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          loginWithLocalProvider(values);
          values.password = '';
          actions.setSubmitting(false);
        }}
        validationSchema={LoginSchema}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Stack spacing={6}>
              {Object.keys(errors).length > 0 && <ErrorMessage errors={errors} />}
              <AuthInput
                icon={MdEmail}
                placeholder="Enter your email address"
                name="email"
                type="email"
                value={values.email}
                disabled={status === 'loading'}
                handleChange={handleChange}
              />
              <AuthInput
                icon={RiLockPasswordFill}
                placeholder="Enter your password"
                name="password"
                type="password"
                value={values.password}
                disabled={status === 'loading'}
                handleChange={handleChange}
              />
              <SubmitButton content="Enter" disabled={status === 'loading'} loading={status === 'loading'} />
            </Stack>
          </Form>
        )}
      </Formik>
      <VStack width="full" spacing={8}>
        <Stack width="full">
          <SwitchFormButton formType="login" />
        </Stack>
        <Center width="full">
          <Text color="gray.4" fontSize={16} fontWeight={400} fontFamily={FontFamily.Poppins}>
            or
          </Text>
        </Center>
        <Stack width="full">
          <SocialProviderButton bg="brands.google" icon={FcGoogle} onClick={getTokenAndLogin} loading={status === 'loading'} content="Continue with Google" />
        </Stack>
      </VStack>
    </>
  );
};

export default LoginForm;

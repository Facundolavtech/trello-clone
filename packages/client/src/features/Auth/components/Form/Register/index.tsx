import { Center, Divider, Flex, Stack, Text, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoMdPerson } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import useAuthMethods from '../../../hooks/useAuthMethods';
import { RegisterSchema } from '../../../validations';
import ErrorMessage from '../ErrorMessage';
import AuthInput from '../Input';
import SubmitButton from '../Buttons/Submit';
import { useState } from 'react';
import SocialProviderButton from '../Buttons/Social';
import SwitchFormButton from '../Buttons/SwitchForm';
import useGoogleToken from '../../../hooks/useGoogleToken';
import { FontFamily } from '../../../../../theme/constants';

export interface IRegisterFormValues {
  name: string;
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const RegisterForm = () => {
  const { registerWithLocalProvider } = useAuthMethods();
  const initialValues: IRegisterFormValues = { name: '', username: '', email: '', password: '', passwordConfirmation: '' };
  const [status] = useState('idle');
  const { getTokenAndLogin } = useGoogleToken();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          registerWithLocalProvider(values);
          values.password = '';
          values.passwordConfirmation = '';
          actions.setSubmitting(false);
        }}
        validationSchema={RegisterSchema}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Stack spacing={6}>
              {Object.keys(errors).length > 0 && <ErrorMessage errors={errors} />}
              <AuthInput
                icon={IoMdPerson}
                placeholder="Enter your name"
                name="name"
                type="text"
                value={values.name}
                disabled={status === 'loading'}
                handleChange={handleChange}
              />
              <AuthInput
                icon={IoMdPerson}
                placeholder="Enter your username"
                name="username"
                type="text"
                value={values.username}
                disabled={status === 'loading'}
                handleChange={handleChange}
              />
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
              <AuthInput
                icon={RiLockPasswordFill}
                placeholder="Retype your password"
                name="passwordConfirmation"
                type="password"
                value={values.passwordConfirmation}
                disabled={status === 'loading'}
                handleChange={handleChange}
              />
              <SubmitButton content="Register" disabled={status === 'loading'} loading={status === 'loading'} />
            </Stack>
          </Form>
        )}
      </Formik>
      <VStack width="full" spacing={8}>
        <Stack width="full">
          <SwitchFormButton formType="register" />
        </Stack>
        <Center width="full">
          <Text color="gray.4" fontSize={16} fontWeight={400} fontFamily={FontFamily.Poppins}>
            or
          </Text>
        </Center>
        <Stack width="full">
          <SocialProviderButton bg="brands.google" icon={FcGoogle} onClick={getTokenAndLogin} loading={status === 'loading'} content="Register with Google" />
        </Stack>
      </VStack>
    </>
  );
};

export default RegisterForm;

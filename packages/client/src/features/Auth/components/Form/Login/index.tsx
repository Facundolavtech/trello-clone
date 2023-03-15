import { Stack } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { LoginSchema } from 'features/Auth/validations';
import ErrorMessage from 'features/Auth/components/Form/ErrorMessage';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import SubmitButton from 'features/Auth/components/Form/Buttons/Submit';
import AuthInput from 'features/Auth/components/Form/Input';
import useAuthMethods from 'features/Auth/hooks/useAuthMethods';

export interface ILoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { loginLocalMutation, loginSocialIsMutating } = useAuthMethods();
  const initialValues: ILoginFormValues = { email: '', password: '' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        loginLocalMutation.mutate({ ...values });
        values.password = '';
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
              disabled={loginLocalMutation.isLoading || loginSocialIsMutating}
              handleChange={handleChange}
            />
            <AuthInput
              icon={RiLockPasswordFill}
              placeholder="Enter your password"
              name="password"
              type="password"
              value={values.password}
              disabled={loginLocalMutation.isLoading || loginSocialIsMutating}
              handleChange={handleChange}
            />
            <SubmitButton content="Enter" disabled={loginLocalMutation.isLoading || loginSocialIsMutating} loading={loginLocalMutation.isLoading} />
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

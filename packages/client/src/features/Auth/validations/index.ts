import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email address is required'),
  password: Yup.string()
    .min(6, 'The password must be at least 6 characters')
    .max(50, 'The password must have a maximum of 50 characters')
    .required('Password is required'),
});

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().max(50, 'The name must have a maximum of 50 characters').required('Name is required'),
  username: Yup.string().max(50, 'The username must have a maximum of 50 characters').required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email address is required'),
  password: Yup.string()
    .min(6, 'The password must be at least 6 characters')
    .max(50, 'The password must have a maximum of 50 characters')
    .required('Password is required'),
  passwordConfirmation: Yup.string()
    .test('passwords-match', 'Password do not match', function (value) {
      return this.parent.password === value;
    })
    .required('Repeat your password'),
});

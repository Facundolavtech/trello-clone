import { FC } from 'react';
import Link from 'next/link';
import { Text } from '@chakra-ui/react';

type Props = {
  formType: 'login' | 'register';
};

const SwitchFormButton: FC<Props> = ({ formType }) => {
  return (
    <Link href={formType === 'register' ? '/login' : '/register'} passHref>
      <Text as="a" variant="link" fontSize={12} color="gray.500" display="inline-block">
        {formType === 'register' ? 'Do you already have an account?' : 'You do not have an account?'}{' '}
        <Text as="span" display="inline" fontWeight={600} color="gray.700">
          {formType === 'register' ? 'Login' : 'Register'}
        </Text>
      </Text>
    </Link>
  );
};

export default SwitchFormButton;

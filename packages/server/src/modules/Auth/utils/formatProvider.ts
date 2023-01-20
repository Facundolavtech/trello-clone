import { UserProviders } from '../../User/constants';

const formatUserProvider = (provider: UserProviders): string => {
  switch (provider) {
    case UserProviders.GOOGLE:
      return 'Google';

    case UserProviders.LOCAL:
      return 'Email and Password';
    default:
      return '';
  }
};

export default formatUserProvider;

import { Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import Button from 'components/Button';
import Searchbox from 'components/Searchbox';

const Searchbar = () => {
  const initialValues = {
    search: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        values.search = '';
        actions.setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Searchbox
            value={values.search}
            placeholder="Keyword..."
            onChange={handleChange}
            containerProps={{ width: '338px' }}
            button={
              <Button style={{ height: '100%' }} variant="primary" type="submit" px={6} isLoading={isSubmitting}>
                <Text fontSize={10} fontWeight={500}>
                  Search
                </Text>
              </Button>
            }
          />
        </Form>
      )}
    </Formik>
  );
};

export default Searchbar;

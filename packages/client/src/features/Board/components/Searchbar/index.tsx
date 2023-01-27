import { Box, Input, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import Button from '../../../../components/Button';

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
          <Box
            width="338px"
            bg="white"
            height="34px"
            display="flex"
            alignItems="center"
            borderRadius={8}
            boxShadow="0px 4px 12px rgba(90, 56, 56, 0.1)"
            padding="2px"
          >
            <Input
              height="full"
              name="search"
              value={values.search}
              placeholder="Keyword..."
              onChange={handleChange}
              fontSize={10}
              _placeholder={{ color: 'gray.4', fontSize: 10, fontWeight: 500 }}
              borderWidth={0}
              _focusVisible={{ outline: 'none' }}
            />
            <Button style={{ height: '100%' }} variant="primary" type="submit" px={6} loading={isSubmitting}>
              <Text fontSize={10} fontWeight={500}>
                Search
              </Text>
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Searchbar;

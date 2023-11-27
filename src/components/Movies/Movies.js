import { Formik } from 'formik';
import { Searchbar, Form, Field, FormGroup, FormBtn } from './Movies.styled';
import { BsSearch } from 'react-icons/bs';

export const Movies = ({ onSubmit }) => {
  return (
    <Searchbar>
      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormBtn type="submit">
            <BsSearch />
          </FormBtn>

          <FormGroup>
            <Field
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
          </FormGroup>
        </Form>
      </Formik>
    </Searchbar>
  );
};

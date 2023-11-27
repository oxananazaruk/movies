import { useSearchParams } from 'react-router-dom';
import { Searchbar, Form, Field, FormGroup, FormBtn } from './Movies.styled';
import { BsSearch } from 'react-icons/bs';

export const Movies = ({ query }) => {
  const [params, setParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.query.value.trim();
    if (value) {
      params.set('query', value);
      setParams(params);
    }
  };

  return (
    <Searchbar>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Field name="query" type="text" placeholder="Search movies" />
        </FormGroup>
        <FormBtn type="submit">
          <BsSearch />
        </FormBtn>
      </Form>
    </Searchbar>
  );
};

import { Formik } from 'formik';
import {
  Searchbar,
  Form,
  Field,
  FormGroup,
  FormBtn,
  SearchMoviesWraper,
  SearchMovieList,
  SearchMovieCard,
} from './Movies.styled';
import { BsSearch } from 'react-icons/bs';

export const Movies = ({ onSubmit, results }) => {
  return (
    <>
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

      <SearchMoviesWraper>
        <SearchMovieList>
          {results.map(movie => {
            const { id, title, poster_path } = movie;
            const baseURL = 'https://image.tmdb.org/t/p/w200';
            const poster = baseURL + poster_path;
            return (
              <SearchMovieCard key={id}>
                <img src={poster} alt={title} />
                <p>{title}</p>
              </SearchMovieCard>
            );
          })}
        </SearchMovieList>
      </SearchMoviesWraper>
    </>
  );
};

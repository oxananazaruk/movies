import { Formik } from 'formik';
import { Link, useLocation } from 'react-router-dom';
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
import { SlPicture } from 'react-icons/sl';

export const Movies = ({ onSubmit, results }) => {
  const location = useLocation();
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
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {poster_path ? (
                    <img src={poster} alt={title} />
                  ) : (
                    <SlPicture
                      style={{
                        width: '250px',
                        height: '350px',
                        color: '#808080',
                      }}
                    />
                  )}
                  <p>{title}</p>
                </Link>
              </SearchMovieCard>
            );
          })}
        </SearchMovieList>
      </SearchMoviesWraper>
    </>
  );
};

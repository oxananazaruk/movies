import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { fetchMoviesByQuery } from '../services/api';
import { Loader } from '../components/Loader/Loader';
import { Error } from '../components/Error/Error';
import { Movies } from '../components/Movies/Movies';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function CreateMoviePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const [params] = useSearchParams();
  const query = params.get('query') ?? '';

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }
    const onfindMovie = async () => {
      const responce = await fetchMoviesByQuery(query);
      const { results } = responce;
      if (results.length === 0) {
        return toast.error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      setMovies(results);
    };

    try {
      setIsLoading(true);
      setError(false);
      onfindMovie();
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [query, error]);

  return (
    <div>
      <Movies query={query} />
      <MoviesList results={movies} location={location} />
      {isLoading && <Loader />}
      {error && <Error />}
    </div>
  );
}

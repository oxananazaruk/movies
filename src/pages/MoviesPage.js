import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { fetchMoviesByQuery } from '../services/api';
import { BallTriangle } from 'react-loader-spinner';
import { Movies } from '../components/Movies/Movies';
import {MoviesList} from '../components/MoviesList/MoviesList'
import { useLocation, useSearchParams } from 'react-router-dom';

export default function CreateMoviePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const userQuery = query.slice(query.indexOf('/') + 1, query.length);
    if (userQuery.trim() === '') {
      return;
    }
    const onfindMovie = async () => {
      const responce = await fetchMoviesByQuery(userQuery);
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

  const handleSubmit = newQuery => {
    const userRequest = newQuery.query;
    setQuery(`${Date.now()}/${userRequest}`);
    setMovies([]);
  };

  return (
    <div>
      <Movies onSubmit={handleSubmit}  />
      <MoviesList results={movies} location={location}/>
      {isLoading && (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      )}
    </div>
  );
}

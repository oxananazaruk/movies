import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { Error } from '../components/Error/Error';
import { fetchTrendingMovies } from '../services/api';
import { MoviesContainer } from '../components/MoviesList/MoviesList.styled';
import { MoviesList } from '../components/MoviesList/MoviesList';

export default function HomePage() {
  const [moviesItems, setMoviesItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const trendingMovies = await fetchTrendingMovies();
        setMoviesItems(trendingMovies.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getTrendingMovies();
  }, []);

  return (
    <MoviesContainer>
      {isLoading && <Loader />}
      {error && <Error />}
      {moviesItems.length > 0 && (
        <>
          <h1>Trending today</h1>
          <MoviesList results={moviesItems} location={location} />
        </>
      )}
    </MoviesContainer>
  );
}

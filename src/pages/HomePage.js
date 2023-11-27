import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
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
      {error && (
        <b>Oops! Something went wrong! Please try reloading this page!</b>
      )}
      {moviesItems.length > 0 && (
        <>
          <h1>Trending today</h1>
          <MoviesList results={moviesItems} location={location} />
        </>
      )}
    </MoviesContainer>
  );
}

import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { fetchTrendingMovies } from '../services/api';
import { TrendingMoviesList } from '../components/TrendingMoviesList/TrendingMoviesList';

export default function HomePage() {
  const [moviesItems, setMoviesItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
    <div>
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
      {moviesItems.length > 0 && <TrendingMoviesList items={moviesItems} />}
    </div>
  );
}

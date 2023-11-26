import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import { fetchMovieById } from '../services/api';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        const fetchedMovie = await fetchMovieById(params.movieId);
        setMovie(fetchedMovie);
        console.log(movie);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [params.movieId]);

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
      {movie && <MovieDetails movie={movie} />}

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

import { useEffect, useState, useRef } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import { fetchMovieById } from '../services/api';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';
import {
  InfoLink,
  InfoList,
  MovieDetailsContainer,
  InfoContainer,
} from '../components/MovieDetails/MovieDetails.styled';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location);

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        const fetchedMovie = await fetchMovieById(params.movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [params.movieId]);

  return (
    <MovieDetailsContainer>
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
      <Link to={backLinkRef.current.state?.from ?? '/movies'}>
        <b>Back to movies</b>
      </Link>
      {error && (
        <b>Oops! Something went wrong! Please try reloading this page!</b>
      )}
      {movie && <MovieDetails movie={movie} />}

      <InfoContainer>
        <h3>Additional information:</h3>
        <InfoList>
          <li>
            <InfoLink to="cast">Cast</InfoLink>
          </li>
          <li>
            <InfoLink to="reviews">Reviews</InfoLink>
          </li>
        </InfoList>
      </InfoContainer>

      <Outlet />
    </MovieDetailsContainer>
  );
}

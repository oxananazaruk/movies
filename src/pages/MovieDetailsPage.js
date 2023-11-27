import { useEffect, useState, useRef } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { Error } from '../components/Error/Error';
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
      {isLoading && <Loader />}
      <Link to={backLinkRef.current.state?.from ?? '/movies'}>
        <b>Back to movies</b>
      </Link>
      {error && <Error />}
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

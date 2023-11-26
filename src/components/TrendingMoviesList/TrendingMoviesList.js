import {
  MoviesWraper,
  Title,
  MovieList,
  MovieCard,
} from './TrendingMoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

export const TrendingMoviesList = ({ items }) => {
  const location = useLocation();
  return (
    <MoviesWraper>
      <Title>Trending today</Title>
      <MovieList>
        {items.map(movie => {
          const { id, title, poster_path } = movie;
          const baseURL = 'https://image.tmdb.org/t/p/w200';
          const poster = baseURL + poster_path;
          return (
            <MovieCard key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img src={poster} alt={title} />
                <p>{title}</p>
              </Link>
            </MovieCard>
          );
        })}
      </MovieList>
    </MoviesWraper>
  );
};

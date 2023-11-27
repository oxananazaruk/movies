import {
  MoviesWraper,
  Title,
  MovieList,
  MovieCard,
} from './TrendingMoviesList.styled';
import { Link, useLocation } from 'react-router-dom';
import { SlPicture } from 'react-icons/sl';

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
                {poster_path ? (
                  <img src={poster} alt={title} />
                ) : (
                  <SlPicture
                    style={{
                      width: '250px',
                      height: '250px',
                      color: '#808080',
                    }}
                  />
                )}
                <p>{title}</p>
              </Link>
            </MovieCard>
          );
        })}
      </MovieList>
    </MoviesWraper>
  );
};

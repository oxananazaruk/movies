import { Link, useLocation } from 'react-router-dom';
import { MoviesListWraper, MovieList, MovieCard } from './MoviesList.styled';
import { SlPicture } from 'react-icons/sl';

export const MoviesList = ({ results, location }) => {
  return (
    <MoviesListWraper>
      <MovieList>
        {results.map(movie => {
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
                      height: '350px',
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
    </MoviesListWraper>
  );
};

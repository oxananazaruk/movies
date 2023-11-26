import {
  MoviesWraper,
  Title,
  MovieList,
  MovieCard,
} from './TrendingMoviesList.styled';

export const TrendingMoviesList = ({ items }) => {
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
              <img src={poster} alt={title} />
              <p>{title}</p>
            </MovieCard>
          );
        })}
      </MovieList>
    </MoviesWraper>
  );
};

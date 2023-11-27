import { MovieWraper } from './MovieDetails.styled';
import { SlPicture } from 'react-icons/sl';

export const MovieDetails = ({
  movie: { genres, title, overview, poster_path, vote_average },
}) => {
  const baseURL = 'https://image.tmdb.org/t/p/w200';
  const poster = baseURL + poster_path;
  return (
    <MovieWraper>
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
      <div>
        <h2>{title}</h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres.map(({ name, id }) => (
          <span key={id}>{name} </span>
        ))}
      </div>
    </MovieWraper>
  );
};

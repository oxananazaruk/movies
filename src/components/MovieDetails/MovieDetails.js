export const MovieDetails = ({
  movie: { genres, title, overview, poster_path, vote_average },
}) => {
  const baseURL = 'https://image.tmdb.org/t/p/w200';
  const poster = baseURL + poster_path;
  return (
    <div>
      <img src={poster} alt={title} />
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
    </div>
  );
};

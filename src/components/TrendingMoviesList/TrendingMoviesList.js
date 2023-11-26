export const TrendingMoviesList = ({ items }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {items.map(movie => {
          const { id, title, poster_path } = movie;
          const baseURL = 'https://image.tmdb.org/t/p/w200';
          const poster = baseURL + poster_path;
          return (
            <li key={id}>
              <img src={poster} alt={title} />
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

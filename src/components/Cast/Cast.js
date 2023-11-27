import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import { fetchMovieCast } from '../../services/api';

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        setIsLoading(true);
        setError(false);
        const NewMovieCast = await fetchMovieCast(params.movieId);
        setCast(NewMovieCast.cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieCast();
  }, [params.movieId]);
  console.log(cast);

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
      {cast.length > 0 && (
        <ul>
          {cast.map(actor => {
            const { id, profile_path, name, character } = actor;
            const baseUrl = 'https://image.tmdb.org/t/p/w200';
            const profile = baseUrl + profile_path;
            return (
              <li key={id}>
                <img src={profile} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

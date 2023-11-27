import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import { fetchMovieCast } from '../../services/api';
import { Error } from '../Error/Error';
import { Loader } from '../Loader/Loader';
import { CastWraper, CastList, CastCard, CastText } from './Cast.styled';

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

  return (
    <CastWraper>
      {isLoading && <Loader />}
      {error && <Error />}
      {cast.length > 0 ? (
        <CastList>
          {cast.map(actor => {
            const { id, profile_path, name, character } = actor;
            const baseUrl = 'https://image.tmdb.org/t/p/w200';
            const profile = baseUrl + profile_path;
            return (
              <CastCard key={id}>
                {profile_path ? (
                  <img src={profile} alt={name} width="150px" height="150px" />
                ) : (
                  <RxAvatar
                    style={{
                      width: '150px',
                      height: '150px',
                      color: '#808080',
                    }}
                  />
                )}
                <CastText>{name}</CastText>
                <CastText>Character: {character}</CastText>
              </CastCard>
            );
          })}
        </CastList>
      ) : (
        <p>We don`t have any information about cast for this movie.</p>
      )}
    </CastWraper>
  );
}

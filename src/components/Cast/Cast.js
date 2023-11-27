import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import { RxAvatar } from 'react-icons/rx';
import { fetchMovieCast } from '../../services/api';
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
        <p>We don`t have any casts information for this movie.</p>
      )}
    </CastWraper>
  );
}

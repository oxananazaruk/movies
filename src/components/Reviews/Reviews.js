import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import { fetchMovieReviews } from '../../services/api';

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const NewMovieReview = await fetchMovieReviews(params.movieId);
        setReviews(NewMovieReview.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieReviews();
  }, [params.movieId]);

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
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </div>
  );
}

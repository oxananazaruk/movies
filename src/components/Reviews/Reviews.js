import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import { Error } from '../Error/Error';
import { Loader } from '../Loader/Loader';
import { ReviewWraper, ReviewCard } from './Reviews.styled';

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
    <ReviewWraper>
      {isLoading && <Loader />}
      {error && <Error />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <ReviewCard key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </ReviewCard>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </ReviewWraper>
  );
}

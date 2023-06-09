import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewMovie } from "services/fetchMovies";
import { Loader } from "components/Loader/Loader";
import { ListReview } from "./Review.styled";


const Review = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);
    const [status, setStatus] = useState('idle');
  
    useEffect(() => {
      async function getReviewMovie(movieId) {
        try {
          setStatus('pending');
          const data = await fetchReviewMovie(movieId);
          setReview(data);
          setStatus('responded');
        } catch {
          setStatus('rejected');
        }
      }
      getReviewMovie(movieId);
    }, [movieId]);
  
    return (
      <>
        {status === 'responded' && review.length === 0 ? (
          <h2>There are currently no reviews</h2>
        ) : (
          <ListReview>
            {review.map(({ author, content, id, author_details: { rating } }) => {
              return (
                <li key={id}>
                  {
                    <>
                      <b>{author}</b>
                      <p>Rating: {rating ? rating : 'There are currently no ratings'}</p>
                      <p>{content}</p>
                    </>
                  }
                </li>
              );
            })}
          </ListReview>
        )}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h2>Sorry we didn't find this page</h2>}
      </>
    );
  };
  export default Review;
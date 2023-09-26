import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'api';
import {
  StyledList,
  ListItem,
  ReviewsDescr,
} from 'components/Reviews/Reviews.styled';
import { FilmSubTitle } from 'pages/MoviesDetails/MoviesDetails.styled';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await getReviewsMovie(movieId);
        setReviews(Reviews);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews();
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3>No Reviews.</h3>
  ) : (
    <StyledList>
      {reviews.map(({ id, author, content }) => (
        <ListItem key={id}>
          <ReviewsDescr>
            <FilmSubTitle>Author: {author}</FilmSubTitle>
          </ReviewsDescr>
          <ReviewsDescr>{content}</ReviewsDescr>
        </ListItem>
      ))}
    </StyledList>
  );
};
export default Reviews;

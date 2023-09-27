import { useLocation, Link } from 'react-router-dom';
import { BASE_POSTER_URL, PLACEHOLDER } from '../../images/ImagesNotFound';
import {
  CardTitle,
  MovieCardWrapper,
  Image,
  MovieList,
} from './FilmList.styled';

const FilmsList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieList>
      {movies.map(({ id, original_title, poster_path }) => (
        <MovieCardWrapper key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            <Image
              src={`${
                poster_path
                  ? BASE_POSTER_URL + poster_path
                  : PLACEHOLDER + '?text=' + original_title
              }`}
              alt={original_title}
              style={{ width: '100%' }}
            />
          </Link>
          <CardTitle>{original_title}</CardTitle>
        </MovieCardWrapper>
      ))}
    </MovieList>
  );
};

export default FilmsList;

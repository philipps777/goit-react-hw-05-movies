import { useLocation, Link } from 'react-router-dom';
import { BASE_POSTER_URL, PLACEHOLDER } from '../../images/ImagesNotFound';
import { CardTitle, MovieCardWrapper, Image } from './FilmList.styled';

const FilmsList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {movies.map(({ id, original_title, poster_path }) => (
        <MovieCardWrapper
          key={id}
          style={{ flex: '0 0 300px', margin: '10px' }}
        >
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
    </ul>
  );
};

export default FilmsList;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'api';
import { BASE_POSTER_URL, PLACEHOLDER } from 'images/ImagesNotFound';
import { List, ListItem } from '../Cast/Cast.styled';
import { FilmSubTitle } from 'pages/MoviesDetails/MoviesDetails.styled';
const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCastMovie(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {
        <List>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <ListItem key={id}>
              <img
                src={`${
                  profile_path
                    ? BASE_POSTER_URL + profile_path
                    : PLACEHOLDER + '?text=' + original_name
                }`}
                alt={original_name}
              />
              <p>
                <FilmSubTitle>Actor:</FilmSubTitle> {original_name}
              </p>
              <p>
                <FilmSubTitle>Character:</FilmSubTitle> {character}
              </p>
            </ListItem>
          ))}
        </List>
      }
    </>
  );
};
export default Cast;

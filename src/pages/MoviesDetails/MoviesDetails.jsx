import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from 'api';
import { BASE_POSTER_URL, PLACEHOLDER } from '../../images/ImagesNotFound';
import { Button } from 'components/Form/Form.styled';
import { Section } from 'components/CommonLayout/SharedLayout .styled';
import {
  FilmImg,
  FilmTitle,
  FilmWrapper,
  GoBackWrapper,
  FilmSubTitle,
  FilmDescr,
  StyledListDescr,
  StyledList,
  ListItem,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);
  if (!movie) {
    return;
  }

  return (
    <>
      <Section>
        <GoBackWrapper>
          <span>
            <Button>
              <Link to={backLinkHref}>Go back</Link>
            </Button>
          </span>
        </GoBackWrapper>
        <FilmWrapper>
          <FilmImg
            src={`${
              movie.poster_path
                ? BASE_POSTER_URL + movie.poster_path
                : PLACEHOLDER + '?text=' + movie.original_title
            }`}
            alt="get"
          />
          <div>
            <FilmTitle>{movie.original_title}</FilmTitle>
            <FilmSubTitle>
              Rating: {Math.round(movie.vote_average)}
            </FilmSubTitle>
            <FilmSubTitle>Overview</FilmSubTitle>
            <FilmDescr>{movie.overview}</FilmDescr>
            <FilmSubTitle>Genres</FilmSubTitle>
            <StyledListDescr>
              {movie.genres?.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </StyledListDescr>
          </div>
        </FilmWrapper>
        <div>
          <FilmTitle>Additional information</FilmTitle>
          <StyledList>
            <ListItem>
              <NavLink to="cast" state={location.state}>
                <Button>Cast</Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="reviews" state={location.state}>
                <Button>Reviews</Button>
              </NavLink>
            </ListItem>
          </StyledList>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </Section>
    </>
  );
};
export default MoviesDetails;

import { useEffect, useState } from 'react';

import { getTrendingMovies } from 'api';

import FilmsList from 'components/FilmList/FilmList';
import {
  Container,
  Section,
  Title,
} from 'components/CommonLayout/SharedLayout .styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <Container>
      <Section>
        <Title>Trending today</Title>
      </Section>
      <FilmsList movies={movies} />
    </Container>
    // <>
    //   <h1>Trending today</h1>
    //   <FilmsList movies={movies} />
    // </>
  );
};
export default Home;

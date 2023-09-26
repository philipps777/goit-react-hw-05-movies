import { useState } from 'react';
import { FormContainer, Input, SearchForm, Button } from './Form.styled';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <FormContainer>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name movie"
          autoFocus
          value={query}
          onChange={handleSearchParams}
        />
        <Button type="submit" disabled={!query}>
          Search
        </Button>
      </SearchForm>
    </FormContainer>
  );
};
export default Form;

import { useState } from 'react';
import { Form, Label, Input, Submit } from './SearchMovie.styled';
import PropTypes from 'prop-types';

export const SearchMovie = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedValue = inputValue.trim().toLowerCase();
    if (!normalizedValue) {
      setInputValue('');
      return;
    }
    onSubmit(normalizedValue);
    setInputValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Input
          type="text"
          name="search"
          placeholder="Enter a movie name"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </Label>
      <Submit type="submit">Search</Submit>
    </Form>
  );
};

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

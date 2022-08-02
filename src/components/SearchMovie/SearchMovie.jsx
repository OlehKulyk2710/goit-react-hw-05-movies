import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="search"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

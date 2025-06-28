// src/components/Menu/SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <input
        type="text"
        placeholder="Search dishes..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-bar__input"
      />
      <button type="submit" className="btn btn--primary search-bar__button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
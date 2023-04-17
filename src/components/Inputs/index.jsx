import React, { useState } from 'react';
import SearchInput from './styles';


function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    props.onSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

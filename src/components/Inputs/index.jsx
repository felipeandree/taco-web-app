import React, { useState } from 'react';
import SearchInput, { SearchIcon } from './styles';
import { AiOutlineSearch } from 'react-icons/ai'; 



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
      <SearchIcon>
        <AiOutlineSearch/> 
      </SearchIcon>
      
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
       
      />
    </form>
  );
}

export default SearchBar;

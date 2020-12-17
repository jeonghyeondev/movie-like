import React, { useState } from 'react';

const MovieSearch = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const onSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
    console.log(searchValue, '검색');
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={onSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default MovieSearch;

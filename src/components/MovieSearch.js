import React, { useState } from 'react';
import styled from 'styled-components';

const SearchFormBlock = styled.form`
  width: 400px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  position: relative;
  input {
    width: 100%;
    height: 50px;
    color: #c0a789;
    background: #4d4f54;
    padding: 0 110px 0 10px;
    border: 1px solid #c0a789;
    border-radius: 10px;
    font-size: 18px;
  }
  input::placeholder {
    color: #c0a789;
  }
  input:focus {
    outline: none;
    color: #c0a789;
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    background: none;
    height: 100%;
    width: 100px;
    border: none;
    color: #c0a789;
    font-size: 16px;
  }
`;

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
  };

  return (
    <SearchFormBlock>
      <input
        type="text"
        placeholder="영화를 검색해보세요"
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
      <button onClick={onSearchFunction}>SEARCH</button>
    </SearchFormBlock>
  );
};

export default MovieSearch;

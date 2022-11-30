import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiListCheck, BiSearchAlt2 } from 'react-icons/bi';
import './SearchBar.css';
function SerarchBar() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    navigate(`/search?q=${searchValue}`);
  };
  return (
    <div>
      <input
        className="bar"
        type="search"
        placeholder="영화 이름 입력"
        onChange={handleChange}
      />
      <button
        type="button"
        className="bar"
        id="search_btn"
        onClick={handleClick}
      >
        <BiSearchAlt2></BiSearchAlt2>
      </button>
    </div>
  );
}
export default SerarchBar;

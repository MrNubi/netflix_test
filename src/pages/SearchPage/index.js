import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import useDebounce from '../../components/hooks/useDebounce';
import './searchPage.css';

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [pNum, setPNum] = useState(1);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get('q');
  let pagenum = 1;
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (debouncedSearchTerm) {
      window.scrollTo(0, 0);
      fetchSearchMovie(debouncedSearchTerm, pNum);
    }
  }, [pNum]);
  useEffect(() => {
    if (debouncedSearchTerm) {
      window.scrollTo(0, 0);
      setPNum(1);
      fetchSearchMovie(debouncedSearchTerm, pNum);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm, pNum) => {
    console.log('searchTerm', searchTerm);
    try {
      const request = await axios.get(
        `/search/multi?&query=${searchTerm}&page=${pNum}`
      );
      console.log(request);
      setSearchResults(request.data.results);
    } catch (error) {
      console.log('error', error);
    }
  };
  const pNumSetterPlus = () => {
    console.log(pNum);
    if (pNum >= 1) {
      setPNum(pNum + 1);
    } else setPNum(pNum);
  };
  const pNumSetterMinus = () => {
    console.log(pNum);
    if (pNum > 1) {
      setPNum(pNum - 1);
    } else setPNum(pNum);
  };
  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl =
              'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
            return (
              <div>
                <div className="movie" key={movie.id}>
                  <div
                    onClick={() => navigate(`/${movie.id}`)}
                    className="movie__column-poster"
                  >
                    <img
                      src={movieImageUrl}
                      alt="movie"
                      className="movie__poster"
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div className="search-container2">
          <button className="btn" onClick={pNumSetterMinus}>
            {'<'}
          </button>
          <button className="btn" onClick={pNumSetterPlus}>
            {'>'}
          </button>
        </div>
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>
            찾고자하는 검색어"{debouncedSearchTerm}"에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
}

import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import './Row.css';
import MovieModal from './MovieModal';
import '../components/MovieModal/MovieMadal.css';

export default function Row({ isLargeRow, title, id, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSellected, setMovieSellected] = useState({});
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios(fetchURL);
    setMovies(request.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSellected(movie);
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
              //  document.getElementById(id)=> id로 엘리먼트를 찾음,
              // .scrollLeft => 요소의 콘텐츠가 왼쪽 가장 자리에서 스크롤 되는 픽셀 수를 가져오거나 실행
              // window.innerWidth -= 80 => 안쪽 넓이 픽셀수 측정, 그리고 그거보다 80픽셀 빼준 후 그 값을 바로 리턴해서 적용
              // window.innerWidth += 80 => 위랑 똑같은데 방향만 바꿈
            }}
          >
            {'<'}
          </span>
        </div>

        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              style={{ padding: '25px 0' }}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => {
                handleClick(movie);
              }}
            />
          ))}
        </div>

        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
              //  document.getElementById(id)=> id로 엘리먼트를 찾음,
              // .scrollLeft => 요소의 콘텐츠가 왼쪽 가장 자리에서 스크롤 되는 픽셀 수를 가져오거나 실행
              // window.innerWidth -= 80 => 안쪽 넓이 픽셀수 측정, 그리고 그거보다 80픽셀 빼준 후 그 값을 바로 리턴해서 적용
              // window.innerWidth += 80 => 위랑 똑같은데 방향만 바꿈
            }}
          >
            {'>'}
          </span>
        </div>
      </div>

      {modalOpen && (
        <MovieModal {...movieSellected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}

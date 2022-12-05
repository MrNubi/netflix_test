import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import './Row.css';
import MovieModal from './MovieModal';
import '../components/MovieModal/MovieMadal.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true} // loop 기능을 사용할 것인지
        breakpoints={{
          1378: {
            slidesPerView: 6, // 한번에 보이는 슬라이드 개수
            slidesPerGroup: 6, // 몇개씩 슬라이드 할지
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        navigation // arrow 버튼 사용 유무
        pagination={{ clickable: true }} // 페이지 버튼 보이게 할지
      >
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <SwiperSlide>
              <img
                key={movie.id}
                style={{ padding: '25px 0' }}
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                } `}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {modalOpen && (
        <MovieModal {...movieSellected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}

// 지운 코드
/*    <div className="slider__arrow-left">
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


        ***************
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div id={id} className="row__posters">
            {movies.map((movie) => (
              <SwiperSlide>
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
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
*/

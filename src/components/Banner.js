import axios from '../api/axios';
import React, { useState, useEffect } from 'react';
import requests from '../api/request';
import '../components/Banner.css';
import styled from 'styled-components';
import MovieModal from './MovieModal';
import '../components/MovieModal/MovieMadal.css';
import { useNavigate } from 'react-router-dom';

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const navi = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기(여러 영화)
    const request = await axios.get(requests.fetchNowPlaying);
    // 여러 영화 중 하나의 아이디를 가져오기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: 'videos' },
    });
    // const { data: movieDetail } -> movieDetail안에 저 값들을 넣음
    setMovie(movieDetail);
    console.log('movieDetail', movieDetail);
  };
  if (!isClicked) {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>

          <div className="banner__buttons">
            <button
              className="banner__button play"
              onClick={() => {
                console.log('playClicked', movie);
                console.log('playClicked2', movie.videos.results.length);

                if (movie.videos.results.length > 0) {
                  setIsClicked(true);
                  console.log('isClicked', isClicked);
                  console.log('isClicked2', movie.videos.results.length);
                } else {
                  alert('비디오를 재생할 수 없습니다.');
                }
              }}
            >
              Play
            </button>
            <button
              className="banner__button info"
              onClick={() => {
                console.log('infoClicked', movie);
                navi(`/${movie.id}`);
              }}
            >
              More Information
            </button>
          </div>

          <h1 className="banner__description">
            {truncate(movie.overview, 100)}
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  } else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            title="Youtube Player"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></Iframe>
        </HomeContainer>
      </Container>
    );
  }
}
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
// Iframe: HTML INLINE 컨탠츠, 해당 웹 페이지 안에 어떠한 제한 없이 다른 페이지를 불러와서 삽입 가능

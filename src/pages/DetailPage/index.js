import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import '../../components/MovieModal/MovieMadal.css';
import videoModal from '../../components/videoModel';
import styled from 'styled-components';

export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const Rnum = Math.floor(Math.random() * 100) + 1;
  const Rcolor2 = Rnum <= 80 ? 'modal__user_perc2' : 'modal__user_perc3';
  const Rcolor = Rnum <= 30 ? 'modal__user_perc' : Rcolor2;
  const [vmOpen, setVmOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`, {
        params: { append_to_response: 'videos' },
      });
      console.log(`request.data : ${request.data}`, request.data);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return <div>...loading</div>;
  if (vmOpen) {
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
  } else {
    return (
      <section>
        <div float="left">
          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="poster"
            onClick={() => {
              console.log('modalVideo', movie.videos.results);
              if (movie.videos.results.length > 0) {
                setVmOpen(true);
              } else {
                alert('비디오가 없습니다.');
              }
            }}
          />
          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="poster"
          />
        </div>
        <div className="modal__content">
          <p className="modal__details">
            <span className={Rcolor}>{Rnum}%</span>
            <span> for you</span>
            <h3 className="modal_block">
              {movie.release_date ? movie.release_date : movie.first_air_date}
            </h3>
          </p>

          <h2 className="modal__title">
            {movie.title ? movie.title : movie.name}
          </h2>
          <p className="modal__overview">
            {' '}
            popularity:{' '}
            {movie.popularity ? movie.popularity : '정보가 없습니다.'}
          </p>
          <p className="modal__overview"> 평점: {movie.vote_average}</p>
          <p className="modal__overview"> {movie.overview}</p>
        </div>
      </section>
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

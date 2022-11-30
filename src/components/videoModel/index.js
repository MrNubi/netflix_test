import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import requests from '../../api/request';
import axios from '../../api/axios';
import '../Banner.css';
import '../MovieModal/MovieMadal.css';
export default function videoModal(movie) {
  console.log('videoModal', movie);
  return (
    <Container>
      <HomeContainer>
        <Iframe
          width="auto"
          height="auto"
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

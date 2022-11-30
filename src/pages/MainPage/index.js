import React from 'react';
import requests from '../../api/request';
import Banner from '../../components/Banner';
import Row from '../../components/Row';

export default function MainPage() {
  return (
    <div className="app">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      ></Row>
      <Row
        title="Trending Now"
        id="TN"
        fetchURL={requests.fetchTrending}
        isLargeRow={false}
      ></Row>
      <Row
        title="TOP Rated"
        id="TR"
        fetchURL={requests.fetchTopRated}
        isLargeRow={false}
      ></Row>
      <Row
        title="Action Movies"
        id="AM"
        fetchURL={requests.fetchActionMovies}
        isLargeRow={false}
      ></Row>

      <Row
        title="Comedy"
        id="CM"
        fetchURL={requests.fetchComedyMovies}
        isLargeRow={false}
      ></Row>
    </div>
  );
}

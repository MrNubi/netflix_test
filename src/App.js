import requests from '../src/api/request';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import './App.css';
import Footer from './components/Footer';
import Clock2 from './components/clock/Clock2';

function App() {
  return (
    <div className="app">
      <Nav />

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

      <Footer></Footer>
    </div>
  );
}

export default App;

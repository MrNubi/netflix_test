import Nav from './components/Nav';
import './App.css';
import Footer from './components/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';

const Layout = () => {
  return (
    <div>
      <Nav></Nav>

      <Outlet />

      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route index element={<MainPage />} />
      <Route path=":movieId" element={<DetailPage />} />
      <Route path="search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;

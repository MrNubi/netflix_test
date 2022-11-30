import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import '../../components/MovieModal/MovieMadal.css';

export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const Rnum = Math.floor(Math.random() * 100) + 1;
  const Rcolor2 = Rnum <= 80 ? 'modal__user_perc2' : 'modal__user_perc3';
  const Rcolor = Rnum <= 30 ? 'modal__user_perc' : Rcolor2;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      console.log(`request.data : ${request.data}`, request.data);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return <div>...loading</div>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
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
        <p className="modal__overview"> 평점: {movie.vote_average}</p>
        <p className="modal__overview"> {movie.overview}</p>
      </div>
    </section>
  );
}

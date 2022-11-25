import React, { useRef, useCallback } from 'react';
import '../MovieModal/MovieMadal.css';

export default function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  const Rnum = Math.floor(Math.random() * 100) + 1;
  const Rcolor2 = Rnum <= 80 ? 'modal__user_perc2' : 'modal__user_perc3';
  const Rcolor = Rnum <= 30 ? 'modal__user_perc' : Rcolor2;

  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal">
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>
          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img"
          />
          <div className="modal__content">
            <p className="modal__details">
              <span className={Rcolor}>{Rnum}%</span>
              <span> for you</span>
              <h3 className="modal_block">
                {release_date ? release_date : first_air_date}
              </h3>
            </p>

            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview"> 평점: {vote_average}</p>
            <p className="modal__overview"> {overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

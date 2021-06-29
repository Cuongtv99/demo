import React from "react";
import { Link } from "react-router-dom";

function TrainingItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Courses" src={props.src} />
          </figure>
        </Link>
        <Link className="cards__item__link" to={props.path}>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <h5 className="cards__item__text1">{props.text1}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default TrainingItem;

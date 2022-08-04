import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { name, image, patronus } = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`/`}
          key={name}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluid`} src={image} alt={image} />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Patronus</div>
                <div className="fs-5">{patronus}</div>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No Students Found :/";
  }

  return <>{display}</>;
};

export default Card;

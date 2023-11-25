import React from "react";
import Karzina from "../../assets/icons/Karzina";
import Star from "../../assets/icons/Star";
import { Link } from "react-router-dom";
import "./comrades.css";
const Comrades = ({ newPrice, brand, image, id }) => {
  return (
    <div className="comrades-container">
      <div className="comrades-card">
        <div className="comrades-card-img">
          <Link to={`/product/${id -1}`}>
            <img src={image} width={300} alt="" />
          </Link>
        </div>
        <div className="card_con">
          <div className="comrades-card-menu">
            <p>
              <span>
                <Star />
              </span>
              (5.0) 0 отзывов
            </p>
            <h2>{newPrice} so'm</h2>
            <p className="brend_name">
              Бренд:<span>{brand}</span>
            </p>
          </div>
          <div className="comrades-card-button">
            <button className="comrades-basket">
              <Karzina />
              <div>
                <p>Savatga</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comrades;

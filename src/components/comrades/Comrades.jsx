import React from "react";
import Karzina from "../../assets/icons/Karzina";
import { Link } from "react-router-dom";
import "./comrades.css";
const Comrades = ({ newPrice, title,image, id }) => {
  console.log(title);
  return (
    <div className="comrades-container">
      <div className="comrades-card">
        <div className="comrades-card-img">
          <Link to={`/product/${id -1}`}>
            <img src={image} alt="" />
          </Link>
        </div>
        <div className="product-name">
          <h2>{title}</h2>
        </div>
        <div className="card_con">
          <div className="comrades-card-menu">
            <h2>{newPrice} so'm</h2>
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

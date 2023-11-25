import React from "react";
import "./comrades.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import data from "../db/data";
import { useParams } from "react-router-dom";
const Card = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <div>
      <Navbar />
        <div className="contaner">
        <div className="CardData">
        <div className="product_img">
            <img src={data[id].img} width={761} alt="" />
          </div>
          <div className="about_produc">
            <h1 className="name_product">{data[id].title}</h1>
            <h2 className="price_product">{data[id].newPrice}</h2>
            <p className="brend_produc"> Brand:{data[id].company}</p>
            <button className="add_to_basket_btn">Добавить в корзину</button>
          </div>
        </div>
        </div>
      <Footer />
    </div>
  );
};

export default Card;

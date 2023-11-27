import React from "react";
import Navbar from "../navbar/Navbar";
import "./home.css";
import Footer from "../footer/Footer";
import Comrades from "../comrades/Comrades";
import Swipper from "../swipper/Swipper";
import data from "../db/data";

const Home = () => {
  const displayedProducts = data.slice(25, 27);
  const displayedProductses = data.slice(25, 27);

  return (
    <div className="wrapper">
      <Navbar />
      <div className="home-main">
        <div className="container">
          <div className="glav">
            <Swipper />
            <div className="cards">
              {displayedProducts.map((item) => {
                return (
                  <Comrades
                    key={item.id}  
                    id={item.id}
                    newPrice={item.newPrice}
                    brand={item.company}
                    image={item.img}
                  />
                );
              })}
              {displayedProductses.map((item) => {
                return (
                  <Comrades
                    key={item.id}  
                    id={item.id}
                    newPrice={item.newPrice}
                    brand={item.company}
                    image={item.img}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

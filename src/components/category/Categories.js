import { useState } from "react";

import Products from "./Products/Products";
import products from "../db/data";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  function filteredData(products, selected) {
    let filteredProducts = products;
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(({ img, title, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        newPrice={newPrice}
      />
    ));
  }

  const result = filteredData(products, selectedCategory);

  return (
    <div className="categoties_container">
    <Navbar/>
    <div className="categoties_container_item">
      <Sidebar handleChange={handleChange} />
      <Products result={result} />
    </div>
    <Footer/>
    </div>
  );
}

export default App;

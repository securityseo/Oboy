import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home'
import Branches from './branches/Branches'
import Contact from './contact/Contact'
import Basket from "./basket/Basket";
import User from "./user/User";
import Categories from "./category/Categories";
import NotFound from "./404 page/404page";
import Card from "./comrades/Card";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user" element={<User />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/product/:id" element={<Card />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import "./Styles/Normalize.css";
import Onas from "./Pages/Onas";
import data from "./db/db";
import Katalog from "./Pages/Katalog";
import Kontaqti from "./Pages/Kontaqti";
import Error from "./Pages/404/Error";
import { useEffect, useState } from "react";

import "./Styles/Loading.css";

const Loading = () => {
  return (
    <div className="loaderWrapper">
      <div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <div>
      {!data.length ? (
          <Loading />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<Onas />} />
            <Route path="/catalog" element={<Katalog />} />
            <Route path="/contacts" element={<Kontaqti />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;

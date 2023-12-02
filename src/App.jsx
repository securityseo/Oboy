import { Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import './Styles/Normalize.css';
import Onas from "./Pages/Onas";
import Katalog from "./Pages/Katalog";
import Nowosti from "./Pages/Nowosti";
import Kontaqti from "./Pages/Kontaqti";
import Error from "./Pages/404/Error";
import { useEffect, useState } from "react";

import './Styles/Loading.css';

const Loading = () => {
  return (
    <div className="loaderWrapper">
      <div className="loader">
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

  useEffect(() => {
    window.onload = () => {
      // Set isLoading to false when the window is fully loaded
      setIsLoading(false);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<Onas />} />
            <Route path="/catalog" element={<Katalog />} />
            <Route path="/news" element={<Nowosti />} />
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

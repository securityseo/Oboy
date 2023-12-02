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

import './Styles/Loading.css'

const Loading = () =>{
  return(
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
  )
}

const App = () => {

  const [isLoading , setIsLoading] = useState(true);

  useEffect(() =>{
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  },[])

  return (
    <div>
        {isLoading ?(
          <Loading/>
          

        ) :(
        <>
          {/* <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<Onas />} />
            <Route path="/catalog" element={<Katalog />} />
            <Route path="/news" element={<Nowosti />} />
            <Route path="/contacts" element={<Kontaqti />} />
            <Route path="*" element={<Error/>} />
          </Routes>
          <Footer /> */}
          <img src="data:image/jpeg;base64,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" alt="" />
        </>
        )
        }
    </div>
  );
};

export default App;
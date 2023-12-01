import "../Styles/News.css";
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";
const News = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="news-block">
          <div className="news-img">
            <img src={Logo} alt="" />
          </div>
          <div className="news-title">
            <h2>Дилеры</h2>
            <h3>
              Xorazm viloyati: Urganch Shahar. <br /> Gulobod kòchasi 11 uy.
              Oboylar dunyosi dòkoni. <br /> Telefon raqam. <Link to={'tel:+998904345377'}>+998 (90) 434 53 77</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

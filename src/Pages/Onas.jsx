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
            <h2>Lorem</h2>
            <h3>
              Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Laborum, tenetur consectetur! <br /> Quibusdam sint quos minima neque nobis, ipsam, cupiditate temporibus autem.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

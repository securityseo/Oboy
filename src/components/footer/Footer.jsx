import React from "react";
import "./footer.css";
// import "../navbar/navbar.css";
import { Link } from "react-router-dom";
import Instagram from "../../assets/icons/Instagram";
import Telegram from "../../assets/icons/Telegram";
import FaceBook from "../../assets/icons/FaceBook";
import logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <div className="wrapper">
      <div className="footer">
        <div className="container">
            <div className="footer-in-name">
            <div className="footer-in">
            <div className="footer-logo">
              <img src={logo} alt="" width={240} height={240}/>
            </div>
            <div className="FOOTER-SOCIAL">
              <button>
                <Link to={'https://instagram.com/sultonovdev'}>
                <Instagram />
                </Link>
              </button>

              <button>
                <Telegram />
              </button>

              <button>
                <FaceBook />
              </button>
            </div>
          </div>
          <div className="links">
            
              <Link className="footer_links" to={"/"}>
              Главная
              </Link>

              <Link className="footer_links" to={"/branches"}>
              Филиалы
              </Link>

              <Link className="footer_links" to={"/categories"}>
              Категории
              </Link>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

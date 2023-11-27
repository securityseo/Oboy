import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo-removebg-preview.png";
const Navbar = () => {
  return (
<div className="wrapper">
<div className="navbar">
      <div className="container">
      <div className="nav">
        <Link to="/">
          <div className="project_logo">
            <img src={logo} alt="" width={250} height={80}/>
          </div>
        </Link>
        <div className="nav_links">
          <Link className="nav_link" to={"/"}>
            Главная
          </Link>
          <Link className="nav_link" to={"/branches"}>
            Филиалы
          </Link>
          <Link className="nav_link" to={"/categories"}>
            Категории
          </Link>
          <Link className="nav_link" to={"/contact"}>
            Контакты
          </Link>
        </div>
        <div className="nav_icon_box">
          <Link className="nav_icon_link" to={"/basket"}>
        <button className="nav_icon">
        <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#fff"
              className="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
        </button>
          </Link>
          <Link className="nav_icon_link" to={"/user"}>
          <button className="nav_icon"> 
             <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#fff"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
            </button>
          </Link>
        </div>
        {/* <BackBtn/> */}
      </div>
      </div>
    </div>
</div>
  );
};

export default Navbar;

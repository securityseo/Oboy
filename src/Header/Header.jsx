import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
import "../Styles/Header.css";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
const Header = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="header">
          <div className="container">
            <div className="header-nav">
              <div className="header-logo">
                <Link to={"/"}>
                  <img src={Logo} alt="" />
                </Link>
              </div>
              <div className="header-links">
                <Link to={"/about"}>
                  <a className="header-link" href="#">О нас</a>
                </Link>
                <Link to={"/catalog"}>
                  <a className="header-link" href="#">Каталог</a>
                </Link>
                <Link to={"/news"}>
                  <a className="header-link" href="#">Новости</a>
                </Link>
                <Link to={"/contacts"}>
                  <a className="header-link" href="#">Контакты</a>
                </Link>
              </div>
              <div className="responsive-menu">
                <Menu>
                  <MenuButton
                    color={"#000"}
                    backgroundColor={"#BC955D"}
                    _hover={"none"}
                    as={Button}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      class="bi bi-text-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
                  </MenuButton>
                  <MenuList backgroundColor={"#BC955D"}>
                    <Link to={"/about"}>
                      <MenuItem backgroundColor={"#BC955D"} color={"#fff"}>
                        О нас
                      </MenuItem>
                    </Link>
                    <Link to={"/catalog"}>
                      <MenuItem
                        backgroundColor={"#BC955D"}
                        color={"#fff"}
                        borderTop={"1px solid #fff"}
                      >
                        Каталог
                      </MenuItem>
                    </Link>
                    <Link to={"/news"}>
                      <MenuItem
                        backgroundColor={"#BC955D"}
                        color={"#fff"}
                        borderTop={"1px solid #fff"}
                      >
                        Новости
                      </MenuItem>
                    </Link>

                    <Link to={"/contacts"}>
                      <MenuItem
                        backgroundColor={"#BC955D"}
                        color={"#fff"}
                        borderTop={"1px solid #fff"}
                      >
                        Контакты
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

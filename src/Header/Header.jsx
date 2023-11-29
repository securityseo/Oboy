import Logo from '../Images/logo.png'
import '../Styles/Header.css'

const Header = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="header">
          <div className="container">
            <div className="header-nav">
              <div className="header-logo">
                <img src={Logo} alt="" />
              </div>
              <div className="header-links">
                <a href="#">О нас</a>
                <a href="#">Каталог</a>
                <a href="#">Новости</a>
                <a href="#">Контакты</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

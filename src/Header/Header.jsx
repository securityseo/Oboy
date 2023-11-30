import { Link } from 'react-router-dom';
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
                <Link to={'/'}>
                <img src={Logo} alt="" />
                </Link>
              </div>
              <div className="header-links">
               <Link to={'/about'}>
               <a href="#">О нас</a>
               </Link>
               <Link to={'/catalog'}>
               <a href="#">Каталог</a>
               </Link>
                <Link to={'/news'}>
                <a href="#">Новости</a>
                </Link>
             <Link to={'/contacts'}>
             <a href="#">Контакты</a>
             </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

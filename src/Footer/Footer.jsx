import "../Styles/Footer.css";
import Instagram from "../icons/Instagram";
import Telegram from "../icons/Telegram";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="all-footer">
            <div className="user-profile">
              <div className="inputs">
                <div className="input-bag">
                  <div className="input1">
                    <span>Ваше имя *</span>
                    <input type="text" />
                  </div>
                  <div className="input2">
                    <span>Ваш e-mail *</span>
                    <input type="emal" />
                  </div>
                </div>
                <div className="input3">
                  <span>Сообщение</span>
                  <textarea></textarea>
                </div>

                <button>Отправить</button>
              </div>
            </div>
            <div className="user-locations">
              <div className="locatsion">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260.24462764743686!2d60.61607072409697!3d41.559865019857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc98b88844ffb%3A0x55aa9cb6d9d1b566!2sOboylar%20dunyosi!5e0!3m2!1sru!2s!4v1700314905582!5m2!1sru!2s"
                  width="540"
                  height="330"
                  allowfullscreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="contacts">
                <h1>КОНТАКТЫ</h1>
                <h2>Xorazm viloyati: Urganch Shahar. Gulobod kòchasi 11 uy. Oboylar dunyosi dòkoni</h2>
                <h3>+99888 888 88 88</h3>
                <h6>+99888 888 88 88</h6>
                <div className="socials">
                  <button>
                    <Telegram />
                  </button>
                  <button>
                    <Instagram />
                  </button>
                </div>
                <h4>oboylardunyosi@mail.com</h4>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;

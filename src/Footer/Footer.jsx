import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import Instagram from "../icons/Instagram";
import Telegram from "../icons/Telegram";

const Footer = () => {
  const sendTelegramMessage = (event) => {
    event.preventDefault();
    const botToken = "6249298590:AAGgAfpVZq5L2UABhPxR-ciGuifr9CxR26Y";
    const chatId = "5845933613";
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;

    const text = `--------------%0AName: ${name}%0ANumber: ${number}%0AMessage: ${message}%0A`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`;

    fetch(url)
      .then((response) => {
        console.log("Xabar yuborildi!");
        document.querySelector("form").reset();
      })
      .catch((error) => {
        alert("Xatolik yuz berdi:");
      });
  };

  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="all-footer">
            <div className="user-profile">
              <form onSubmit={sendTelegramMessage} className="inputs">
                <div className="input-bag">
                  <div className="input1">
                    <span>Ваше имя *</span>
                    <input id="name" type="text" />
                  </div>
                  <div className="input2">
                    <span>Ваш номер *</span>
                    <input id="number" type="number" />
                  </div>
                </div>
                <div className="input3">
                  <span>Сообщение</span>
                  <textarea id="message"></textarea>
                </div>

                <button>Отправить</button>
              </form>
            </div>
            <div className="user-locations">
              <div className="locatsion">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1316.6101689377947!2d60.630323689143566!3d41.57002023733936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDM0JzEyLjEiTiA2MMKwMzcnNDguNSJF!5e1!3m2!1sru!2s!4v1701859723452!5m2!1sru!2s"
                  width="100%"
                  height="330"
                  allowfullscreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="contacts">
                <h1>КОНТАКТЫ</h1>
                <h2>Xorazm viloyati: Urganch Shahar. <br /> Al-Xorazmiy 45 a Uy. Oboylar dunyosi dòkoni</h2>
                <Link to={'tel:++998934659999'}>
                <h3>+998 (93) 465 99 99</h3>
                </Link>
                <Link to={'tel:++998934659999'}>
                <h6>+998 (93) 465 99 99</h6>
                </Link>
                <div className="socials">
                  <button>
                   <a href="https://t.me/+998934659999">
                   <Telegram />
                   </a>
                  </button>
                  <button>
                  <a href="https://www.instagram.com/shohmardon.701/">
                  <Instagram />
                  </a>
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

import '../Styles/News.css'
import Logo from '../Images/logo.png'
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
                    <h3>Xorazm viloyati: Urganch Shahar. Gulobod kòchasi 11
uy. Oboylar dunyosi dòkoni. Telefon raqam. +99888 888 88 88 </h3>
                   </div>
                </div>
        </div>
    </div>
  )
}

export default News

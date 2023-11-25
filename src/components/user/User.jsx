import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import './user.css'
const Contacts = () => {
  return (
    <div>
      <Navbar/>
      <div className="register">
        <input type="email" placeholder='emailni yoz'/>
        <input type="submit" placeholder='bos'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contacts

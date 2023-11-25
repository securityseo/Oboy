import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact_container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260.24462764743686!2d60.61607072409697!3d41.559865019857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc98b88844ffb%3A0x55aa9cb6d9d1b566!2sOboylar%20dunyosi!5e0!3m2!1sru!2s!4v1700314905582!5m2!1sru!2s"
        width="600"
        height="450"
        allowfullscreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

import React, { Component } from 'react';
import phonesvg from '../img/phone.svg';
import mailsvg from '../img/mail.svg';
import location from '../img/location.svg';


function Heading({name, title, phone, mail, city, intro }) {
    return (
        <div>
            <header>
            <div className="heading">
                <h1>{name}</h1>
                <h2>{title}</h2>
              </div>
              <div className="contact-box">
                <div className="contact-detail"><img src={phonesvg} alt="phonelogo" /> <span className="contact-text">{phone}</span></div>
                <div className="contact-detail"><img src={mailsvg} alt="mailogo" /> <span className="contact-text">{mail}</span></div>
                <div className="contact-detail"><img src={location} alt="locationlogo" /> <span className="contact-text">{city}</span></div>
              </div>
              </header>
               <div className="sumary">{intro}</div>
        </div>
      );
}

export default Heading;
import React from 'react';
import { Parallax, Background } from 'react-parallax';
import '../style/contact.css';
import image from '../media/cover.jpg';

const Contact = (props) => {
  return (
    <div id="contact">
   
   <Parallax bgImage={image} blur={{ min: -5, max: 15 }}>
      <div style={{ height: 800 }}>
        <div className="insideDiv contact">
          <h4>Contact Infomation</h4>
          <p>Tel: (206) 8675309</p>
          <p>email: info@gunnarswager.com</p>
          <p>mailing Address: PO BOX somewhere</p>
        
        </div>
      </div>
    </Parallax>
    </div>
  );
 }
 
 export default Contact;
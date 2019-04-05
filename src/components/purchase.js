import React from 'react';
import { Parallax, Background } from 'react-parallax';
import '../style/purchase.css';
import image from '../media/book.jpg';

const Purchase = (props) => {
  return (
    <div id="help">
   
   <Parallax bgImage={image} blur={{ min: -5, max: 15 }}>
      <div style={{ height: 1200 }}>
        <div className="insideDiv">
          <h4>How To Help</h4>
          <p>Help the foundation by buying a book</p>
          <p>there will be a link here to Amazon</p>
          <p>Donate some money to the foundation</p>
          <p>you can also have any links here that link to</p>
          <p>things for sale</p>
        
        </div>
      </div>
    </Parallax>
    </div>
  );
 }
 
 export default Purchase;
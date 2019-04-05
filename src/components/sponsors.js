import React from 'react';
import { Parallax, Background } from 'react-parallax';
import '../style/sponsors.css';
import image from '../media/book.jpg';

const Sponsors = (props) => {
  return (
    <div id="sponsors">
   
   <Parallax bgImage={image} blur={{ min: -5, max: 15 }}>
      <div style={{ height: 1200 }}>
        <div className="insideDiv">
          <h4>Friends of The foundation</h4>
          <p>We will put the logos of the sponsors in this space</p>
          <p>I was thinking that we could have a "brick wall" at the </p>
          <p>bottom of this section where you could have a "brick"</p>
          <p>with each presons name that donated more than $100</p>
          
        
        </div>
      </div>
    </Parallax>
    </div>
  );
 }
 
 export default Sponsors;
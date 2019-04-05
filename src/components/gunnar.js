import React from 'react';
import { Parallax, Background } from 'react-parallax';
import '../style/sponsors.css';
import image from '../media/book.jpg';
import Carousel from '../components/carousel';
import '../style/gunnar.css'

const Gunnar = (props) => {
  return (
    <div id="gunnar">
   
   <Parallax bgImage={image} blur={{ min: -5, max: 15 }}>
      <div style={{ height: 1800 }}>
        <div className="insideDiv">
         <Carousel />
          
        
        </div>
      </div>
    </Parallax>
    </div>
  );
 }
 
 export default Gunnar;
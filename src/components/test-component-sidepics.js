import React from 'react';
import { Parallax, Background } from 'react-parallax';
import '../style/test.css';
import image from '../media/cover.jpg';

const Test = (props) => {
  return (
    <div id="testsheet" style={{ height: 800 }}>
      <div className="leftSide">
      </div>
      <div className="contents">
      <h1>Contents will go here</h1>
      
      </div>
      <div className="rightSide">
      </div>
    </div>
  );
 }
 
 export default Test;
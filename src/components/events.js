import React from 'react';
import { Parallax, Background } from 'react-parallax';
import '../style/events.css';
import image from '../media/about.jpg';

const Events = (props) => {
  return (
    <div id="events">
   
   <Parallax bgImage={image} blur={{ min: -5, max: 15 }}>
      <div style={{ height: 800 }}>
        <div className="insideDiv events">
          <h4>Upcoming Events</h4>
          <div className="events"></div>
        
        </div>
      </div>
    </Parallax>
    </div>
  );
 }
 
 export default Events;
import React from 'react';
import { Parallax, Background } from 'react-parallax';
import '../style/about.css';
import image from '../media/about.jpg';

const About = (props) => {
  return (
    <div id="about">
   
   <Parallax bgImage={image} blur={{ min: -2, max: 5 }} >
      <div style={{ height: 960 }}>
        <div className="insideDiv about">
          <h1>GUNNAR SWAGER FOUNDATION</h1>
          <h4>Comfort for Kids in Crisis</h4>
          <p>Gunnar Swager foundation became incorporated on September 27th, 2018.</p>
          <h4>Foundation was formed</h4>
          <p>December 31, 2016, we lost out son Gunnar Swager due to an auto accident. For his celebration of life gathering, we requested family and friends to bring stuffed animals instead of flowers. The week before his passing, he was home for Christmas from Seattle and expressed to us that he wanted to create a stuffed animal that was different for children, so they would have something to open on Christmas. The stuffed animals from his memorial service, numbering in the thousands, were donated to various Shriner Hospitals throughout the USA and Law enforcement/emergency response agencies in our community. Currently, we are in the process of forming a working relationship with local law enforcement and emergency responders. The goal in this formation is to provide teddy bears to children in crisis situations, to help them feel more secure and stable in the midst of a stressful event.
          </p>
          <p>Gunnar passed before we could brainstorm properly on this project. Later on, in June 2018 I dusted off our book shelf and found a book he had written as a child, "The Blue Devil". In that moment, as we read it again, years after its creation, we knew that we had to make this book a part of our project. At age 11, it was Gunnar's dream to have this book published. Our determination combined with your support will allow us to see this project through to completion
          </p>
          <p>We have set our realistic goal to have "The Blue Devil-Adventures in Topsy Turvy Town" available for sale on Amazon in October 2019
          </p>
          <p>The proceeds from the sale of this book will help support our mission
          </p>
          <p>Other fundraising sources for the foundation will come from donations online, merchandise sales, and fundraising events.
          </p>
          
        
        </div>
      </div>
    </Parallax>
    </div>
  );
 }
 
 export default About;
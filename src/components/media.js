import React from 'react';
import { Parallax, Background } from 'react-parallax';
import YouTubePlayer from './mediaPlayer';
import '../style/media.css';
import image from '../media/interview.jpg';

const Media = (props) => {
  return (
    <div id="media" >
   
   
      <div className="mediaBackground">
        <div className="insideDiv media">
          <h4>Media</h4>
          <p>Here we will have links to media interviews etc.</p>
          <p>We can have frames with the media already there</p>
          <YouTubePlayer />
          
        
        </div>
      </div>
    
    </div>
  );
 }
 
 export default Media;
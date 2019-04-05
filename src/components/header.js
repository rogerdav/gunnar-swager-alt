import React from 'react';
import logo1 from '../media/logo.png';
import '../style/header.css'

const Header = (props) => {
  console.log('this is props in header', props.scrolling);
 return (
   <div className="header">
     {/* <div className="headerTitle"> */}
     <img className="headerLogo" src={logo1} alt="logo"></img>
     {/* <h1>Gunnar Swager Foundation</h1> */}
     <h1>'Comfort for Kids in crisis'</h1>

     {/* </div> */}
     {/* <ul className={props.scrolling ? 'notShowing' : 'showing'} */}
     {/* <ul 
          style={{display: 'none' }}
          >
       <li>
       <a href="#about" >Home</a>
       </li>
       <li>
         <a href="#help" >How you can help</a>
       </li>
       <li>
         <a href="#events" >Events</a>
       </li>
       <li>
         <a href="#media" >Media</a>
       </li>
       <li>
         <a href="#sponsors" >Foundation Friends</a>
       </li>
       <li>
         <a href="#about" >About Gunnar</a>
       </li>
       <li>
         <a href="#contact" >Contact</a>
       </li>
     </ul> */}
   </div>
 );
}

export default Header;
import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import '../style/menu.css';
import {Link} from 'react-router-dom';
 
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.closeMenu = this.closeMenu.bind(this);
  }
  showSettings (event) {
    event.preventDefault();
    
  }
  closeMenu() {
    this.setState({
      menuOpen: false
    })
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
 
  render () {
    return (
      <Menu 
      noOverlay
      isOpen={this.state.menuOpen}
      >
        <Link id="homemenu" 
           onClick={() => this.closeMenu()}
          //  onStateChange={(state) => this.handleStateChange(state)}
          className="menu-item" 
          to='/'>The Foundation</Link>
        
        <Link id="helpmenu" 
            onClick={() => this.closeMenu()}
            // onStateChange={(state) => this.handleStateChange(state)}
            className="menu-item" 
            to='/help'>How you can help</Link>
        <Link id="eventmenu" 
            onClick={() => this.closeMenu()}
            // onStateChange={(state) => this.handleStateChange(state)}
            className="menu-item" 
            to='/events'>Events</Link>
        <Link id="mediamenu" 
            onClick={() => this.closeMenu()}
            // onStateChange={(state) => this.handleStateChange(state)}
            className="menu-item" 
            to='/media'>Media</Link>
        <Link id="sponsormenu" 
            onClick={() => this.closeMenu()}
            // onStateChange={(state) => this.handleStateChange(state)}
            className="menu-item" 
            to='/sponsors'>Friends of the foundation</Link>
        <Link id="gunnarmenu" 
            onClick={() => this.closeMenu()}
            // onStateChange={(state) => this.handleStateChange(state)}
            className="menu-item" 
            to='/gunnar'>About Gunnar Swager</Link>
        <Link id="contactmenu" 
            onClick={() => this.closeMenu()}
            // onStateChange={(state) => this.handleStateChange(state)}
            className="menu-item" 
            to='/contact'>Contact</Link>
      </Menu>
    );
  }
}
export default Example;

import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import '../style/menu.css';
 
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
        <a id="homemenu" 
           onClick={() => this.closeMenu()}
           onStateChange={(state) => this.handleStateChange(state)}
          className="menu-item" 
          href="#about">The Foundation</a>
        <a id="helpmenu" 
            onClick={() => this.closeMenu()}
            onStateChange={(state) => this.handleStateChange(state)}
            className="menu-item" 
            href="#help">How you can help</a>
        <a id="eventmenu" 
            onClick={() => this.closeMenu()}
            onStateChange={(state) => this.handleStateChange(state)}
            className="menu-item" 
            href="#events">Events</a>
        <a id="mediamenu" 
            onClick={() => this.closeMenu()}
            onStateChange={(state) => this.handleStateChange(state)}
            className="menu-item" 
            href="#media">Media</a>
        <a id="sponsormenu" 
            onClick={() => this.closeMenu()}
            onStateChange={(state) => this.handleStateChange(state)}
            className="menu-item" 
            href="#sponsors">Friends of the foundation</a>
        <a id="gunnarmenu" 
            onClick={() => this.closeMenu()}
            onStateChange={(state) => this.handleStateChange(state)}
            className="menu-item" 
            href="#gunnar">About Gunnar Swager</a>
        <a id="contactmenu" 
            onClick={() => this.closeMenu()}
            onStateChange={(state) => this.handleStateChange(state)}
            className="menu-item" 
            href="#contact">Contact</a>
      </Menu>
    );
  }
}
export default Example;

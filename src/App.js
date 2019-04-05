import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Events from './components/events';
import Media from './components/media';
import Contact from './components/contact';
import Purchase from './components/purchase';
import Sponsors from './components/sponsors';
import Footer from './components/footer';
import Donate from './components/donate-button';
import Example from './components/menu';
import Gunnar from './components/gunnar';
import Test from './components/test-component-sidepics';
import Carousel from './components/carousel';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
    };
    // this.handleScroll = this.handleScroll.bind(this);
  }
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }
  // handleScroll(event) {
  //   if (window.scrollY === 0 && this.state.scrolling === true) {
  //       this.setState({scrolling: false});
  //   }
  //   else if (window.scrollY !== 0 && this.state.scrolling !== true) {
  //       this.setState({scrolling: true});
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Example />
        <Header scrolling={this.state.scrolling} pageWrapId={ "menuBody" }/>
        <div className="appBody" id="menuBody">
        <About />
        <h1>| | |</h1>
        <Purchase />
        <h1>| | |</h1>
        <Events />
        <h1>| | |</h1>
        <Media />
        <h1>| | |</h1>
        <Sponsors />
        <h1>| | |</h1>
        <Carousel />
        
        <Donate />
        <h1>| | |</h1>
        <Contact />
        {/* <Gunnar /> */}
        {/* <h1>| | |</h1> */}
        {/* <Test />
        <h1>| | |</h1> */}
        {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Banner from './Banner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="Title">NegraTec</h1>
        <Banner></Banner>
      </div>
    );
  }
}

export default App;

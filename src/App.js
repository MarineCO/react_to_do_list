import React, { Component } from 'react';
//import './App.css';
import Items from './Items';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Items />
          <Form />
      </div>
    );
  }
}

export default App;

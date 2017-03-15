import React, { Component } from 'react';
//import './App.css';
import Form from './Form';
import Items from './Items';


class App extends Component {

 constructor(props) {
    super(props);
      this.state = {
        items: [
          {
            id:1,
            content:"Work React"
          },
          {
            id:2,
            content:"Work React"
          },
          {
            id:3,
            content:"Work React"
          },
          {
            id:4,
            content:"Work React"
          }
        ]
      }
    }

  onSubmit = (newItem) => {
    let myNewItems = Object.assign([], this.state.items);
    myNewItems.push(newItem);

    this.setState({
      items: myNewItems
    });
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.onSubmit} />
        <Items items={this.state.items} />
      </div>
      );
  }
}

export default App;

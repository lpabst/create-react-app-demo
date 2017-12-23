import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Jack',
      age: 88
    }
  }

  //javascript
  updateName(str){
    this.setState({
      name: str
    });
  }

  render() {
    //javascript
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello World!
        </p>

        <div className='lorens_div'>
          <input value={this.state.name} onChange={(e) => this.updateName(e.target.value)} />
        </div>

      </div>
    );
  }
}

export default App;

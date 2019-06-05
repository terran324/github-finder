import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Nicholas';
    const loading = false;
    const showName = true;
    
    return (
      <div className="App">
        {loading ? <h1>Loading...</h1> : <h1> Hello {showName && name}</h1>}
      </div>
    );
  }
}

export default App;

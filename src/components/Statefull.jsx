import React from 'react';
import '../App.css';

// class based component >> -16.8 --> statefull component
class Statefull extends React.Component {

  constructor () {
    super();
  
    // update only with this.setState method.
    this.state = {
      name: 'Node.js'
    }
  }

  render() {
    return (
      <div className="App">
        <h1> Hello {this.state.name} ! </h1>
      </div>
    );
  }
}

export default Statefull

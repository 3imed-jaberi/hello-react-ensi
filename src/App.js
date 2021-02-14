// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// class based component >> -16.8 --> statefull component
// class Application extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1> Hello React.js - Ensi </h1>
//       </div>
//     );
//   }
// }

// functional based component >> -16.8 --> stateless component
// const App = () => (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );

// export { Application, App };

import Statefull from './components/Statefull'
import Text from './components/Text'

const App = () => {
  return (
    <div>
      <Statefull />
      <Text />
    </div>
  )
}

export default App

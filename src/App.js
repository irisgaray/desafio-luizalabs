import React, { Component } from 'react';
import './App.css';

import ConsultaCEP from './container/consulta-cep';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ConsultaCEP />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Mapa from '../component/mapa';
import Aux from '../hoc/Auxiliar';
import classes from  './consultaCEP.css';

class ConsultaCEP extends Component {
  
  state = {
    cepFound: false,
    cep: '',
    cepResult: {}
  };

  // componentDidMount() {
  // }

  changeHandler = (event) => {

    let newState = {...this.state};
    newState.cep = event.target.value;

    this.setState({cep: newState.cep}); 
  };

  submitHandler = (event) => {

    event.preventDefault();
    
    let cep = this.state.cep;

    if(cep.length !== 8) {
      console.log('CEP incorrect');
      this.setState({cepFound: false});
      return new Error();
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`, {
      callback: 'myFn'
    })
      .then(res => {
        return res.json();
      })
      .then(parsedJSON => {
        this.setState({cepResult: {...parsedJSON}, cepFound:true})
        // this.findLocation(this.state.cep);
      })
      .catch(error => {
        console.log(`Can't fetch data from API: ${error}`);
      });

  };

  render() {

    return (
      <Aux>
        <div className = {classes.ConsultaCEP}>
          <form onSubmit = {(event) => {this.submitHandler(event)}}>
            <label className = {classes.Label} >Consultar</label>
            <label>CEP</label>
            <input type = "text" className =  {classes.Input} placeholder = "00000000" value = {this.state.cep} onChange = {(event) => {this.changeHandler(event)}}/>
            <button className = {classes.Button}>Buscar</button>
          </form>         
        </div>
        <Mapa 
          logradouro = {this.state.cepResult.logradouro}
          bairro = {this.state.cepResult.bairro}
          cep = {this.state.cepResult.cep}
          localidade = {this.state.cepResult.localidade}
          uf = {this.state.cepResult.uf}
          completeResult = {{...this.state.cepResult}}
          cepFound = {this.state.cepFound}
        />
      </Aux>
    );

  }; 
};

export default ConsultaCEP;
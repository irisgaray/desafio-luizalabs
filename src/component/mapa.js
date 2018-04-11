import React from 'react';   

import classes from './mapa.css';
import Aux from '../hoc/Auxiliar';

const mapa = (props) => {

  let cepResult = (
      <p className = {classes.Text}>Insert a CEP to make a consult...</p>
  );

  if(props.cepFound) {
    cepResult = (
      <Aux>
        <h3>{props.logradouro}</h3>
        <p>{props.bairro}</p>
        <p>{props.localidade} - {props.uf}</p>
        <p>{props.cep}</p>
      </Aux>
    )
  }

  return (
    <div className = {classes.Mapa}>
      {cepResult}
    </div>
  );
}

export default mapa;
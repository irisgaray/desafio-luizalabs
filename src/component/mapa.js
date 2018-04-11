import React from 'react';   

import classes from './mapa.css';
import Aux from '../hoc/Auxiliar';

const mapa = (props) => {

  const mapKey = `AIzaSyCPx1FLbQRtzRYJgPTJtbH4aKWanSwJ34E`;

  let cepResult = (
      <p className = {classes.Text}>Insert a CEP to make a consult...</p>
  );


  if(props.cepFound) {

    if(props.logradouro){

      let url = `https://www.google.com/maps/embed/v1/place?q=${props.cep}&key=${mapKey}`;
      
      cepResult = (
        <Aux>
          <h3>{props.logradouro}</h3>
          <p>{props.bairro}</p>
          <p>{props.localidade} - {props.uf}</p>
          <p>{props.cep}</p>

          <iframe className = {classes.Iframe}
            src = {url}
          >
          </iframe>
        </Aux>
      )
    } else {
      cepResult = (<p className = {classes.NotFound}>CEP not found!</p>);
    }
  }

  return (
    <div className = {classes.Mapa}>
      {cepResult}
    </div>
  );
}

export default mapa;
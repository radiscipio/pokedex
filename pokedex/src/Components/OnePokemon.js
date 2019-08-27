import React from 'react';
import '../App.css'

function OnePokemon(props) {


  if (props.currentPokemon && props.species) {
    const {name, sprites, height, weight, types} = props.currentPokemon;
    const {genera} = props.species

    return (
      <React.Fragment className='onePokemon'>
          <div>
            <img src={sprites.front_default} />
            <img src={sprites.front_shiny} />
            <h3>{name}</h3>
          </div>
          <div>
            <h3>Height: {height}</h3>
            <h3>Weight: {weight}</h3>
            <h3>Type: {types.map(type => <span>{type.type.name} </span>)}</h3>
            <h3>{genera[2].genus}</h3>
          </div>
          <button>Add to Team</button>
      </React.Fragment>
      )
  } else {
    return (
      <div></div>
    )
  }
}

export default OnePokemon;

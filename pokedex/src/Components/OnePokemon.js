import React from 'react';
import '../App.css'

function OnePokemon(props) {


  if (props.currentPokemon && props.species) {
    const {name, sprites, height, weight, types} = props.currentPokemon;
    const {genera} = props.species

    return (
      <div className='onePokemon'>
        <div className='sprite-and-name'>
          <img src={sprites.front_default} />
          <img src={sprites.front_shiny} />
          <h3 className='apiName'>{name}</h3>
        </div>
        <div>
          <h3>Height: {height}</h3>
          <h3>Weight: {weight}</h3>
          <h3>Type: {types.map(type => <span>{type.type.name} </span>)}</h3>
          <h3>{genera[2].genus}</h3>
          <button
            onClick={props.addToTeam}
          >Add to Team</button>
        </div>
      </div>
      )
  } else {
    return (
      <div></div>
    )
  }
}

export default OnePokemon;

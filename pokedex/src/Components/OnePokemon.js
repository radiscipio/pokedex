import React from 'react';

function OnePokemon(props) {

  if (props.currentPokemon) {
    const {name, sprites, height, weight, types} = props.currentPokemon;

    // const {flavor_text, genera} = props.species

    return (
      <React.Fragment>
      <div>
        <div>
          <img src={sprites.front_default} />
          <img src={sprites.front_shiny} />
          <h3>{name}</h3>

        </div>
        <div>
          <h3>Height: {height}</h3>
          <h3>Weight: {weight}</h3>
          <h3>Type: {types[0].type.name}</h3>
        {/*  <h3>The {genera} Pokemon</h3> */}
        </div>
        <div>
        {/* <h3>{flavor_text}</h3> */}
        </div>
        <button>Add to Team</button>
      </div>
      </React.Fragment>
      )
  } else {
    return (
      <div></div>
    )
  }
}

export default OnePokemon;

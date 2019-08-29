import React from 'react';

function OnePokemon(props) {


  if (props.currentPokemon && props.species) {
    const {name, sprites, height, weight, types} = props.currentPokemon;
    const {genera} = props.species

    return (
      <div className='onePokemon'>
        <div className='sprite-and-name'>
          <img src={sprites.front_default} />
          <img src={sprites.front_shiny} />
          <h3>{name}</h3>
        </div>
        <div>
          <h3>Height: {height}</h3>
          <h3>Weight: {weight}</h3>
          <h3>Type: {types.map(type => <span>{type.type.name} </span>)}</h3>
          <h3>{genera[2].genus}</h3>
          <button
            onClick={(e) => {
              const team = JSON.parse(localStorage.getItem('team'));
              if (!team || team.length < 6){
                props.addToTeam({name,image: sprites.front_default})
                if(team) {
                  localStorage.setItem('team', JSON.stringify([...team, {name,image: sprites.front_default}]))
                } else {
                  localStorage.setItem('team', JSON.stringify([{name,image: sprites.front_default}]))
                }
              } else {
                alert(`You can only have six Pokémon`)
              }
            }}
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

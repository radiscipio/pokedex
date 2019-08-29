import React from 'react'

function MyTeam(props) {

  const {name, sprites, height, weight, types} = props.myTeam;

  return (
    <div className='myTeam'>{props.myTeam.map(pokemon => (
      <div className='teamMember'>
        <img src={pokemon.image} />
        <h3>{pokemon.name}</h3>
        <button
          onClick={(e) => {
            const team = JSON.parse(localStorage.getItem('team'));
            if (team){
              console.log(props)
              props.removeFromTeam(pokemon)
              
            }
          }}
        >Remove</button>
      </div>
    ))}</div>
  )
}

export default MyTeam

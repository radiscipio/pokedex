import React from 'react'
import Header from './Header'

function Faves(props) {
  console.log(props.location.state.favs)
  let favs = props.location.state.favs.length !==0 && <div> {props.location.state.favs[0].height}</div>
  return(
    <div>

      <h2 className="myTeam">My Team</h2>
      {favs}
    </div>
  )
}

export default Faves

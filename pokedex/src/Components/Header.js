import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Faves from './Faves'

function Header(props) {
  console.log(props)
    return (
        <div className='navbar'>
        <img className='pikachu'
          src={require("../pikachu.gif")} />
          <Link to ='/Main'>Pokédex</Link>
          <img
            className="logo"
            src={require("../pokemon-logo.png")} />

          <h2 className="myTeam" onClick={props.favorites}>My Team</h2>
        </div>

    )

}

export default Header

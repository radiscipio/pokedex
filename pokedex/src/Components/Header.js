import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Faves from './Faves'

function Header() {

    return (
        <div className='navbar'>
        <img className='pikachu'
          src={require("../pikachu.gif")} />
          <Link to ='/Main'>Pokedex</Link>
          <img
            className="logo"
            src={require("../pokemon-logo.png")} />
          <Link to ='/Faves'>My Team</Link>
        </div>

    )

}

export default Header

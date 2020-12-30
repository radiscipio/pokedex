/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, Redirect } from 'react-router-dom'

function Header() {

  return (
    <div className='navbar'>
    <img className='pikachu'
      alt="Dancing Pikachu"
      src={require("../pikachu.gif")} />
      <Link to ='/'>Pokédex</Link>
      <img
        alt="Pokémon Logo"
        className="logo"
        src={require("../pokemon-logo.png")} />
      <Link to='/MyTeam'>My Team</Link>
    </div>
  )
}

export default Header

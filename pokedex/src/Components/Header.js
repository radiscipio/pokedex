import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Faves from './Faves'

function Header() {

    return (
      <div className='navbar'>
        <Link to ='/Main'>Pokedex</Link>
        <Link to ='/Faves'>My Team</Link>
        <Switch>
          <Route
          path='/Main'
          component={Main} />
          <Route
          path='/Faves'
          component={Faves} />
        </Switch>
      </div>
    )

}

export default Header

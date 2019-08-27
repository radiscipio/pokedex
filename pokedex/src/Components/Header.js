import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Faves from './Faves'

class Header extends React.Component {
  state = {

  }


  render() {

    let linkStyles = {
      margin: '10px'
    }
    return (
      <div>
        <Link style="linkStyles"
          to ='/Main'>Pokedex</Link>
        <Link style="linkStyles"
          to ='/Faves'>My Team</Link>
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
}

export default Header

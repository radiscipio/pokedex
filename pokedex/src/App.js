import React, { Component } from 'react';
import OnePokemon from './Components/OnePokemon'
import Main from './Components/Main'
import Header from './Components/Header'
import { Link, Route, Switch } from 'react-router-dom'
import Faves from './Components/Faves'

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return(
     <React.Fragment>
      <div>
       </div>
       <div styles="routeStyles">
         <Link to ='/Main'>Pokedex</Link>
         <Link to ='/Faves'>My Team</Link>
         <Switch>
           <Route path='/Main' component={Main} />
           <Route path='/Faves' component={Faves} />
         </Switch>
       </div>
     </React.Fragment>
    )
  }
}

export default App

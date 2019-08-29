import React, { Component } from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'
import OnePokemon from './Components/OnePokemon'


class App extends Component  {
  render() {

    return(
     <React.Fragment>

      <div className='appStyle'>
       <div styles="routeStyles">
       <Header />
         <Switch>
          <Route path='/Main' component={Main} />
          <Redirect from='/' to='/Main' />
         </Switch>
          <Footer />
        </div>
      </div>
     </React.Fragment>
    )
  }
}

export default App

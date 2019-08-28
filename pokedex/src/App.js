import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Konami from 'react-konami-code'
import Header from './Components/Header'
import Faves from './Components/Faves'
import Footer from './Components/Footer'
import Main from './Components/Main'
import OnePokemon from './Components/OnePokemon'


class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return(
     <React.Fragment>

      <div className='appStyle'>
       <div styles="routeStyles">
       <Header />
         <Switch>
           <Route path='/Main' component={Main} />
           <Route path='/Faves' component={Faves} />
         </Switch>
          <Footer />
        </div>
      </div>
     </React.Fragment>
    )
  }
}

export default App

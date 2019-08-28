import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Konami from 'react-konami-code'
import Header from './Components/Header'
import Faves from './Components/Faves'
import Footer from './Components/Footer'
import Main from './Components/Main'

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  favorites = () => {
    console.log('in fav func')
    this.setState({
      favesClicked:true
    })
  }
  render() {

    return(
     <React.Fragment>
     <Header favorites={this.favorites}/>
      <div className='appStyle'>
       <div styles="routeStyles">
         <Switch>

           <Route path='/Faves' component={Faves} />
           <Route exact path='/Main' render={(props) => <Main {...props} favesClicked={this.state.favesClicked} />} />
         </Switch>
          <Footer />
        </div>
      </div>
     </React.Fragment>
    )
  }
}

export default App

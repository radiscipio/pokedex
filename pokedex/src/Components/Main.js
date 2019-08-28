import React, { Component } from 'react';
import axios from 'axios'
import '../App.css'
import OnePokemon from './OnePokemon'
import Faves from './Faves'

import { Redirect } from 'react-router-dom'

class Main extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: "https://pokeapi.co/api/v2/pokemon?limit=151",
      pokedex: [],
      myTeam: [],
      currentPokemon: null,
      isShowingMore: false,
      species: null,
      clicked:false
    }
  }

  getAllPokes = async () => {
    let pokeUrl = this.state.baseUrl
    let data = await axios(pokeUrl)
    this.setState(prevState => ({
      pokedex: data.data.results
    }))
  }

  componentDidMount() {
    this.getAllPokes()
  }

  handleClick = async (pokeUrl) => {
      let pokeData = await axios(pokeUrl)
        this.setState({
          currentPokemon: pokeData.data
        })

      let pokeSpecies = await axios (pokeData.data.species.url)
      this.setState(prevState => ({
        species: pokeSpecies.data
      }))
  }

    addToTeam = (event) => {
      event.preventDefault()
      console.log(event.target.name);
      this.setState({
        clicked:true

      })
      this.state.myTeam.push(this.state.currentPokemon)
      console.log(this.state.currentPokemon)



      // this.setState(prevState => ({
      //   myTeam: [...prevState.myTeam, pokemon]
      // }))

    }

    removeFromTeam = (index) => {
      this.setState((prevState) => ({
        myTeam:
          prevState.myTeam.filter((d,i) =>
            i !== index)
      }))
    }


  render() {
    console.log(this.state)
    let faves = this.props.favesClicked === true &&
      <Redirect to={{
        pathname: './Faves',
        state: {favs:this.state.myTeam}
      }}/>


    let pokemon = this.state.pokedex.map( (d,i) => {
      return (
          <div className='name'
          onClick={() => this.handleClick(d.url)}>
            <div key={i}>
              {d.name}
            </div>
            <img
              className="pokeball"
              src={require("../closed-pokeball-color.png")} />
          </div>

    )}
  )


   return(
    <>

      <div className='container'>
        <div className='leftScreen'>
          <h2 className='pokemonNames'>{pokemon}</h2>

        </div>
        <div>
          <OnePokemon
            addToTeam={this.addToTeam}
            currentPokemon={this.state.currentPokemon}
            species={this.state.species}
            />
        </div>
        {faves}
      </div>
    </>
   )
  }
}

export default Main

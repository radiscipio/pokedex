import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Route } from 'react-router-dom'
import '../App.css'
import Konami from 'react-konami-code'
import OnePokemon from './OnePokemon'
import MyTeam from './MyTeam'

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
    }
  }
 //API call to get Pokémon data
  getAllPokes = async () => {
    let pokeUrl = this.state.baseUrl
    let data = await axios(pokeUrl)
    this.setState(prevState => ({
      pokedex: data.data.results
    }))
    return data.data.results
  }

  // Set team in local storage
  async componentDidMount() {
    const pokemen = await this.getAllPokes()
    const team = JSON.parse(localStorage.getItem('team'));
    if (team) {
      this.setState({
        myTeam: team
      })
    }
  }

  // API call to get Pokemon info on click
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

  // Add to Team Component
    addToTeam = (pokemon) => {
      this.setState(prevState => ({
        myTeam: [...prevState.myTeam, pokemon]
      }))
    }

  // Remove from Team Component
    removeFromTeam = (removePokemon) => {
      this.setState((prevState) => ({
        myTeam:
          prevState.myTeam.filter((d) =>
            d !== removePokemon)
      }), () => localStorage.setItem('team', JSON.stringify(this.state.myTeam))
      )
    }

  render() {
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
      )
    }
  )

   return (
    <>
      <Route exact path='/Main' render={() => (
        <div className='container'>
          <div className='leftScreen'>
            <h2
            className='pokemonNames'
            >{pokemon}</h2>
          </div>
          <div>
            <OnePokemon
              addToTeam={this.addToTeam}
              currentPokemon={this.state.currentPokemon}
              species={this.state.species}
              />
          </div>
        </div>
      )}/>
      <Route path ='/Main/MyTeam' render={() => (
        <MyTeam
        myTeam={this.state.myTeam}
        removeFromTeam={this.removeFromTeam}/>
      )}
      />
    </>
   )
  }
}

export default Main

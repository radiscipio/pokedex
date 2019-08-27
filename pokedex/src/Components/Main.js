import React, { Component } from 'react';
import axios from 'axios'
import '../App.css'
import OnePokemon from './OnePokemon'


class Main extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: "https://pokeapi.co/api/v2/pokemon?limit=151",
      pokedex: [],
      myTeam: [],
      currentPokemon: null,
      isShowingMore: false,
      species: null
    }
  }

  getAllPokes = async () => {
    let pokeUrl = this.state.baseUrl
    let data = await axios(pokeUrl)
    this.setState(prevState => ({
      pokedex: data.data.results
    }))
    console.log('pokemon', this.state.pokedex)
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

  render() {
    let pokemon = this.state.pokedex.map( (d,i) => {
      return (
        <div
        key={i}
        onClick={() => this.handleClick(d.url)}
        >{d.name}
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
            currentPokemon={this.state.currentPokemon}
            species={this.state.species}
            />
        </div>
      </div>
    </>
   )
  }
}

export default Main

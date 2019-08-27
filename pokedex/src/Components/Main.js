import React, { Component } from 'react';
import axios from 'axios'
import OnePokemon from './OnePokemon'

class Main extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: "https://pokeapi.co/api/v2/pokemon?limit=151",
      pokedex: [],
      currentPokemon: null,
      isShowingMore: false
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
        species: pokeSpecies.results
      }))
      console.log(pokeSpecies)
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

  let container = {
    display: 'flex',
    justifyContent: 'space-between'
  }
  let leftScreen = {
    display: 'flex',
    marginLeft: '100px'
  }

  let pokeNames = {
    flexDirection: 'column',
    border: '1px solid black',
    padding: '20px',
    overflowY: 'scroll',
    height: '85vh'
  }

  let onePokemonStyle = {
    position: 'fixed',
    right: '150px',
    top: '30px',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px'
  }

   return(
    <>
      <div style={container}>
        <div style={leftScreen}>
          <h2 style={pokeNames}>{pokemon}</h2>
        </div>
        <div style={onePokemonStyle}>
          <OnePokemon
            currentPokemon={this.state.currentPokemon}/>
        </div>
      </div>
    </>
   )
  }
}

export default Main

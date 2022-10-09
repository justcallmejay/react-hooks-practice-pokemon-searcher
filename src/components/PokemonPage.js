import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

const [pokemon, setPokemon] = useState([])
const [findPoke, setFindPoke] = useState('')

useEffect(() => {
  fetch('http://localhost:3001/pokemon')
  .then(res => res.json())
  .then(pokemon => setPokemon(pokemon))
}, [])


  const findThatPokemon = pokemon.filter((poke) => 
    poke.name.toLowerCase().includes(findPoke.toLowerCase()))

console.log(pokemon)

function handleAddPokemon(inputNew) {
  setPokemon(poke => {
    return [...poke, inputNew]
  })
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddPokemon={handleAddPokemon} setPokemon={setPokemon}/>
      <br />
      <Search setFindPoke={setFindPoke} findPoke={findPoke}/>
      <br />
       
      <PokemonCollection pokemon={pokemon} findThatPokemon={findThatPokemon}/>
    </Container>
  );
}

export default PokemonPage;

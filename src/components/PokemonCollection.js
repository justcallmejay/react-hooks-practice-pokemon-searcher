import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( { findThatPokemon } ) {
  return (
    <Card.Group itemsPerRow={6}>

      {findThatPokemon.map(poke =>
      <PokemonCard poke={poke} key={poke.id}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;

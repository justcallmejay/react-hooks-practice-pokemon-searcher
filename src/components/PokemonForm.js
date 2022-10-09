import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( { handleAddPokemon } ) {

  const [newPokemon, setNewPokemon] = useState(null)

function handleNewPoke(e) {
  setNewPokemon({
    ...newPokemon,
    [e.target.name]: e.target.value
  })
  console.log(newPokemon)
}

function handleSubmit() {
  let newPokeForm = {
    name: newPokemon.name,
    hp: parseInt(newPokemon.hp),
      sprites: {
        front: newPokemon.frontURL,
        back: newPokemon.backURL
       },
  }
  fetch('http://localhost:3001/pokemon', {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(newPokeForm)
  })
  .then(res => res.json())
  .then(res => {
    console.log("Success:", res);
    handleAddPokemon(res);
  // setNewPokemon(newPokeForm);
})
  .catch(error => {console.log("Error:", error)})
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={handleNewPoke}
            />
          <Form.Input 
          fluid label="hp" 
          placeholder="hp" 
          name="hp"
           onChange={handleNewPoke}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name='frontURL'
            onChange={handleNewPoke}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backURL"
            onChange={handleNewPoke}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

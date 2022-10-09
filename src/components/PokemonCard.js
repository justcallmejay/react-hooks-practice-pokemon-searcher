import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( { poke } ) {

  const {name, hp, sprites} = poke

  const [isFront, setIsFront] = useState(true)

  function clickSprite() {
    setIsFront(!isFront)
  }

  const [addHP, setAddHP] = useState(hp)
  const potion = addHP + 30

  function giveHP() {
    setAddHP(potion)
  }

  return (
    <Card onClick={clickSprite}>
      <div>
        <div className="image" >
          {
          isFront ? <img src={sprites.front} alt="oh no!" /> : 
          <img src={sprites.back} alt="oh yes!" />
          }
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" onClick={giveHP}/>
            {addHP} +HP
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

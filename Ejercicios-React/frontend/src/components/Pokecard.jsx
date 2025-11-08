import { useState } from "react";

const PokeCard = ({pokemon}) => {
    const [isShiny, setIsShiny] = useState(false);

    return (
        <div >
            <img src={isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <p>ID: {pokemon.id}</p>
            <p>Peso: {pokemon.weight}</p>
            <button onClick={() => setIsShiny(!isShiny)} >Shiny</button>
        </div>
    )

}

export default PokeCard;
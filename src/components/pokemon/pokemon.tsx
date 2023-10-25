'use client'
import "./pokemon.css";
import {PokemonModel} from "../../models/pokemon.ts";
export default function Pokemon({pokemon, handleClick} : {pokemon: PokemonModel, handleClick: () => void}) {
    return (
        <div className="pokemon-card" onClick={handleClick}>
            <h1>Pokemon</h1>
            <div>
                Id: {pokemon.id}
            </div>
            <div>
                Name: {pokemon.name}
            </div>
            <div>
                Url: {pokemon.url}
            </div>
        </div>
    )
}
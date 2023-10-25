'use client'
import "./selected-pokemon.css";
import {PokemonModel} from "../../models/pokemon.ts";
export default function SelectedPokemon({pokemon} : {pokemon : PokemonModel}) {
    return (
        <div className="pokemon-card">
            <h1>Pokemon Actual : {pokemon.name}</h1>
        </div>
    )
}
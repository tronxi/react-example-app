'use client'


import React, {ChangeEvent, useContext, useEffect, useState} from "react";
import {PokemonContext} from "../pokemon-context.ts";
import {PokemonModel} from "../../models/pokemon.ts";
import {retrieveAll} from "../../services/pokemon-client.ts";
import Pokemon from "../../components/pokemon/pokemon.tsx";
import {Link} from "react-router-dom";

export default function PokemonList() {
    const [pokemonComponents, setPokemonComponents] = useState<React.JSX.Element[]>([]);
    const [pokemonModels, setPokemonModels] = useState<PokemonModel[]>([]);
    const [_, setContext] = useContext(PokemonContext);

    useEffect(() => {
        retrieveAll().then(response => {
            setPokemonModels(response)
            setPokemonComponents(response
                .map(pokemon => <Pokemon
                    key={pokemon.id}
                    pokemon={{id: pokemon.id, name: pokemon.name, url : pokemon.url}}
                    handleClick={() => {
                        setContext(pokemon)
                    }}></Pokemon>));
        })
    }, []);

    function onFilter(e: ChangeEvent<HTMLInputElement>) {
        const filtered = pokemonModels.filter(value => value.name.includes(e.target.value));
        setPokemonComponents(filtered
            .map(pokemon => <Pokemon
                key={pokemon.id}
                pokemon={{id: pokemon.id, name: pokemon.name, url : pokemon.url}}
                handleClick={() => {console.log(pokemon.name)}}></Pokemon>));
    }

  return (
      <>
        <input onChange={onFilter} className="button"/>
          <div className="button">
              <Link to="/home/counter">Contador</Link>
          </div>
          <div>Pokemons</div>
          {pokemonComponents}
      </>
  )
}
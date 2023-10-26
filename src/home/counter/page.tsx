'use client'

import React, {useContext, useState} from "react";
import {PokemonContext} from "../pokemon-context.ts";
import {retrieveWithLimit} from "../../services/pokemon-client.ts";
import Pokemon from "../../components/pokemon/pokemon.tsx";
import {Link, useNavigate} from "react-router-dom";


export default function Counter() {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [pokemonComponents, setPokemonComponents] = useState<React.JSX.Element[]>([]);
    const [_, setContext] = useContext(PokemonContext);

  function handleClick() {
    setCount(count + 1);
    if(count > 5) {
      navigate('/home/pokemon-list')
    }
  }

  function useRetrievePokemon() {
       retrieveWithLimit(count).then(response => {
          setPokemonComponents(response
              .map(pokemon =><Pokemon
                  key={pokemon.id}
                  pokemon={{id: pokemon.id, name: pokemon.name, url : pokemon.url}}
                  handleClick={() => {
                      setContext(pokemon)
                  }}></Pokemon>));
      })
  }

  return (
      <>
          <div>
              Contador
          </div>
          <div>
              <button onClick={handleClick} className="button">
                  Clic {count} veces
              </button>
          </div>
          <div>
              <button onClick={useRetrievePokemon} className="button">
                  Recuperar
              </button>
          </div>
          <div>
              {pokemonComponents}
          </div>
        <div className="button">
          <Link to="/home/pokemon-list">Ver todos</Link>
        </div>
      </>
)
}
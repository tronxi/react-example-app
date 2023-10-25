'use client'

import React, {useContext, useState} from "react";
import {PokemonContext} from "../pokemon-context.ts";
import {retrieveWithLimit} from "../../services/pokemon-client.ts";
import Pokemon from "../../components/pokemon/pokemon.tsx";


export default function Counter() {
    const [count, setCount] = useState(0);
    const [pokemonComponents, setPokemonComponents] = useState<React.JSX.Element[]>([]);
    const [_, setContext] = useContext(PokemonContext);

  function handleClick() {
    setCount(count + 1);
    if(count > 5) {
      //router.push('/home/pokemon-list', { scroll: false })
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
          {/*<Link href="/home/pokemon-list">Cambiar a Pokemons</Link>*/}
        </div>
      </>
)
}
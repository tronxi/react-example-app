'use client'

import {useState} from "react";
import {PokemonModel} from "../models/pokemon.ts";
import { PokemonContext } from "./pokemon-context.ts";
import SelectedPokemon from "../components/selected-pokemon/selected-pokemon.tsx";
import {Outlet} from "react-router-dom";

export default function Home() {
  const [pokemonModel, setPokemonModel] = useState<PokemonModel>();

  return (<section>
    <nav className="nav">
      <p>Cosas comunes</p>
      {pokemonModel != undefined ?
          <SelectedPokemon pokemon={pokemonModel}></SelectedPokemon> :
          <span></span>}
    </nav>
    <PokemonContext.Provider value={[pokemonModel, setPokemonModel]}>
      <Outlet/>
    </PokemonContext.Provider>
  </section>)
}
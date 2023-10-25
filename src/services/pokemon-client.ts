import {PokemonModel} from "../models/pokemon.ts";


export async function retrieveAll(): Promise<PokemonModel[]> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
        .then(value => value.json());
    return response.results.map((pk: any, index: number) => {
        return {id: index, name: pk.name, url: pk.url}
    });
}
export async function retrieveWithLimit(limit: number): Promise<PokemonModel[]> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        .then(value => value.json());
    return response.results.map((pk: any, index: number) => {
        return {id: index, name: pk.name, url: pk.url}
    });
}
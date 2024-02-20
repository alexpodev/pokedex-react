import axios from "axios";
import { MoveDetalis, PokemonDetails } from '../shared/types/Pokemon';

export default async function fetchPokemonInfo(pokemonName: string) {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
    try {
        const response = await axios.get(`${apiUrl}/${pokemonName}`)
        console.log(response.data);
        const pokemonDetails: PokemonDetails = {
            name: response.data.name,
            sprite: response.data.sprites.front_default,
            id: response.data.id,
            types: response.data.types,
            stats: response.data.stats,
            weight: response.data.weight,
            height: response.data.height,
            abilities: response.data.abilities,
            moves: response.data.moves,
        }
        return pokemonDetails;
    } catch (error) {
        throw error
    }
}

export async function fetchPokemonMoveInfo(url: string) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
        const pokemonMove: MoveDetalis = {
            name: response.data.name,
            type: response.data.type
        }
        return pokemonMove;
    } catch (error) {
        throw error
    }
}
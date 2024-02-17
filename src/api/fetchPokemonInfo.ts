import axios from "axios";
import { PokemonDetails } from '../shared/types/Pokemon';

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
            stats: response.data.stats
        }
        return pokemonDetails;
    } catch (error) {
        throw error
    }
}
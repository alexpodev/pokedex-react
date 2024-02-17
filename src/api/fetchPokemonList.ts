import axios from 'axios';
import {Pokemon} from '../shared/types/Pokemon'

export default async function fetchPokemonList(offset: number, fetchSize: number) {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
    try {
        const response = await axios.get(`${apiUrl}?limit=${fetchSize}&offset=${offset}`);
        return response.data.results as Pokemon[];
  } catch (error) {
        throw error;
  }
}

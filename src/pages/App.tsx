import React, { useEffect, useState } from 'react';
import Searchbar from '../widgets/Searchbar/Searchbar';
import Card from '../widgets/Card/Card';
import axios from 'axios';
import "./App.css"
import fetchPokemonList from '../api/fetchPokemonList';

type Pokemon = {
  name: string,
  url: string,
  isVisible: boolean
}

function App() {
  const totalItems = 1302;
  const fetchSize = 20;

  const [search, setSearch] = useState('');
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log('click');
    }

  useEffect(() => {
     async function fetchData() {
      let allPokemonData: Pokemon[] = [];
      for (let offset = 0; offset < totalItems; offset += fetchSize) {
        try {
          const newData = await fetchPokemonList(offset, fetchSize);
          allPokemonData = [...allPokemonData, ...newData];
          setPokemonList(allPokemonData);
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchData();
  }, [])

  return (
    <div className="App">
      <>
        <Searchbar handleClick={handleClick} state={search} setState={handleInputChange}/>
        <div className="wrapper">
          {pokemonList
          .filter((pokemon) => {
            return search.toLowerCase() === "" ? pokemon : pokemon.name.toLowerCase().includes(search)
          })
          .map((pokemon, index) => {
                return (
                  <Card label={pokemon.name} url={pokemon.url} isVisible={pokemon.isVisible} key={index}/>
                )
              })}
        </div>
      </>
    </div>
  );
}

export default App;

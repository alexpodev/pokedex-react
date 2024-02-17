import React, { useEffect, useState } from 'react'
import styles from './PokemonInfo.module.css';
import fetchPokemonInfo from '../../api/fetchPokemonInfo';
import { PokemonDetails } from '../../shared/types/Pokemon';
import Tag from '../../shared/UI/Tag/Tag';
import { Params, useParams } from 'react-router-dom';
import { addLeadingZeros, firstLetterToUpperCase } from '../../utils/functions';

type Props = {}

const PokemonInfo = (props: Props) => {
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const { name } = useParams<Params>();

    useEffect(() => {
        async function fetchData() {
            const data = await fetchPokemonInfo(name || '');
            setPokemon(data);
        }

        fetchData()
    },[])

  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
        <div className={styles.headerContainer}>
            <div className={styles.headerText}>
                <h3 className={styles.pokemonName}>{firstLetterToUpperCase(pokemon?.name || '')}</h3>
                <p className={styles.pokemonId}>#{addLeadingZeros(pokemon?.id || 0, 3)}</p>
            </div>
            <div className={styles.tags}>
                {pokemon?.types.map((type) => {
                    return (
                        <Tag label={type.type.name} key={type.slot}/>
                    )
                })}
            </div>
        </div>
        <div className={styles.infoContainer}>
            <div className={styles.statsContainer}>
                {pokemon?.stats.map((stat) => {
                    return (
                        <div className="">{stat.stat.name}</div>
                    )
                })}
            </div>
            <div className={styles.imageContainer}>
                <img src={pokemon?.sprite} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default PokemonInfo
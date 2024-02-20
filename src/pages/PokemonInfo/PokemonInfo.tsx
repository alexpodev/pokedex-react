import React, { useEffect, useState } from 'react'
import styles from './PokemonInfo.module.css';
import fetchPokemonInfo from '../../api/fetchPokemonInfo';
import { PokemonDetails } from '../../shared/types/Pokemon';
import Tag from '../../shared/UI/Tag/Tag';
import { Params, useParams } from 'react-router-dom';
import { addLeadingZeros, firstLetterToUpperCase, numberToKilograms, numberToPounds, numberToFoots, numberToMeters } from '../../utils/functions';
import StatBlock from '../../shared/UI/StatBlock/StatBlock';
import AbilityCard from '../../shared/UI/AbilityCard/AbilityCard';
import MoveCard from '../../shared/UI/MoveCard/MoveCard';

type Props = {}
enum stats {hp="hp", attack="attack", defense="defense", speed="speed"}

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
    <>
    <header className={styles.header}>
        <button></button>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png" alt="" className={styles.pokeball}/>
    </header>
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
                    if(stat.stat.name in stats){
                        return (
                         <StatBlock stat={stat.base_stat} label={stat.stat.name} key={stat.stat.name}/>
                        )
                    }
                })}
            </div>
            <div className={styles.imageContainer}>
                <img src={pokemon?.sprite} alt="" />
            </div>
        </div>
    </div>
    <div className={styles.container}>
        <h3 className={styles.breedingsHeader}>Breeding</h3>
        <div className={styles.breedingsContainer}>
            <div className={styles.breedingsBlock}>
                <p>Height</p>
                <div className={styles.breedingsStats}>
                    <p>{numberToFoots(pokemon?.height || 1)}"</p>
                    <p>{numberToMeters(pokemon?.height || 1)} m</p>
                </div>
            </div>
            <div className={styles.breedingsBlock}>
                <p>Weight</p>
                <div className={styles.breedingsStats}>
                    <p>{numberToPounds(pokemon?.weight || 1)} lb</p>
                    <p>{numberToKilograms(pokemon?.weight || 1)} kg</p>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.container}>
        <h3 className={styles.breedingsHeader}>Moves</h3>
        <div className={styles.movesContainer}>
            {pokemon?.moves.map((move) => {
                return (
                    <MoveCard name={move.move.name} url={move.move.url}/>
                )
            })}
        </div>
    </div>
    <div className={styles.container}>
        <h3 className={styles.breedingsHeader}>Abilities</h3>
        <div className={styles.abilitiesContainer}>
            {pokemon?.abilities.map((ability) => {
                return(
                    <AbilityCard name={ability.ability.name} isHidden={ability.is_hidden}/>
                )
            })}
        </div>
    </div>
    </div>
    </>
  )
}

export default PokemonInfo
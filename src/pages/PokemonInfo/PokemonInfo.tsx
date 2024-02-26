import React, { useEffect, useState } from 'react'
import styles from './PokemonInfo.module.css';
import fetchPokemonInfo from '../../api/fetchPokemonInfo';
import { Ability, Move, PokemonDetails, Stat, Type } from '../../shared/types/Pokemon';
import { Params, useNavigate, useParams } from 'react-router-dom';
import PokemonInfoCard from '../../widgets/PokemonInfoCard/PokemonInfoCard';
import PokemonMetricCard from '../../widgets/PokemonMetricCard/PokemonMetricCard';
import PokemonMovesCard from '../../widgets/PokemonMovesCard/PokemonMovesCard';
import PokemonAbilitiesCard from '../../widgets/PokemonAbilitiesCard/PokemonAbilitiesCard';

type Props = {}


const PokemonInfo = (props: Props) => {
    
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const { name } = useParams<Params>();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const data = await fetchPokemonInfo(name || '');
            setPokemon(data);
        }

        fetchData()
    },[name])

  return (
    <>
    <div className={styles.headerContainer}>
        <div className={styles.header}>
            <button onClick={() => {navigate('/')}} className={styles.btn}><i className={`fa-solid fa-arrow-left ${styles.arrowIcon}`}></i></button>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png" alt="" className={styles.pokeball}/>
        </div>
    </div>
    <div className={styles.wrapper}>
        <div className={styles.row}>
            <div className={styles.column}>
                <PokemonInfoCard name={pokemon?.name || ''} id={pokemon?.id || 0} types={pokemon?.types || [] as Type[]} stats={pokemon?.stats || [] as Stat[]} sprite={pokemon?.sprite || ''} />
            </div>
            <div className={styles.column}>
                <PokemonMetricCard height={pokemon?.height || 1} weight={pokemon?.weight || 1}/>
                <PokemonMovesCard moves={pokemon?.moves || [] as Move[]}/>
            </div>
        </div>
        <div className={styles.row}>
            <PokemonAbilitiesCard abilities={pokemon?.abilities || [] as Ability[]}/>
        </div>
    </div>
    </>
  )
}

export default PokemonInfo
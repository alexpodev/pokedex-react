import React from 'react'
import styles from './PokemonInfoCard.module.css'
import { addLeadingZeros, firstLetterToUpperCase } from '../../utils/functions'
import { Stat, Type } from '../../shared/types/Pokemon'
import StatBlock from '../../shared/UI/StatBlock/StatBlock'
import Tag from '../../shared/UI/Tag/Tag'

type PokemonInfoCardProps = {
    name: string,
    id: number,
    types: Type[],
    stats: Stat[],
    sprite: string
}


const PokemonInfoCard = ({name, id, types, stats, sprite}: PokemonInfoCardProps) => {
    enum statsEnum {hp="hp", attack="attack", defense="defense", speed="speed"}
  
    return (
    <div className={styles.container}>
        <div className={styles.headerContainer}>
            <div className={styles.headerText}>
                <h3 className={styles.pokemonName}>{firstLetterToUpperCase(name || '')}</h3>
                <p className={styles.pokemonId}>#{addLeadingZeros(id || 0, 3)}</p>
            </div>
            <div className={styles.tags}>
                {types?.map((type) => {
                    return (
                        <Tag label={type.type.name} key={type.slot}/>
                    )
                })}
            </div>
        </div>
        <div className={styles.infoContainer}>
            <div className={styles.statsContainer}>
                {stats?.map((stat) => {
                    if(stat.stat.name in statsEnum){
                        return (
                         <StatBlock stat={stat.base_stat} label={stat.stat.name} key={stat.stat.name}/>
                        )
                    }
                })}
            </div>
            <div className={styles.imageContainer}>
                <img src={sprite} alt="" />
            </div>
        </div>
    </div>
  )
}

export default PokemonInfoCard
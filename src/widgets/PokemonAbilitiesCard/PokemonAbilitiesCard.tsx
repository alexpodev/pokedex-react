import React from 'react'
import AbilityCard from '../../shared/UI/AbilityCard/AbilityCard'
import styles from './PokemonAbilitiesCard.module.css'
import { Ability } from '../../shared/types/Pokemon'

type PokemonAbilitiesCardProps = {
    abilities: Ability[]
}

const PokemonAbilitiesCard = ({abilities}: PokemonAbilitiesCardProps) => {
  return (
    <div className={styles.container}>
        <h3 className={styles.abilitiesHeader}>Abilities</h3>
        <div className={styles.abilitiesContainer}>
            {abilities.map((ability) => {
                return(
                    <AbilityCard name={ability.ability.name} isHidden={ability.is_hidden} key={ability.slot}/>
                )
            })}
        </div>
    </div>
  )
}

export default PokemonAbilitiesCard
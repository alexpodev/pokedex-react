import React from 'react'
import styles from './PokemonMovesCard.module.css'
import { Move } from '../../shared/types/Pokemon'
import MoveCard from '../../shared/UI/MoveCard/MoveCard'

type PokemonMovesCardProps = {
    moves: Move[]
}

const PokemonMovesCard = ({moves}: PokemonMovesCardProps) => {
  return (
    <div className={styles.container}>
        <h3 className={styles.movesHeader}>Moves</h3>
        <div className={styles.movesContainer}>
            {moves.slice(0,6).map((move) => {
                return (
                    <MoveCard name={move.move.name} url={move.move.url} key={move.move.name}/>
                )
            })}
        </div>
    </div>
  )
}

export default PokemonMovesCard
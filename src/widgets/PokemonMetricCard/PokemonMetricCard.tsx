import React from 'react'
import styles from './PokemonMetricCard.module.css'
import { numberToFoots, numberToKilograms, numberToMeters, numberToPounds } from '../../utils/functions'

type PokemonMetricCardProps = {
    height: number,
    weight: number
}

const PokemonMetricCard = ({height, weight}: PokemonMetricCardProps) => {
  return (
    <div className={styles.container}>
        <h3 className={styles.breedingsHeader}>Breeding</h3>
        <div className={styles.breedingsContainer}>
            <div className={styles.breedingsBlock}>
                <p>Height</p>
                <div className={styles.breedingsStats}>
                    <p>{numberToFoots(height)}"</p>
                    <p>{numberToMeters(height)} m</p>
                </div>
            </div>
            <div className={styles.breedingsBlock}>
                <p>Weight</p>
                <div className={styles.breedingsStats}>
                    <p>{numberToPounds(weight)} lb</p>
                    <p>{numberToKilograms(weight)} kg</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PokemonMetricCard
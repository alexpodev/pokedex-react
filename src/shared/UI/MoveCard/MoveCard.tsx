import React, { useEffect, useState } from 'react'
import styles from './MoveCard.module.css'
import { firstLetterToUpperCase } from '../../../utils/functions'
import { MoveDetalis } from '../../types/Pokemon'
import { fetchPokemonMoveInfo } from '../../../api/fetchPokemonInfo'
import PokeTypeIcon from '../../icons/PokeTypeIcon'

type MoveCardProps = {
    name: string,
    url: string,
}


const MoveCard = ({name, url}: MoveCardProps) => {
    const [move, setMove] = useState<MoveDetalis>();

    useEffect(() => {
        async function fetchData() {
            const data = await fetchPokemonMoveInfo(url);
            setMove(data);
        }

        fetchData()
    }, [])

  return (
    <div className={styles.container} style={{backgroundColor: `var(--${move?.type.name})`}}>
        <div className={styles.iconContainer}>
            <PokeTypeIcon width={20} height={20} type={move?.type.name || ''}/>
        </div>
        <p>{firstLetterToUpperCase(name)}</p>
    </div>
  )
}

export default MoveCard
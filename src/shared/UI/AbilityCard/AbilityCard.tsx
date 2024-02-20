import React from 'react';
import styles from './AbilityCard.module.css';
import { firstLetterToUpperCase } from '../../../utils/functions';

type AbilityProps = {
    isHidden: boolean,
    name: string,
}

const AbilityCard = ({name, isHidden}: AbilityProps) => {
  return (
    <div className={styles.container} style={{backgroundColor: isHidden ? 'var(--orange)' : 'var(--bright-yellow)'}}>
        <div className={styles.iconContainer}>
            <p style={{color: isHidden ? 'var(--orange)' : 'var(--dark-yellow)'}}>{name.split('')[0]}</p>
        </div>
        <p style={{color: isHidden ? 'white' : 'var(--dark-yellow)'}}>{firstLetterToUpperCase(name)}</p>
    </div>
  )
}

export default AbilityCard
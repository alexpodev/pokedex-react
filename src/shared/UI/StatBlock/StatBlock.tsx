import React, { CSSProperties } from 'react'
import styles from './StatBlock.module.css'
import { firstLetterToUpperCase } from '../../../utils/functions';

type StatBlockProps = {
  label: string,
  stat: number
}
enum stats {hp="hp", attack="attack", defense="defense", speed="speed"}


const StatBlock = ({ stat, label }: StatBlockProps) => {
    const statStyle: CSSProperties = {
      backgroundColor: `rgba(var(--${label}), 0.3)`,
      width: '100%',
      borderRadius: '5px',
      position: 'relative',
      zIndex: '0',
    }
    
    const filledStatStyle: CSSProperties = {
      backgroundColor: `rgba(var(--${label}), 1)`,
      width: `calc((${stat}/var(--max${label})) * 100%)`,
      padding: '5px 0',
      borderRadius: '5px',
      position: 'relative',
      zIndex: '10',
    }

      return (
      <div className={styles.container}>
        <p className={styles.label}>{firstLetterToUpperCase(label)}</p>
        <div style={statStyle}>
            <div style={filledStatStyle}></div>
        </div>
      </div>
      ) 
}
  

export default StatBlock
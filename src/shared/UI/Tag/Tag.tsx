import React from 'react'
import style from './Tag.module.css'

export type TagProps = {
    label: string,
}

const Tag = ({label}: TagProps) => {
  return (
    <div className={style.tag} style={{backgroundColor: `var(--${label})`}}>{label}</div>
  )
}

export default Tag
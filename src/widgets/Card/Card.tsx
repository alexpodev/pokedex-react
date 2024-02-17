import React, { useEffect, useState } from 'react'
import style from './Card.module.css'
import axios from 'axios'
import Tag from '../../shared/UI/Tag/Tag'
import { addLeadingZeros, firstLetterToUpperCase } from '../../utils/functions'

type CardProps = {
  label: string,
  url: string,
  isVisible: boolean
}

type Tags = {
  slot: number,
  type: Tag,
}

type Tag = {
  name: string,
  url: string,
}



const Card = ({label, url, isVisible}: CardProps) => {
  const [pokeId, setPokeId] = useState<number>(0)
  const [sprite, setSprite] = useState<string>()
  const [tags, setTags] = useState<Tags[]>([])
  useEffect(() => {
    axios
    .get(url)
    .then((response) => {
      setPokeId(response.data.id)
      setSprite(response.data.sprites.front_default)
      setTags(response.data.types)
    })
  }, [])

  return (
    <div className={style.container} style={isVisible ? {display: ''} : {display: "none"}}>
        <div className={style.headerRow}>
            <h4>{firstLetterToUpperCase(label)}</h4>
            <p>#{addLeadingZeros(pokeId, 3)}</p>
        </div>
        <img src={sprite} alt="" />
        <div className={style.tags}>
          {tags.map((tag) => {
            return (
              <Tag label={tag.type.name}/>
            )
          })}
        </div>
    </div>
  )
}

Card.defaultProps = {
  label: "z",
  url: "",
  isVisible: true
}

export default Card
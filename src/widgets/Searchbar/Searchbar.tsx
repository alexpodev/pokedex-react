import React from 'react'
import style from './Searchbar.module.css'
import Search from '../../shared/icons/Search'

type SearchbarProps = {
  state: string,
  setState: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Searchbar = ({state, setState, handleClick}: SearchbarProps) => {



  return (
    <div className={style.container}>
      <h3>
        Who are you looking for?
      </h3>
       <div className={style.searchbar}>
          <Search width="24" height="24"/>
          <input value={state} onChange={setState} placeholder='E.g. Pikachu' type="text" />
          <button onClick={handleClick}>GO</button>
       </div>
    </div>
  )
}

export default Searchbar
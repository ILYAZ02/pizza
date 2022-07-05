import React, { useState } from 'react'
import s from './Menu.module.scss'
import { NavLink } from 'react-router-dom'
import { links } from '../../constants/menuPizzas'

// import { Value } from 'sass'
const Menu = ( {setValue, value}) => {
  const [activeLink, setActiveLink] = useState(0)
  const handleActive = (i) => {
    setActiveLink(i)
  }
  return (
    <div>
      <div className={s.komponent}>
        {links.map((link, i) => (
          <NavLink
            to={link.url}
            key={i} onClick={() => handleActive(i)}
            className={activeLink === i ? s.active : ''}
          >
            {link.name}
          </NavLink>
        ))}
        <div className={s.poisk}>
          <input placeholder='поиск...'
            type="search" 
            value={value}
            onChange={e => setValue(e.target.value)}/>
        </div>
      </div>
      <div className={s.pizza}><p>Все пиццы</p></div>
      <div className=""></div>
     
    
    </div>
  )
}

export default Menu
import React from 'react'
import logotip from '../../img/logotip.svg'
import korzina from '../../img/korzina.svg'
import s from '../Header/Header.module.scss'
import {NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <div className={s.menu}>
            <NavLink to='/'>
            <img src={logotip} />
            </NavLink>
           
            <div className={s.korz}>

                <p>0 ₽</p> <hr />
                <NavLink to='/basket'>
                <img src={korzina}  />
                </NavLink> 
               
            </div>
            <div className={s.hr}>
            </div>
        </div>

    )
}

export default Header
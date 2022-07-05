import React from 'react'
import s from '../Basket/Basket.module.scss'
import shop from '../../img/shop.svg'
import { NavLink } from 'react-router-dom'
const Basket = () => {
    return (
        <div className={s.korzina}>
            <h1>Корзина пустая 😕</h1>
            <p>Вероятней всего, вы не заказывали ещё пиццу.<br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img src={shop} />
            <NavLink to='/'>
            <button>Вернуться назад</button>
            </NavLink>
        </div>
    )
}

export default Basket
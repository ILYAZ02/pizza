import React, { useState } from 'react'
import likedImg from '../../img/11.svg'
import likeImg from '../../img/22.svg'
import s from '../Pizzas/Pizza.module.scss'

const Pizza = ({ item }) => {
    const [like, setLike] = useState(false)
    function anClick() {
        setLike(!like)

    }
    return (
        <div className={s.meu}>
            <div className={s.menu}>
                <div >
                    <img src={item.image} />
                    <div className={s.button}>
                        <button> тонкое</button>
                        <button>традиционное</button>
                        <button>26 см.</button>
                        <button>30 см.</button>
                        <button>40 см.</button>
                    </div>

                    <h3>{item.name}</h3>
                </div>

                <div className={s.flex}>
                    <h5>{item.price}</h5>
                    <img style={{
                        width: '100px'
                    }}
                        onClick={anClick}
                        src={like ? likeImg : likedImg}
                        alt="like" />
                </div>


            </div>
        </div>

    )
}

export default Pizza
import React from 'react'
import { useState } from 'react'
import m1 from '../img/pizza/m1.jpeg'
import s from '../Vidy/Mysnye.module.scss'
import plusImg from '../img/11.svg'
import plusedImg from '../img/22.svg'
const Mysnye = () => {
    const [plus, setPlus] = useState(false)
    function anClick() {
        setPlus(!plus)
    }
  return (

    <div className={s.a}>
    <img src={m1} />
    <p>Пепперони Фреш<br/> с перцем</p>
    <div className={s.button}>
        <button>тонкое</button>
        <button>традиционное</button>
        <button>26 см.</button>
        <button>30 см.</button>
        <button>40 см.</button>
        <div className={s.zakaz}>
            <p>от 395 ₽</p>
        </div>
        <div className={s.dobav}>
            <img style={{ width: '100px' }}
                onClick={anClick}
                src={plus ? plusedImg : plusImg}
                alt="plus" />
        </div>

    </div>

</div>
  )
}

export default Mysnye
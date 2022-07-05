import React from 'react'
import { useState } from 'react'
import s from '../Vidy/Ostrye.module.scss'
import plusImg from '../img/11.svg'
import plusedImg from '../img/22.svg'
import p1 from '../img/pizza/1.svg'
import f4 from '../img/pizza/f4.jpg'
import vImg from '../img/11.svg'
import vdImg from '../img/22.svg'
const Ostrye = () => {
    const [plus, setPlus] = useState(false)
    const [v, setV] = useState(false)
    function anClick() {
        setPlus(!plus)
    }
    function adClick() {
        setV(!v)
    }

    return (
        <section className={s.menu}>
            <div className={s.a}>
                <img src={p1} />
                <p>Чизбургер-пицца</p>
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
            <div className={s.a}>
                <div className={s.f1}>
                    <img src={f4} />
                </div>
                <p>Овощи и грибы</p>
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
                            onClick={adClick}
                            src={v ? vdImg : vImg}
                            alt="plus" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Ostrye
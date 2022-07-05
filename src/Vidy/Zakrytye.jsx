import React from 'react'
import s from '../Vidy/Zakrytye.module.scss'
import { useState } from 'react'
import plusImg from '../img/11.svg'
import plusedImg from '../img/22.svg'
import p1 from '../img/pizza/marga.jpg'
import dImg from '../img/11.svg'
import ddImg from '../img/22.svg'
import f2 from '../img/pizza/f2.jpg'
import p4 from '../img/pizza/4.svg'
import bImg from '../img/11.svg'
import bdImg from '../img/22.svg'
const Zakrytye = () => {
    const [plus, setPlus] = useState(false)
    const [d, setD] = useState(false)
    const [b, setB] = useState(false)
    function anClick() {
        setPlus(!plus)
    }
    function arClick() {
        setD(!d)
    }
    function alClick() {
        setB(!b)
    }
  return (
  
    <section className={s.menu}>
   <div className={s.a}>
                <img src={p1} />
                <p>Маргаритта</p>
                <div className={s.button}>
                    <button>тонкое</button>
                    <button>традиционное</button>
                    <button>26 см.</button>
                    <button>30 см.</button>
                    <button>40 см.</button>
                    <div className={s.zakaz}>
                        <p>от 450 ₽</p>
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
                <div className={s.f11}>
                    <img src={f2} />
                </div>

                <p>Четыре сезона</p>
                <div className={s.button}>
                    <button>тонкое</button>
                    <button>традиционное</button>
                    <button>26 см.</button>
                    <button>30 см.</button>
                    <button>40 см.</button>
                    <div className={s.zakaz}>
                        <p>от 290 ₽</p>

                    </div>
                    <div className={s.dobav}>
                        <img style={{ width: '100px' }}
                            onClick={arClick}
                            src={d ? ddImg : dImg}
                            alt="plus" />
                    </div>
                </div>

            </div>
            <div className={s.a}>
                <img src={p4} />
                <p>Сырный цыпленок</p>
                <div className={s.button}>
                    <button>тонкое</button>
                    <button>традиционное</button>
                    <button>26 см.</button>
                    <button>30 см.</button>
                    <button>40 см.</button>
                    <div className={s.zakaz}>
                        <p>от 385 ₽</p>
                    </div>
                    <div className={s.dobav}>
                        <img style={{ width: '100px' }}
                            onClick={alClick}
                            src={b ? bdImg : bImg}
                            alt="plus" />
                    </div>
                </div>

            </div>
    </section>
  )
}

export default Zakrytye
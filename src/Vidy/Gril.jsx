import React from 'react'
import { useState } from 'react'
import s from '../Vidy/Gril.module.scss'
import f1 from '../img/pizza/k1.jpg'
import kImg from '../img/11.svg'
import kdImg from '../img/22.svg'
import gImg from '../img/11.svg'
import gdImg from '../img/22.svg'
import f3 from '../img/pizza/k2.jpg'
const Gril = () => {
    const [k, setK] = useState(false)
    const [g,setG] = useState(false)
    function apClick() {
        setK(!k)
    }
      
    function avClick() {
        setG(!g)
    }
    return (
        <section className={s.menu}>
            <div className={s.a}>
                <div className={s.f1}>
                    <img src={f1} />
                </div>

                <p>Кисло-сладкий цыпленок</p>
                <div className={s.button}>
                    <button>тонкое</button>
                    <button>традиционное</button>
                    <button>26 см.</button>
                    <button>30 см.</button>
                    <button>40 см.</button>
                    <div className={s.zakaz}>
                        <p>от 275 ₽</p>

                    </div>
                    <div className={s.dobav}>
                        <img style={{ width: '100px' }}
                            onClick={apClick}
                            src={k ? kdImg : kImg}
                            alt="plus" />
                    </div>
                </div>

            </div>
            <div className={s.a}>
                <div className={s.f1}>
                    <img src={f3} />
                </div>
                <p>Крейзи пепперони</p>
                <div className={s.button}>
                    <button>тонкое</button>
                    <button>традиционное</button>
                    <button>26 см.</button>
                    <button>30 см.</button>
                    <button>40 см.</button>
                    <div className={s.zakaz}>
                        <p>от 580 ₽</p>

                    </div>
                    <div className={s.dobav}>
                        <img style={{ width: '100px' }}
                            onClick={avClick}
                            src={g ? gdImg : gImg}
                            alt="plus" />
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Gril
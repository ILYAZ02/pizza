import React from 'react'
import { useState } from 'react'
import p2 from '../img/pizza/2.svg'
import f1 from '../img/pizza/f1.jpg'
import pImg from '../img/11.svg'
import pdImg from '../img/22.svg'
import  s from '../Vidy/Vegetar.module.scss'
import f3 from '../img/pizza/f3.jpg'
import gImg from '../img/11.svg'
import gdImg from '../img/22.svg'
import kImg from '../img/11.svg'
import kdImg from '../img/22.svg'
const Vegetar = () => {
    const [g,setG] = useState(false)
    const [p,setP] = useState(false)
    const [k,setK] = useState(false)
    function avClick() {
        setG(!g)
    }
    function amClick() {
        setP(!p)
    }
    function apClick() {
        setK(!k)
    }

  return (
    <section className={s.menu}>
 <div className={s.a}>
    <div className={s.f1}>
        <img src={f3} />
    </div>
    <p>Цыпленок барбекю</p>
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
                onClick={avClick}
                src={g ? gdImg : gImg}
                alt="plus" />
        </div>
    </div>

</div>
<div className={s.a}>
                <img src={p2} />
                <p>Сырная</p>
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
                            onClick={amClick}
                            src={p ? pdImg : pImg}
                            alt="p" />
                    </div>
                </div>

            </div>
            <div className={s.a}>
                <div className={s.f1}>
                    <img src={f1} />
                </div>

                <p>Ппепперони</p>
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
                            onClick={apClick}
                            src={k ? kdImg : kImg}
                            alt="plus" />
                    </div>
                </div>

            </div>
    </section>
   

  )
}

export default Vegetar
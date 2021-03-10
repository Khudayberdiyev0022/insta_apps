import React from 'react'
import style from './History.module.css'


function History({img, name}) {
    return (
        <div className={style.main}>
            <div className={style.imgBox}>
                <div className={style.img} style={{backgroundImage: `url(${img})`}}></div>
            </div>
            <h1>{name ? name : 'Bekhzod'}</h1>
        </div>
    )
}

export default History

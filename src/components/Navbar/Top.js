import React from 'react'
import {FaFacebookMessenger} from 'react-icons/fa'
import style from './Top.module.css'

function Top() {
    return (
        <div className={style.main}>
            <div className={style.flex}>
                <h1>Instagram</h1>
                <FaFacebookMessenger />
            </div>
        </div>
    )
}

export default Top

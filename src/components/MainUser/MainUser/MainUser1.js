import React from 'react'
import style from './MainUser1.module.css'
import {AiOutlinePlus, AiOutlineMenu,AiFillCaretDown} from 'react-icons/ai'

function MainUser1() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.name}>
                    <h1>bekoo.me</h1>
                    <AiFillCaretDown />
                </div>
                <div className={style.icons}>
                    <AiOutlinePlus />
                    <AiOutlineMenu />
                </div>
            </div>
        </div>
    )
}

export default MainUser1

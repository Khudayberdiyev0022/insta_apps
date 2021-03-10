import React from 'react'
import img from '../../../assets/img/1.jpg'
import style from './Person.module.css'
function Person() {
    return (
        <div style={{backgroundImage: `url(${img})`}} className={style.main}>
            
        </div>
    )
}

export default Person

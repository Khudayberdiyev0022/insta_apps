import React, {useState} from 'react'
import {IoQrCodeOutline} from 'react-icons/io5'
import {BiSearch} from 'react-icons/bi'

import style from './Search1.module.css'


function Search1({inputSearch,videoSearch}) {
    const [input, setInput] = useState('')

    const Submit = (e) => {
        e.preventDefault()
        inputSearch(input)
        videoSearch(input)
        setInput('')
    }

    return (
        <div className={style.main}>
            <form className={style.input} onSubmit={Submit}>
                <BiSearch type='submit'/>
                <input 
                    type="text" 
                    placeholder='Search'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </form>
            <IoQrCodeOutline />
        </div>
    )
}

export default Search1

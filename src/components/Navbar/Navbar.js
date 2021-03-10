import React from 'react';
import {Link} from 'react-router-dom'

import style from './Navbar.module.css'
import {FiSearch, FiHeart} from 'react-icons/fi'
import {VscHome} from 'react-icons/vsc'
import {BsPlusSquare} from 'react-icons/bs'
import Person from './NavbarParts/Person';
import {BiHeart} from 'react-icons/bi'



function Navbar() {
    return (
        <div className={style.main}>
            <Link to='/'>
                <VscHome />
            </Link>
            <Link to='/search'>
                <FiSearch />
            </Link>
            <Link to='/add'>
                <BsPlusSquare />
            </Link>
            <Link to='/like'>
                <BiHeart />
            </Link>
            <Link to='/user'>
                <Person />
            </Link>
        </div>
    )
}

export default Navbar

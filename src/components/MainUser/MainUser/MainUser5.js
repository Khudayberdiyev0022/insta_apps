import React, {useState} from 'react'
import {connect} from 'react-redux'
import style from './MainUser5.module.css'

import {BsGrid3X3} from 'react-icons/bs';
import {BiUserPin} from 'react-icons/bi'






function MainUser5(props) {
    const [click, setClick] = useState(true)

    const renderPicture = () => {
        return(
            <div className={style.grid}>
                {
                    props.pictures.map((picture, index) => {
                        return(
                            <div
                                key={index} 
                                className={style.card}
                                style={{backgroundImage: `url(${picture.urls.regular})`}}
                            >
                           </div> 
                        )
                    })
                }
            </div>
        )
    }
    const renderLast = () => {
        return(
            <div className={style.default}>
                <h1>No videos!!!</h1>
            </div>
        )
    }





    return (
        <div className={style.main}>
            <div className={style.buttons}>
                <div 
                    className={!click ? style.clicked : ''} 
                    onClick={() => setClick(false)}>
                    <BsGrid3X3 />
                </div>
                <div 
                    className={click ? style.clicked :''} 
                    onClick={() => setClick(true)}>
                    <BiUserPin />
                </div>
            </div>
            {!click && renderPicture()}
            {click && renderLast() }
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state);
    return{
        pictures: state.selectedPictures
    }
}

export default connect(mapStateToProps)(MainUser5)

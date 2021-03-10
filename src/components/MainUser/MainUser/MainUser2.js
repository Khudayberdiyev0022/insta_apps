import React from 'react';
import style from './MainUser2.module.css';
import img from '../../../assets/img/1.jpg'
import { connect } from 'react-redux';

function MainUser2(props) {
    return (
        <div className={style.main}>
            <div className={style.img} style={{backgroundImage: `url(${img})`}}></div>
            <div className={style.inform}>
                <div className={style.posts}>
                    <h3>{props.numberOfPosts}</h3>
                    <h5>Posts</h5>
                </div>
                <div className={style.followers}>
                    <h3>510</h3>
                    <h5>Followers</h5>
                </div>
                <div className={style.following}>
                    <h3>203</h3>
                    <h5>Following</h5>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const numberOfPosts = state.selectedPictures.length

    return{
        numberOfPosts
    }
}

export default connect(mapStateToProps)(MainUser2)

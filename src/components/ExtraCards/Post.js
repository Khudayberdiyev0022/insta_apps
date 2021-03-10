import React, {useState} from 'react'
import style from './Post.module.css'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import {IoMdHeartEmpty, IoMdHeart} from 'react-icons/io'
import {BiMessageRounded, BiBookmark} from 'react-icons/bi'
import {RiSendPlaneFill}from 'react-icons/ri'
import {FaBookmark} from 'react-icons/fa'




function Post({img, userName, likes, userImg}) {
    const [state, setstate] = useState(false)
    const [para, setPara] = useState(false)
    const [save, setSave] = useState(false)

    const clicked =() => {
        setstate(true)
    }
    return (
        <div className={style.main}>
            <div className={style.name}>
                <div className={style.rightSide}>
                    <div className={style.smallImg} style={{backgroundImage: `url(${userImg})`}}></div>
                    <h4>{userName}</h4>
                </div>
                <HiOutlineDotsVertical />
            </div>
            <div 
                className={style.img} 
                style={{backgroundImage: `url(${img})`}}
                onDoubleClick={clicked}
            >
                {state && <IoMdHeart color='red' width='10px' height='10px'/>}
            </div>
            <div className={style.container}>
                <div className={style.icons}>
                    <div className={style.threeIcons}>
                        {!state ? <IoMdHeartEmpty onClick={() => setstate(!state)} color='white' fill='white'/> : <IoMdHeart color='red' onClick={() => setstate(!state)}/>}
                        <BiMessageRounded />
                        <RiSendPlaneFill />
                    </div>
                    <div className={style.save}>
                        {save ? <FaBookmark stroke='white' color='white' onClick={() => setSave(false)}/> : <BiBookmark onClick={() => setSave(true)}/>}
                    </div>
                </div>
            </div>
            <div className={style.paragraph}>
                <h3>{likes + (state && 1)} Likes </h3>
                <div>
                    <h4>{userName}</h4>
                    <p className={para ? style.para : ''}>Lorem ipsum dolor sit amet consectetur <span onClick={() => setPara(!para)}>For more...</span> elit. Quidem repellendus at, temporibus distinctio laboriosam error ullam, </p>
                </div>
            </div>
        </div>
    )
}

export default Post

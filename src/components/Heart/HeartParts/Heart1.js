import React from 'react'
import style from './Heart1.module.css'

function Heart1({photos}) {
    return (
        <div className={style.main}>
            {
                photos.map((photo, index) => {
                    console.log(photo);
                    return(
                        <div key={index} className={style.card}>
                            <div className={style.info}>
                                <div className={style.userImg} style={{backgroundImage: `url(${photo.user.profile_image.small})`}}></div>
                                    <div style={{marginLeft:'5px',width: '90%',height: '60px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                                        <p style={{padding: '20px', margin:'0px', height: '20px'}}>
                                        {photo.user.username}
                                        </p >
                                        <p style={{padding: '20px', margin:'0px', height: '20px'}}>{photo.likes}</p>
                                    </div>
                            </div>
                            <div className={style.img}style={{backgroundImage:`url(${photo.urls.regular})`}}></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Heart1

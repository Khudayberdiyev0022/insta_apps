import React from 'react'
import style from './Search2.module.css'
import './Search2.css'

function Search2({PhotoAndVideo}) {
    console.log(PhotoAndVideo)
    return (
        <div className={style.main}>
            {
                PhotoAndVideo.length > 10 && PhotoAndVideo.map((Photo, index) => {
                    if(Photo.alt_description){
                        return(
                                <div
                                    key={index}
                                    style={{backgroundImage: `url(${Photo.urls.regular})`}}    
                                    className={style.img}
                                >
                                </div>
                        )
                    }
                })
            }
            {
                PhotoAndVideo.length > 20 && PhotoAndVideo.map((Video, index) => {
                    if(!Video.alt_description){
                        return(
                            <div key={index} className={`card${index}`}>
                                <iframe title={index} name="iframe1" className={style.iframe1} 
                                    frameBorder="0" autoPlay border="0" cellSpacing="0" src={`https://www.youtube.com/embed/${Video.id.videoId}`}
                                    style={{borderStyle: 'none',width: '100%', height: '260px'}}>
                                </iframe>
                            </div>
                    )
                    }
                })
            }
        </div>
    )
}

export default Search2


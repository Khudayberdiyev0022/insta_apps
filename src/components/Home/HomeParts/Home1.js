import React, { Fragment} from 'react'
import style from './Home1.module.css'
import History from '../../ExtraCards/History'


function Home1({photos}) {
    return (
        <div className={style.main}>
            {
                photos.map((photo, index) => {
                    return(
                        <Fragment key={index}>
                            <History img={photo.urls.regular} name={photo.user.first_name}/>
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default Home1

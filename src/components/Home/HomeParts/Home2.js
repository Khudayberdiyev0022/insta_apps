import React, { Fragment } from 'react'
import Post from '../../ExtraCards/Post'
import style from './Home2.module.css'

const Home2 = ({photos}) => {
    return (
        <div>
            {
                photos.map((photo, index) => {
                    return(
                        <Fragment key={index}>
                            <Post 
                                img={photo.urls.regular} 
                                userName={photo.user.first_name}
                                likes ={photo.likes}
                                userImg = {photo.user.profile_image.small}
                            />
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default Home2

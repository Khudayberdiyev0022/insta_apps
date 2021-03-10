import React, { useEffect, useState } from 'react'
import style from './Heart.module.css'
import axios from 'axios'
import Heart1 from './HeartParts/Heart1'


function Heart() {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://api.unsplash.com/photos', {
            params: {query: 'apple', per_page: 30},
            headers:{
                        Authorization:'Client-ID EtDTsD-Dj0GnmULLppDNvvrB-s8DDUBngK5_ZUehlAQ'
                    }
            })
            setPhotos(response.data)
        }
        fetchData()
    }, [])



    return (
        <div className={style.main}>
            <div className={style.header}>
                <h1>Activity</h1>
            </div>
            <Heart1 photos={photos}/>
        </div>
    )
}

export default Heart

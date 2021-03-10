import React, {useState, useEffect} from 'react'
import style from './Home.module.css'
import Home1 from './HomeParts/Home1'
import axios from 'axios'
import Home2 from './HomeParts/Home2'
import Top from '../Navbar/Top'


function Home() {
    const [photos, setPhotos] = useState([])

     useEffect( () => {
        const fetchData = async () => {
            const response = await axios.get('https://api.unsplash.com/photos', {
            params: {query: 'user', per_page: 20},
            headers:{
                        Authorization:'Client-ID EtDTsD-Dj0GnmULLppDNvvrB-s8DDUBngK5_ZUehlAQ'
                    }
            })
            setPhotos(response.data)
        }
        fetchData()
    }, [])
    console.log(photos);
    return (
        <div className={style.main}>
            <Top />
            <Home1 photos={photos}/>
            <Home2 photos={photos}/>
        </div>
    )
}

export default Home

import React,{useState, useEffect} from 'react'
import style from './Search.module.css'
import Search1 from './SearchParts/Search1'
import axios from 'axios'
import Youtube from '../../API/Youtube'
import Search2 from './SearchParts/Search2'


function Search() {
    const [photos, setPhotos] = useState([])
    const [videos, setVideos] = useState([])
    const [PhotoAndVideo, setPhotoAndVideo] = useState([])

    const videoSearch = async searchName => {
        const response = await Youtube.get('/search' ,{
            params :{
                q: searchName
            }
        })
        setVideos(response.data.items)
    }
    useEffect(() => {
        inputSearch()
        const addAll = () => {
            setPhotoAndVideo([...photos].concat(videos))
        }
        photos && videos && addAll()
        return() => {
            clearImmediate(addAll)
        }
    }, [videos])
    const inputSearch = (searchName='football') => {
        const fetchData = async () => {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: searchName, per_page: 28},
            headers:{
                        Authorization:'Client-ID EtDTsD-Dj0GnmULLppDNvvrB-s8DDUBngK5_ZUehlAQ'
                    }
            })
            setPhotos(response.data.results)
        }
        fetchData()
    }
    
    console.log(videos);
    
    return (
        <div className={style.main}>
            <Search1 inputSearch={inputSearch} videoSearch={videoSearch}/>
            <Search2 PhotoAndVideo={PhotoAndVideo}/>
        </div>
    )
}

export default Search

